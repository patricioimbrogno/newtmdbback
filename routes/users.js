const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// const { generateToken, validateToken } = require("../config/token");

// const User = require("../models/User");
router.get("/all", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.post("/login", userController.loginUser);
  

module.exports = router;