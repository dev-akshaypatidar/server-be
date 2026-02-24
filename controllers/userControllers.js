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


// Remove duplicate users (based on email)
// Keep first created user
exports.removeDuplicateUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: 1 });

    const seenEmails = new Set();
    const duplicates = [];

    for (let user of users) {
      if (seenEmails.has(user.email)) {
        duplicates.push(user._id);
      } else {
        seenEmails.add(user.email);
      }
    }

    await User.deleteMany({ _id: { $in: duplicates } });

    res.json({
      message: "Duplicate users removed",
      removedCount: duplicates.length-1
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};