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
      $('#eventModal').modal('hide');
    
    };
    
    $http.get('/events/load').success(function(data) {
      $scope.data = data;
      console.log(data[0].addr);
    });
  }
})();
