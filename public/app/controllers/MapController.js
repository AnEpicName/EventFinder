//Este archivo controla el mapa y su configuración
(function() {
    angular
        //Se define el módulo principal al que pertenece el controlador
        .module('app')
        //Define el controlador y sus parámetros
        .controller('MapController', ['$scope', MapController]);

    //Opciones de mapa y configuración
    function MapController ($scope) {
    $scope.lat = "-38.7";
    $scope.lon = "-72.6";
    $scope.title = "epico!";
    }
})();