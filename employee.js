const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');


//var app = express();

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  //password: "",
  database: "employeeDB"
  
});

console.log(connection.config.database);

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  
  console.log('you are connected!')
  
  // run the start function after the connection is made to prompt the user
  start();
});


function start() {
    inquirer
        .prompt({
            type: "list",
            name: "addViewUpdate",
            message: "Would you like to [ADD], [UPDATE], or [VIEW] employee info?",
            choices: ["ADD", "UPDATE", "VIEW", "EXIT"]
        })
      .then(function (answer) {

       // based on their answer, either call a function
       
        if (answer.addViewUpdate === "ADD") {
          addInfo();
      }
      else if(answer.addViewUpdate === "UPDATE") {
        updateInfo();
      } 
      else if(answer.addViewUpdate === "VIEW") {
        viewEmployee();
      } else{
        connection.end();
      }
      
      });
  }


//ADDING INFO////////////////////////////////////////////////////////////////////////////////

 function addInfo() {
  // prompt for adding info about employee
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the employees department?"
      },
      {
        name: "departmentKey",
        type: "input",
        message: "What is the employees department key number?"
      }
    ])
    .then(function(answer) {
      console.log(answer);

      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "REPLACE INTO department SET ?",
        {
          employee_department: answer.department,
          depart_key_num: answer.departmentKey
        },
        function(err) {
          if (err) throw err;
          
        }
      );
      
    })
    .then(function(answer){

      inquirer
    .prompt([
  
      {
        name: "title",
        type: "input",
        message: "What is the employees role title?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the employees salary?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the employees department id?"
      }
    ])
    .then(function(answer) {
      console.log(answer);

      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "REPLACE INTO employee_role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        function(err) {
          if (err) throw err;
          addEmployee();
          
        }
      );
      
    })
    
      
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the employees first name?"
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employees last name?"
      },
      {
        name: "rollId",
        type: "input",
        message: "What is the employees role id number?"
      },
      {
        name: "managerId",
        type: "input",
        message: "What is the employees managers id number?"
      }
    ])
    .then(function(answer) {
      console.log(answer);

      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "REPLACE INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.rollId,
          manager_id: answer.managerId,
        },
        function(err) {
          if (err) throw err;
          start();
        }
      );
      
    })
};





//UPDATE INFO////////////////////////////////////////////////////////////////////////////////

function updateInfo() {
  inquirer
    .prompt([
      
      {
        name: "lastName",
        type: "input",
        message: "What is the employees last name?"
      },
      {
        name: "rollId",
        type: "input",
        message: "What is the employees NEW role id number?"
      },
      {
        name: "managerId",
        type: "input",
        message: "What is the employees managers NEW id number?"
      }
     
    ])
    .then(function(answer){
      
      connection.query(
        "UPDATE employee SET ? WHERE ?",

        [
          {
            role_id: answer.rollId,
            manager_id: answer.managerId,
            
           },
          {
            last_name: answer.lastName,
            
           }

        ]
      );
   updateEmployeeRole();
    })
}

function updateEmployeeRole(){
  inquirer
  .prompt([
   
    {
      name: "department_id",
      type: "input",
      message: "What is the employees CURRENT department id?"
    },
    {
      name: "title",
      type: "input",
      message: "What is the employees NEW role title?"
    },
    {
      name: "salary",
      type: "input",
      message: "What is the employees NEW salary?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    },
    
    
  ])
  .then(function(answer){
    
    connection.query(
      "UPDATE employee_role SET ? WHERE ?",

      [
        {
          title: answer.title,
          salary: answer.salary,
          
         },
        {
          department_id: answer.department_id,
          
         }

      ]
    );
 updateEmployeeDeparment();
  })
}


function updateEmployeeDeparment() {
  inquirer
    .prompt([
      {
        name: "department_key_num",
        type: "input",
        message: "What is the employees CURRENT department key num?"
      },
      {
        name: "department",
        type: "input",
        message: "What is the employees NEW department?"
      }
    ])
    .then(function(answer){
      
      connection.query(
        "UPDATE department SET ? WHERE ?",

        [
          {
            employee_department: answer.department
            
           },
          {
            depart_key_num: answer.department_key_num
            
           }

        ]
      );
   start();
    })
  
}

//VIEW INFO////////////////////////////////////////////////////////////////////////////////

function viewEmployee() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    
    console.log("~~~~~~~~INFORMATION ALLOCATED BY ID NUMBER~~~~~~~~")

    console.table(res);
    viewTable();
  });
}

function viewTable() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    
    console.table(res);
    viewEmployeeRole()
  });
}


function viewEmployeeRole() {
  connection.query("SELECT * FROM employee_role", function(err, res) {
    if (err) throw err;
    
    console.table(res);
    start();
  });
}


