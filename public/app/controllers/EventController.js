
(function(){
  
  angular
    .module('app')
    .controller('EventController', EventController);

  function EventController($scope, $http) {
    $scope.formData = {};
    
   
  
  // cuando envía un formulario, manda los datos a node
    $scope.createEvent = function() {
      $http.post('/api/events', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  }
})();
