const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).send(user);
};
