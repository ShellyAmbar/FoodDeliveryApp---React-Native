const express = require("express");
const router = express.Router();
const UserController = require("../controllers/CostumerController");
const authentication = require("../middleware/authenticate");

router.put("/updateUser", authentication, UserController.updateUser);
router.delete("/deleteUser", authentication, UserController.deleteUser);

module.exports = router;
