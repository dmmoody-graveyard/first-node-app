var http = require('http');
http.createServer(function (request, response) {
  homeRoute(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');

function homeRoute(request, response) {
  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("footer\n");
  }
}



// var profile = require("./profile");
// var users = process.argv.slice(2);

// users.forEach(profile.get);