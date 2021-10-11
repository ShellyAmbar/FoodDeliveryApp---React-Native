const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Metukonet441994!",
  database: "EmployeeDB",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DB connection Success");
  } else {
    console.log("DB connection Failure" + JSON.stringify(err, undefined, 2));
  }
});

app.listen(3000, () => console.log("Server is running"));

app.get("/employees", (req, res) => {
  mysqlConnection.query("SELECT * FROM Employee", (err, rows, fields) => {
    if (!err) {
      console.log("DB connection Failure" + JSON.stringify(rows, undefined, 2));
      res.send(rows);
    } else {
      console.log("DB connection Failure" + JSON.stringify(err, undefined, 2));
    }
  });
});

app.get("/employees/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Employee WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(
          "DB connection Failure" + JSON.stringify(rows, undefined, 2)
        );
        res.send(rows);
      } else {
        console.log(
          "DB connection Failure" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});
//DELETE
app.delete("/employees/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM Employee  WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(
          "DB connection Failure" + JSON.stringify(rows, undefined, 2)
        );
        res.send(rows);
      } else {
        console.log(
          "DB connection Failure" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

//INSERT
app.post("/employees/:id", (req, res) => {
  let emp = req.body;
  var sql = `INSERT INTO employee (Name, Salary) VALUES(${emp.Name})`;
  mysqlConnection.query(
    "DELETE FROM Employee  WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(
          "DB connection Failure" + JSON.stringify(rows, undefined, 2)
        );
        res.send(rows);
      } else {
        console.log(
          "DB connection Failure" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

//Update
app.put("/employees/:id", (req, res) => {
  let emp = req.body;
  var sql = `UPDATE employee SET  Name = ${emp.Name},Salary = ${emp.Salary}  WHERE EmpID = ${emp.EmpID}`;
  mysqlConnection.query(
    "DELETE FROM Employee  WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(
          "DB connection Failure" + JSON.stringify(rows, undefined, 2)
        );
        res.send(rows);
      } else {
        console.log(
          "DB connection Failure" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});
