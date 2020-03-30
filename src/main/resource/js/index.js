var express = require('express');
var app = express();

app.set('port',(prosess.env.PORT || 5000) );

app.get('/',function(request, response){
	console.log("HelloWorld!");
	response.writeHead(200,{'Content-Type':'Text/Plain'});
	response.end('Hello World!!¥n');
});