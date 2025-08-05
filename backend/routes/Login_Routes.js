const express = require("express");
const LoginUser = require("../Controllers/Login_Controllers");
const routes = express.Router();

routes.post("/Logindata", LoginUser);

module.exports = routes;
