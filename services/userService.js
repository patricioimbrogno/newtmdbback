const User = require("../models/User");

exports.createUser = async (user) => {
  const createdUser = await User.create(user);
  return createdUser;
};

exports.loginUser = async (email,password) => {
  const user = await User.findOne({email})
  const validate = await user.comparePassword(password) 
  console.log("validate",validate)
  if (!validate) throw 401;
  return {
    username: user.username,
    email: user.email
  };
};

exports.getUser = async (id) => {
  const user = await User.find({_id:id});
  return user;
};

exports.getUsers = async () => {
  const users = await User.find();
  return users;
};
