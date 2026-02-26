const User = require("../models/user");


// Add single user
exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Add bulk users
exports.addUsersBulk = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


