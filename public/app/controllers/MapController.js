//Este archivo controla el mapa y su configuración
(function () {
    angular
        //Se define el módulo principal al que pertenece el controlador
        .module('app')
        //Define el controlador y sus parámetros
        .controller('MapController', MapController);

    //Opciones de mapa y configuración
    function MapController($scope, $http) {
        $http.get('/events/load').success(function (data) {
            $scope.data = data;
        });
    }
})();