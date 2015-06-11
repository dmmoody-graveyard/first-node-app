var router = require('./router');

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(process.env.PORT || 5000);
console.log("Web Server running on http://localhost:5000");
console.log("CTRL + C to stop the server");