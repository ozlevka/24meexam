var jsdom = require('jsdom');
var async = require('async');
var fs = require('fs');
var util = require('util');
var url  = require('url');


var jquery = fs.readFileSync(__dirname + '/jquery.js').toString();


exports.jsonRoute = function(req,res, next)
{
	if (req.method == 'POST' && req.url == '/parse' && req._body) 
	{
		if (util.isArray(req.body) && req.body.length > 0) 
		{
			async.concat(req.body,parseSite,function(err, results)
			{
				 res.send(200,results);
			});
		}
	}
	else
		next();
}

function dataFilter(data, callback)
{

}

function parseSite(siteData,callback)
{
	var parsedUrl = url.parse(siteData);
	jsdom.env({
	  html: siteData,
	  src: [jquery],
	  done: function (errors, window) {
		if(errors)
		{
			console.log(errors);
		}
		else
		{
			var $ = window.$;
			if($)
			{
				async.concat($('span'),function(h1element,callback)
				{
					try
					{
						var txt = $(h1element).text();
						callback(undefined,[txt]);
					}
					catch(e){};
				},function(err, results)
				{
					if(err) console.log(err);
					else console.log('Finish ' + parsedUrl.host);
					callback(err, results);
				});
			}
			else
				console.log('jQuery error');
		}
	  }
	});
}