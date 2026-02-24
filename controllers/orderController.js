const Order = require("../models/order");


// Add single order
exports.addOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Add bulk orders
exports.addOrdersBulk = async (req, res) => {
  try {
    const orders = await Order.insertMany(req.body);
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};