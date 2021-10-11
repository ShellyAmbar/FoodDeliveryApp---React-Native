const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const authentication = require("../middleware/authenticate");
router.post("/register", AuthController.register);
router.post("/logout", authentication, AuthController.logout);
router.post("/login", AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);

module.exports = router;
