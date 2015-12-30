var app = require('./server-config.js');
var process = require('./process.env');

app.listen(process.env.PORT || 5000);

console.log('Server now listening on port ' + port);
