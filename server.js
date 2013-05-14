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
	app.use(user.controller);
});


app.listen(8001);