'use strict'
const express = require('express');
const app = express();
const {user} = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());


const port = process.env.PORT || 3200;
// const {db} = require('./models');

app.post('/api/data',(req,res,next)=>{
	// console.log(req.body)
	const User = new user(req.body);
	User.save()
	.then(data =>{
		res.json(data)
	})
	.catch(error => {
		res.json(error.message)
	})
})

app.get('/api/data',(req,res,next)=>{
	user.find() 
	// {email : req.body.email} if we need to get the entire details of the email usin post method
	.then(data => {
		res.json(data)
	})
	.catch(error => {
		res.json(error.message)
	})
})

app.put('/api/data/:id',(req,res,next)=>{
	var {id} = req.params;
	var {name} = req.body;
	user.findOneAndUpdate({_id:id},{name},{new : true})
	.then(data => {
		res.json(data)
	})
	.catch(err => {
		res.json(err.message)
	})
})

app.delete('/api/data/:id',(req,res,next)=>{
	var {id} = req.params;
	user.remove({_id:id})
	.then(data => {res.json(data)})
	.catch(err => {res.json(err.message)})
})

app.listen(port,()=>{
	console.log(`server started at port ${port}`)
})