const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/add", orderController.addOrder);
router.post("/bulk", orderController.addOrdersBulk);

module.exports = router;