//Problem: We need a simple way to look at a user's badge count and javascript points on teamtreehouse.com
//Solution: use Node.js to connect to Treehouse's API to get profile information.
var http = require("http")
var username = "duanemoody"

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " in JavaScript";
	console.log(message);
}

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
	console.log(response.statusCode)
});

request.on("error", function(error) {
  console.error(error.message);
});