'use strict'
const mongoose = require('mongoose');
 
 mongoose.connect('mongodb://localhost/sam')
 .then(data =>{
 	console.log('connected to database')
 })
 .catch(err =>{
 	console.log(err.message)
 })

 module.exports = mongoose