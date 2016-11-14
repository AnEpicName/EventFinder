
(function(){
  
  angular
    .module('app')
    .controller('eventController', ['$scope',eventController]);

  function eventController($scope){
    // Retrieve
    $scope.addEvent = function(){
      var MongoClient = require('mongodb').MongoClient;

      // Connect to the db
      MongoClient.connect("mongodb://localhost:27017/dbName", function(err, db) {
        if(!err) {
          console.log("We are connected");
        }
      });
    }

  }
})();
