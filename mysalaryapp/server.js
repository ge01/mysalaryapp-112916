// To be able to use the functions and commands contained within the
// Express module
var express = require('express');
var app = express();

// Express command to tell the server where to look for (static files) the
// index.html file (view/template for app)
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");
