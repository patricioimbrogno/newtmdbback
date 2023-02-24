const userService = require("../services/userService.js");
const { generateToken } = require("../config/tokens");

exports.createUser = (req, res) => {
  const user = req.body;
  userService
    .createUser(user)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((err) => res.status(500).send(err));
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  userService
    .loginUser(email,password)
    .then((payload) => {
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    })
    .catch((err) => res.status(500).send(err));
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  userService
    .getUser(id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

exports.getUsers = (req, res) => {
  userService
    .getUsers()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => res.status(500).send(err));
};
