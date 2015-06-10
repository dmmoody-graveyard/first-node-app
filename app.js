var router = require('./router');

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(process.env.PORT || 5000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');