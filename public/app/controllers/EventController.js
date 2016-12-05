(function () {

  angular
    .module('app')
    .controller('EventController', EventController);
  
  function EventController($scope, $http) {
    // cuando envía un formulario, manda los datos a node
    $scope.createEvent = function () {
      window.location = "/events/save=" + $scope.eventName + "--" + $scope.date
        + "--" + $scope.hostName + "--" + $scope.lastname + "--" + $scope.email
        + "--" + $scope.description + "--" + $scope.address;
    };
    
    $http.get('/events/load').success(function(data){
      $scope.Events = data;
      alert(data.eventName)
    });
  }
})();
