var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  // Refresh the view
  var refresh = function(){
    // Route to get dummy data from server.js
    // Sends a request to the server
    $http.get('/mysalary').success(function(response){
      console.log("I got the data I requested");

      // Put the data into index.html
      $scope.mysalary = response;

      // Clear input boxes after the refresh function is called
      $scope.salary = "";
    });
  };

  refresh();

  // Function that receives data from input boxes in the view
  $scope.addSalary = function(){
    // Verify to the view data was received
    console.log($scope.salary);

    // Send data from input boxes to server
    // .success takes response from the server as an argument
    $http.post('/mysalary', $scope.salary).success(function(response){
      // Print response from server/MongoDB
      console.log(response);

      // Refresh page after add button clicked
      refresh();
    });
  };

  // Remove function to delet data from DB
  $scope.remove = function(id){
    // Print Data ID to view console
    console.log(id);

    // Send delete request to the server
    $http.delete('/mysalary/' + id);
  };

}]);
