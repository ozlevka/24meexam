var express = require('express');
var user = require('./controllers/userController.js');

var app = express();

app.configure(function()
{
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.engine('.html', require('ejs').__express);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	app.use(express.static(__dirname + '/public'));
});

// All requests
app.get('/',function(req,res)
{
	res.render('index',{});
});

//Redirect to read objectives
app.get('/objectives', function(req,res)
{
	res.render('objectives',{});
});

//user data and view requests
app.all('/user',function(req,res,next)
{
	user.controller(req,res,next);
});

//parser data and view requests
app.all('/parser',function(req,res,next)
{

});

app.listen(8001);