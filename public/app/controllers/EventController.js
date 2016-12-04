(function(){
  
  angular
    .module('app')
    .controller('EventController', EventController);

  function EventController($scope, $http) {
  // cuando envía un formulario, manda los datos a node
    $scope.createEvent = function() {
      console.log("mensaje: "+$scope.eventName);
     //window.location = "/events/load";
    };
  }
})();
