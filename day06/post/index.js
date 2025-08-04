var express = require('express');
var app = express();


var things = require('./module.js');


app.get('/hello', function(req, res){
   res.send("Hellonxzmcn World!");
});


//both index.js and things.js should be in same directory
app.use('/module', things);


app.listen(3000);

