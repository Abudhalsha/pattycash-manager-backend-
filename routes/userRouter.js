const express=require('express');
//create a user router
const userrouter=express.Router();
//import the required functions
const  updatePassword  = require("../functions/updatePassword");
const  forgotPassword  = require("../functions/forgotPassword");
const loginUser  = require("../functions/loginUser");
const  CreateUser  = require("../functions/CreateUser");
//route for
userrouter.route('/register').post(CreateUser)//create user
userrouter.route('/login').post(loginUser)//login
userrouter.route('/forgot').post(forgotPassword)//forgot 
userrouter.route("/password-reset/:userId/:token").post(updatePassword)//password reset 

module.exports=userrouter

