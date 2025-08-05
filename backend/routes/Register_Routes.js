const express=require("express");
const Userdata=require("../Controllers/Register_Controller");
const routes=express.Router();

routes.post("/userRegsiter",Userdata);

module.exports=routes;