var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

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
  // Put dummy data into index.html <table> using $scope
  // Glue between between application controller and view/index.html
  $scope.mysalary = mysalary;
}]);
