const express=require('express');
const userController = require('../controller/signupcontroller');
//const authController = require('../controller/authController');



const router=express.Router();

router.post('/signup', userController.register);
//router.post('/login', authController.login);



module.exports=router;