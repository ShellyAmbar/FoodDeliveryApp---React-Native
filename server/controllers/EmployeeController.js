const Emplyee = require("../models/Employee");
const User = require("../models/Costumer");

const setEmployee = (req, res, next) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const photoUrl = req.body.photoUrl;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const roll = req.body.roll;
    const startDate = req.body.startDate;
    const age = req.body.age;
    const organisation = req.body.organisation;
    const photoPath = "";

    var employee = new Emplyee({
      firstName: firstName,
      lastName: lastName,
      photoUrl: photoUrl,
      email: email,
      phone: phone,
      address: address,
      roll: roll,
      age: age,
      startDate: startDate,
      organisation: organisation,
    });

    if (req.file) {
      let path = req.file.path;
      employee.photoPath = path;
    }

    employee
      .save()
      .then(() => {
        console.log(employee);
        res.json({
          message: "employee added succesfully",
          employee,
        });
      })
      .catch((err) => {
        res.json({
          message: "Error in adding User" + err,
        });
      });
  } catch (err) {
    console.log(err);
    res.send("employee not saved");
  }
};

const updateEmployee = (req, res, next) => {
  let employeeId = req.body._id;
  let employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    roll: req.body.roll,
    startDate: req.body.startDate,
    age: req.body.age,
    photoUrl: "",
  };
  if (req.file) {
    let path = req.file.path;
    employee.photoPath = path;
  }
  Emplyee.findByIdAndUpdate(employeeId, { $set: employee })
    .then(() => {
      res.json({
        message: "Updated",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const deleteEmployee = (req, res, next) => {
  let employeeId = req.body.employeeId;
  console.log("employeeId", employeeId);
  Emplyee.findByIdAndRemove(employeeId)
    .then(() => {
      res.json({
        message: "Employee deleted successfully.",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getEmployee = (req, res, next) => {
  let employeeId = req.query.employeeId;
  Emplyee.findById(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getEmployees = (req, res, next) => {
  try {
    let userId = req.query.userId;
    console.log("userId: ", userId);
    User.findById(userId)
      .then((response) => {
        let user = response;

        Emplyee.find({ organisation: user.organisation })
          .then((response) => {
            res.json({
              response,
            });
          })
          .catch((err) => {
            res.json({
              message: "An error occured: " + err,
            });
          });
      })
      .catch((err) => {
        res.json({
          message: "user not found. " + err,
        });
      });
  } catch (err) {
    res.json({
      message: "no user " + err,
    });
  }
};

module.exports = {
  setEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
};
