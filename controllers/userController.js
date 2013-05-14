var couchdb = require('couchdb-api');

var userDb = couchdb.db('exam_db');

module.exports.controller = function(req,res,next)
{
	if (req.method == 'GET' && req.url == '/') 
	{
		res.render('index',{});
		return;
	}
	next();
}; 

