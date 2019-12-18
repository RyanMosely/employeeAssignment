DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
employee_name VARCHAR(30)
);

CREATE TABLE employee_role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);

INSERT INTO department (employee_name)
VALUES ("some department");

INSERT INTO employee_role (title, salary)
VALUES ("some role", 5.0);

INSERT INTO employee (first_name, last_name)
VALUES ("Joe", "Mathews");

SELECT*FROM department;
SELECT*from employee_role;
SELECT*FROM employee;
