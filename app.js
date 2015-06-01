var http = require("http")
var username = "duanemoody1"

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

function printError(error) {
  console.error(error.message);
}

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
  var body = "";
  console.log(response.statusCode)
  response.on('data', function(chunk) {
    body += chunk;
  });
  response.on('end', function() {
    if(response.statusCode === 200) {
      try {
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch(error) {
        printError(error);
    }
  });
});

request.on("error", printError);