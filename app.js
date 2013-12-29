var http = require('http');
var path = require('path');
var express = require('express');
var app = express.createServer();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
	response.sendfile(__dirname + "/views/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});