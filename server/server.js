var express = require('express');
var port = process.env.PORT || 3000;

require('./models/')

var app = express();
require('./middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
