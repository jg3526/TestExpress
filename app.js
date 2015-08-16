var express = require('/usr/local/lib/node_modules/express');
var app = express();

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