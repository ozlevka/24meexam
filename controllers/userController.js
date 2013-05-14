var couchdb = require('couchdb-api');

var userDb = couchdb.db('exam_db');

module.exports.controller = function(req,res,next)
{
		
	next();
}; 

