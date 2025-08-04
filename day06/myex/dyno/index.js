// var express = require('express');
// var app = express();


// app.set('view engine', 'pug');
// app.set('views','./views');


// app.get('/dynamic_view', function(req, res){
//    res.render('First', {
//       name: "Face book",
//       url:"http://www.facebook.com"
//    });
// });


// app.listen(3000);
var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');


app.get('/User_view', function(req, res){
   res.render('User', {
      user: {name: "Ayush", age: "20"}
   });
});


app.listen(3000);