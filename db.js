//for connecting DB, change inputs according to your DB details
var model= require('./model')

//created a table with name=user  



//synced everything
module.exports=function(userobject){
	
		model.sync({force:false}).then(function(){
			console.log("connected to DB");
		}).then(function(){

	   model.create(userobject)
	   .then(function(user) {
	    console.log(user.get('firstName')); 
	    console.log(user.get('lastName'));
	    console.log(user.get('email'));
  })})


};
module.exports.getAllData=function(){
	console.log("iam in DB file");	
User.findAll({
attributes: ["id","firstName","lastName","email"]
 }).then(function(test){
 JSON.stringify(test);
 }).done();
};
