"use strict";

var User = require("./models");

var getUsers = function getUsers(req, res, next) {
  User.find().then(function (response) {
    res.json({
      response: response
    });
  })["catch"](function (error) {
    res.json({
      error: error
    });
  });
};

var createUser = function createUser(req, res, next) {
  var user = new User({
    id: req.body.id,
    name: req.body.name
  });
  user.save().then(function (response) {
    res.json({
      response: response
    });
  })["catch"](function (error) {
    res.json({
      error: error
    });
  });
};

var updateUser = function updateUser(req, res, next) {
  var _req$body = req.body,
      id = _req$body.id,
      name = _req$body.name;
  User.updateOne({
    id: id
  }, {
    $set: {
      name: name
    }
  }).then(function (response) {
    res.json({
      response: response
    });
  })["catch"](function (error) {
    res.json({
      error: error
    });
  });
};

var deleteUser = function deleteUser(req, res, next) {
  var id = req.body.id;
  User.deleteOne({
    id: id
  }).then(function (response) {
    res.json({
      response: response
    });
  })["catch"](function (error) {
    res.json({
      error: error
    });
  });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;