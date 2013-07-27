var express = require('express');
// var fs = require('fs');
var app = express();
app.use(express.logger());

console.log('1');
//var buffer = fs.readFileSync("index.html");
console.log('2');
//var st2 = buffer.toString("utf-8");
var st2="moshe";
console.log('3');
app.get('/', function(request, response) {
  response.send(st2);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
