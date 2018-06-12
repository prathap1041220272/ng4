'use strict';
const db = require('./connection');
const user = require('./user');
const todo = require('./todo'); 

module.exports = {
	db,
	user,
	todo
}