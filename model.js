var Sequelize = require('sequelize')
  , sequelize = new Sequelize('userdata', 'postgres', '1234567', {
      host: 'localhost',
      dialect: "postgres", 
      port:    5432,
    });
 

module.exports= sequelize.define('user', {
	  firstName: {
	    type: Sequelize.STRING,
	  },
	  lastName: {
	    type: Sequelize.STRING
	  },
	   email: {
	    type: Sequelize.STRING,
	  }
});