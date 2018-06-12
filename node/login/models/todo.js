'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	title : String,
	work : String
})

module.exports = mongoose.model('Todo',todoSchema);