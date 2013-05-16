var couchdb = require('couchdb-api');
var async = require('async');
var userDb = couchdb.db('exam_db');




var doc = userDb.doc('rebota');

doc.get(function(err,response)
	{
		if(err) {console.log(err);}
		else { console.log(response); }

		doc.body.location.street = 'Merluza';
		doc.save(function(er, res)
		{
			if(er) {console.log(er);}
			else { console.log(res); }

			doc.get(function(e,r)
			{
				if(e) {console.log(e);}
				else { console.log(r); }				
			})
		})

	});


