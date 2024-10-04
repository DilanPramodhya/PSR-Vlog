"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var controller = require("./controller");

app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.get("/users", function (req, res) {
  controller.getUsers(function (req, res, next) {
    res.send();
  });
});
app.post("/createUser", function (req, res) {
  controller.createUser(req.body, function (callback) {
    res.send();
  });
});
app.put("/updateUser", function (req, res) {
  controller.updateUser(req.body, function (callback) {
    res.send(callback);
  });
});
app["delete"]("/deleteUser", function (req, res) {
  controller.deleteUser(req.body, function (callback) {
    res.send(callback);
  });
});
module.exports = app;