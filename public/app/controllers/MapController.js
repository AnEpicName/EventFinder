//Este archivo controla el mapa y su configuración
(function() {
    angular
        //Se define el módulo principal al que pertenece el controlador
        .module('app')
        //Define el controlador y sus parámetros
        .controller('MapController', ['$scope', MapController]);

    //Opciones de mapa y configuración
    function MapController ($scope) {
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: {lat: -38.7495027 ,lng: -72.6133699}
        });
    }
})();
