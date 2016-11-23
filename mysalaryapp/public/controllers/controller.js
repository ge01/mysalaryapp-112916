var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  // Refresh the view
  var refresh = function(){
    // Sends a request to the server for data
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
    // Calculate hourly, weekly, monthly, salary
    $scope.salary.hourly = parseFloat($scope.salary.annually) / 2080;
    $scope.salary.weekly = $scope.salary.hourly * 40;
    $scope.salary.monthly = $scope.salary.weekly * 4.333;

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

  // Remove function to delete data from DB
  $scope.remove = function(id){
    // Print Data ID to view console
    console.log(id);

    // Send delete request to the server
    $http.delete('/mysalary/' + id).success(function(response){
      refresh();
    });
  };
}]);
