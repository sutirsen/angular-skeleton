var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(__dirname + '/node_modules'));

app.use(function(req, res){
  res.sendFile(`${__dirname}/public/index.html`)
});

app.set('port', process.env.PORT || 3030);

var server = app.listen(app.get('port'), '0.0.0.0', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Express server listening to port : ' + server.address().port);
});