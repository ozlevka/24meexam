var parser = require('../controllers/parserController');
var express = require('express');

var sites = [];

sites.push({name:'amazon', url : 'http://amazon.com'});
sites.push({name:'google', url : 'http://google.com'});



var app = express();

app.get('/',function(req,res,next)
{
	parser.parse({body:sites},null,null,function(siteArr)
		{
			res.send(200,'Finish');
		});
});

app.listen(8001);