const express = require("express");
const users = require("./users/users_router")
const session = require("express-session")
const db = require("./data/config")
const cookieParser = require("cookie-parser");

const server = express();
server.use(express.json());
server.use(cookieParser());

server.use("/api", users);

server.get("/", (req, res) => {
    res.status(200).json({ message: "WELCOME " });
  });
  
  module.exports = server;