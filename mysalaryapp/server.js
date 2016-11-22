// To be able to use the functions and commands contained within the
// Express module
var express = require('express');
var app = express();
// Require the mongojs module
var mongojs = require('mongojs');
// Which MongoDB and collection server will be using
var db = mongojs('mysalary', ['mysalary']);
// Allows the server to parse the data incoming from controller
var bodyParser = require('body-parser');


// Express command to tell the server where to look for (static files) the
// index.html file (view/template for app)
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Respond to the controllers request by sending data to the controller
app.get('/mysalary', function(req, res){
  console.log("I received a GET request");

  // Have the server find the mysalary database and collection
  // docs - respond with the salary from the db
  db.mysalary.find(function(err, docs){
    // Make sure server received the data from the database
    console.log(docs);

    // Sends the data back to the controller
    res.json(docs);
  });
});

// Listen for the post request from the controller
app.post('/mysalary', function(req, res){
  // Print data it receives from the controller to the command prompt
  console.log(req.body);

  // Insert data from the view to MongoDB
  db.mysalary.insert(req.body, function(err, doc){
    // Send back data to controller
    res.json(doc);
  });
});


app.delete('/mysalary/:id', function(req, res){
  // Get the value of the ID from the URL
  var id = req.params.id;
  console.log(id);
  // Delete salary from MongoDB
  db.mysalary.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    // Send back the data being removed to the controller
    res.json(doc);
  });
});

app.listen(3000);
console.log("Server running on port 3000");
