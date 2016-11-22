var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  // Route to get dummy data from server.js
  // Sends a request to the server
  $http.get('/mysalary').success(function(response){
    console.log("I got the data I requested");

    // Put the data into index.html
    $scope.mysalary = response;
  });

  // Function that receives data from input boxes in the view
  $scope.addSalary = function(){
    // Verify to the view data was received
    console.log($scope.salary);
  };

}]);
