# employeeAssignment

## Installation

to access this application, please follow the instructions below:

1.) In the provided github repository, press the 'Clone or download' button and copy the link that appears.

2.) In your terminal, to place the cloned respository in your desired location: type git clone, paste the copied link, and press enter.


## Usage

1.) Within the cloned respository in your terminal,  assuming you have node.js installed on your computer, type 'node employee.js' and press enter.

2.) You will then be provided a question with 4 options:

Would you like to [ADD], [UPDATE], or [VIEW] employee info?

ADD (select to add employee info)
UPDATE (select to update employee info)
VIEW (select to view employee info)
EXIT (select to exit application)

------------------------------------------------------------------------------------

## selecting [ADD]

you will then be prompted to add information based on the following questions:

What is the employees department? 
What is the employees department key number? ~~[important!]~~
What is the employees role title? 
What is the employees salary?
What is the employees department id? ~~[important!]~~
What is the employees first name? 
What is the employees last name?  ~~[important!]~~
What is the employees role id number? 
What is the employees managers id number? 

~~[important!]~~ : These values need to be noted in order to [UPDATE] employee information. You can also access this information in the [VIEW] option at the start of the application.

* * Also to note, please do not add reoccuring values in order to update information correctly.


## selecting [UPDATE]

you will then be prompted to add information based on the following questions:

What is the employees last name? ~~[important!]~~
What is the employees NEW role id number?
What is the employees managers NEW id number?
What is the employees CURRENT department id? ~~[important!]~~
What is the employees NEW role title?
What is the employees NEW salary?
What is the employees CURRENT department key num? ~~[important!]~~

~~[important!]~~: These values need to be matched from the employees current information in order to update the employees information correctly.
You can also access this information in the [VIEW] option at the start of the application.


## selecting [VIEW]

Selecting this option will display a table with all employee information inside the terminal. Each employee is assigned to an id number and is referenced in each table to match each row accordingly.

Example:

~~~~~~~~INFORMATION ALLOCATED BY ID NUMBER~~~~~~~~
id  first_name  last_name  role_id  manager_id
--  ----------  ---------  -------  ----------
1   joe         smith      77       88         [Joe Smiths row]
2   Billy       Bob        90       700       [Billy Bobs row]

id  employee_department  depart_key_num
--  -------------------  --------------
1   grip                 22                         [Joe Smiths row]
2   design               55                      [Billy Bobs row]

id  title    salary  department_id
--  -------  ------  -------------
1   key      70      22                         [Joe Smiths row]
2   manager  70      33                     [Billy Bobs row]

## selecting [EXIT]

Selecting this will exit the user out of the application.



## Conclusion

This project really opened me up to learn how javascript can be utilized to handle databases, furthermore how javascript operates with MySQL to dynamically work with a database. From the beginning, learning the syntax for MySQL was very new to me, so going over what certain statements do took some time for me to learn, on top of how the syntax can be applied to javascript with the MySQL npm package. I think (from my vague/novice point of view) since mySQL is applied in alot of companies to handle databases, this skill is very important for me to learn more about if I want to go into either front-end or back-end development. I think what wil make my project stand out the most is how relatively clean my javascript is, as I did seperate each section for adding, updating, and viewing information in the dabase.
