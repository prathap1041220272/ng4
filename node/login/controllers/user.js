'use strict';
const express = require('express');
const router = express.Router();

const {user} = require('../models');
const {tokenGen , bcrypt} = require('../services');

router.route('/signup')
.post(async(req,res,next)=>{
	const password = await bcrypt.hashPassword(req.body.password);
	req.body.password = password;
	const User = new user(req.body);
	try{
		const result = await User.save();
		const tokenServ = tokenGen.token(result)
		res.json(tokenServ);
	}
	catch(error){
		next(error)
	}
})

router.route('/login')
.post(async(req,res,next)=>{
	// console.log(req.body)
	const {email ,password} = req.body;
	try{
		const result = await user.findOne({email});
		// console.log(result)
		if (!result) {
			return res.json({message : 'you are entered wrong email Id'})
		}
		const passwordResult = await bcrypt.comparePassword(password,result.password)
		// console.log(passwordResult)
		if (!passwordResult) {
			return res.json({message:'wrong password'})
		}
		const tokenServ = tokenGen.token(result)
		res.json(tokenServ)
	}
	catch(error){
		next(error)
	}
})
module.exports = router;