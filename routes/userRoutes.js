const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.post("/add", userController.addUser);
router.post("/bulk", userController.addUsersBulk);

module.exports = router; 