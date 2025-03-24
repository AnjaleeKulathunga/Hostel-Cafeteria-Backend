const express = require('express');
const router = express.Router();

const User = require("../models/UserModel");

const UserController = require('../controllers/UserController');

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);


module.exports = router;