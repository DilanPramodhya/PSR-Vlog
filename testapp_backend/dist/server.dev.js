"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var port = 3001;
var host = "localhost";

var mongoose = require("mongoose");

var router = require("./router");

app.use(cors());
app.use(express.json());
var uri = "mongodb+srv://dilanpramodhya44:Dila1234@cluster0.v3hnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var connect = function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(uri));

        case 3:
          console.log("Connected to MongoDB");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log("MongoDB error");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

connect();
var server = app.listen(port, host, function () {
  console.log("Node server is listening: ".concat(server.address().port));
});
app.use("/api", router);