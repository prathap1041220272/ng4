'use strict'
const jwt = require('jsonwebtoken');
const expiresIn = '1h';
const secret = 'secret';

function token(data){
	return jwt.sign({data},secret,{expiresIn})
}

function verify(data) {
	return jwt.verify(data,secret)
	
}

module.exports = {
	token,
	verify
}

