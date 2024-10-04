"use strict";

var express = require("express");

var router = express.Router();

var controller = require("./controller");

router.get("/users", controller.getUsers);
router.post("/createUser", controller.createUser);
router.put("/updateUser", controller.updateUser);
router["delete"]("/deleteUser", controller.deleteUser);
module.exports = router;