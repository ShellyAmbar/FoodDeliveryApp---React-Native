const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");
const authentication = require("../middleware/authenticate");

const upload = require("../middleware/upload");
router.get("/getEmployees", authentication, EmployeeController.getEmployees);
router.get("/getEmployee", authentication, EmployeeController.getEmployee);
router.post(
  "/setEmployee",
  authentication,
  // upload.array("photoUrl[]"),
  EmployeeController.setEmployee
);
router.put(
  "/updateEmployee",
  authentication,
  //upload.array("photoUrl[]"),
  EmployeeController.updateEmployee
);
router.delete(
  "/deleteEmployee",
  authentication,
  EmployeeController.deleteEmployee
);

module.exports = router;
