var app = require('./server-config.js');
var process = require('./process.env');

app.listen(process.PORT || 5000);

console.log('Server now listening on port ' + process.PORT);
