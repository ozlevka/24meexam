var couchdb = require('couchdb-api');

var userDb = couchdb.db('exam_db');

userDb.info(function(err,response)
{
	if (err && err.error == "not_found") 
	{
		userDb.create(function()
		{

		});
	};
});

exports.register = function(req,res,next)
{
	
};

exports.getUser = function(req,res,next)
{
	var doc = userDb.get(req.params.id);
	doc.get(function(err,dbres){
		if (err) 
		{
			res.send(200,'Db error ' + err);
		}
		else
		{
			res.send(200,doc.body);
		}
	})
}
