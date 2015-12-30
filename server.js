var app = require('./server-config.js');
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

app.listen(port);

console.log('Server now listening on port ' + port);
