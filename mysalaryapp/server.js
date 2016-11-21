// To be able to use the functions and commands contained within the
// Express module
var express = require('express');
var app = express();

// Express command to tell the server where to look for (static files) the
// index.html file (view/template for app)
app.use(express.static(__dirname + "/public"));

// Respond to the controllers request by sending dummy data
app.get('/mysalary', function(req, res){
  console.log("I received a GET request");

  // Dummy Data
  salary1 = {
    annually: "24000",
    monthly: "2000",
    weekly: "462",
    hourly: "11.54"
  };
  salary2 = {
    annually: "34000",
    monthly: "2833",
    weekly: "654",
    hourly: "16.35"
  };

  // Array with the dummy data objects transfered to the mysalry variable
  var mysalary = [salary1, salary2];

  // Respond to the Get request by sending back the mysalary data in JSON format
  // which the controller can use
  res.json(mysalary);
});

app.listen(3000);
console.log("Server running on port 3000");
