var express = require('express');
var app = express();
// take paths like suhas/hkbk/cs165
// accept dynamic parameters
// and return the all parameters as id list
// e.g. suhas/hkbk/cs165 will return cs165 with :/id[0] = suhas, :/id[1] = hkbk, :/id[2] = cs165
// if you want to access the id, use req.params.id
// e.g. req.params.id[0] will return suhas
// req.params.id[1] will return hkbk
// req.params.id[2] will return cs165

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);




