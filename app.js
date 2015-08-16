var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.render('index.ejs',{title: 'Hello World!'});
});
app.get('/about', function(req, res){
	res.render('layout.ejs',{title: 'About Us', body:'<h1>About Us</h1>'});
});
app.get('/*', function(req, res){
	res.status(404).render('error.ejs',{title:'Error!'});
});
console.log('Server started ...');
app.listen(3000);

/*
// apply this first
app.get('/about', function(request, response){
	response.send('<h1>About Us</h1>');
});

// pass in parameters
app.get('/about/:title', function(request, response){
	response.send('<h1>' + request.params.title + '</h1>');
});
app.get('/*', function(request, response){
	response.send('<h1>Welcome to Our Index Page!</h1>');
});
console.log('Server Started on localhost:3000 ...');
app.listen(3000);
*/
