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

/**
* ###User API
* Register new user
* Receive user from register form if success render users view
* If failed then render index view with error data.
*/
exports.register = function(req,res,next)
{
	var body = req.body;
	var doc = userDb.doc(body.userName);
	if (body.userPass == body.confirmPass) 
	{
		doc.body.password = body.userPass;
		doc.save(function(err, response)
		{
			if(err)
			{
			    res.render('index', {error: err});
			}
			else
			{
				res.cookie('user', body.userName, {});
				res.redirect('/');
			}
		})
	}

};

/**
* ###User API
* Validate user without user cookie
* If failed then render index view with error data.
*/
exports.login = function(req,res,next)
{
	var body = req.body;
	var doc = userDb.doc(body.userName);
	doc.get(function(err,response)
	{
		if (err) 
		{
			res.render('index',{error:err});
		}
		else if(doc.body.password == body.userPass)
		{
		 	res.cookie('user', body.userName, {});
			res.redirect('/');
		}
		else
		{
			res.render('index', {error: 'Login failed'});
		}

	});
}

exports.main = function(req,res,next)
{
	if (req.cookies.user) 
	{
		var doc = userDb.doc(req.cookies.user);
		doc.get(function(err, response)
		{
			if(err)
			{
				res.render('index',{error:err});
			}
			else
			{
				res.render('users', {user:response})
			}
		})

	}
	else
	{
		res.render('index', {error:null});
	}
}

exports.logout = function(req,res,next)
{
	res.clearCookie('user');
	res.redirect('/');
}

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
