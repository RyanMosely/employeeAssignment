var express = require('express');
var mysql = require("mysql");
var inquirer = require("inquirer");


//var app = express();

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
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
      .then(function () {

      console.log('howdy')

        // if (answer.addViewUpdate === "ADD") {
        //     return console.log("howdy");
        //   }
        //   else if(answer.addViewUpdate === "UPDATE") {
        //       return console.log("dude");
        //   }
        //   else if(answer.addViewUpdate === "VIEW") {
        //       return console.log("blah blah");
        //   } else{
        //       console.log("mew mew mew");
        //       //connection.end();
        //   }

          /*
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === "ADD") {
          //postAuction();
         return true;
        }
        else if(answer.postOrBid === "UPDATE") {
          //bidAuction();
          return true;
        }
        else if(answer.postOrBid === "VIEW") {
           // bidAuction();
           return true;
          } 
        else{
          connection.end();
        }
        */
      
      });
  }

 