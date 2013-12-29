var http = require('http');
var path = require('path');
var express = require('express');
var app = express.createServer();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
	response.sendfile(__dirname + "/views/index.html");
});

app.listen(5000);