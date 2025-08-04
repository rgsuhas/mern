
var express = require('express');
var app = express();


app.get('/', function(req, res){
   res.send("GET Request!");
});


app.post('/', function(req, res){
   res.send("POST Request!");
});


app.put('/', function(req, res){
   res.send("PUT Request!");
});


app.delete('/', function(req, res){
   res.send("DELETE Request!");
});



app.listen(3000);