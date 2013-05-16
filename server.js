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

//----------------------static data------------------------------------
app.get('/',function(req,res)
{
	res.render('index',{});
});

//Redirect to read objectives
app.get('/objectives', function(req,res)
{
	res.render('objectives',{});
});
//--------------------------------end static data-------------------------------

//-----------------------------------------user handler routing---------------------
app.post('/user/register',user.register);
app.get('/user/:id',user.getUser);
//--------------end user handler routing----------------

//parser data and view requests


app.listen(8001);