var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/hh', function(req, res){
    res.render('first');
});


app.listen(3000);

