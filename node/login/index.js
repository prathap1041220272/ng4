'use strict'
// importing the modules
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {user} = require('./models');
//creating the port for server
const port = process.env.PORT || 3100;
//morgan logger
var accessLogStream = fs.createWriteStream(path.join(__dirname,'loggerFile'),{flags:'a'})
app.use(morgan('combined',{stream : accessLogStream}))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


require('./controllers')(app);
// app.post('/signup',(req,res,next) => {
// 	const User = new user(req.body)
// 	User.save()
// 	.then(data => {
// 		res.json(data)
// 	})
// 	.catch(err => {
// 		res.json(err.message)
// 	})
// })

// app.post('/login',(req,res,next)=>{
// 	user.find({email : req.body.email})
// 	.then(data => {
// 		res.json(data)
// 	})
// 	.catch(err => {
// 		res.status(401).json({message : err.message})
// 	})
// })

app.listen(port,()=>{
	console.log(`server started at port ${port}`)
})
