var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


