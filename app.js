var express=require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var db=require('./db')
var model= require('./model')

var app= express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/',express.static('public'));


app.post('/sendData',  function (req, res) {
	
	var body = req.body;
	console.log(body);
	/*model.create(body)
	   .then(function(user) {
	    console.log(user.get('firstName')); 
	    console.log(user.get('lastName'));
	    console.log(user.get('email'));
	//Sending body object to Database
	//
});*/
	db(body);
	
     res.sendFile( __dirname + "/" + "public/table.html" );
});

app.get('/getAllData', function(req, res){

   console.log("Got a GET request for getAllData");
  
  // console.log(db.getAllData());
   model.findAll({
attributes: ["id","firstName","lastName","email"]
 }).then(function(test){
 JSON.stringify(test);
 res.send(test);
 }).done();
   
  
});

app.listen(3000,function(){
console.log("Running on port 3000".rainbow);
});