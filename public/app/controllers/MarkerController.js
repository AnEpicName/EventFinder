(function () {
    angular
        .module('app')
        .controller('MarkerController', ['$scope', MarkerController]);

    function MarkerController($scope) {
        $scope.createMarker = function () {
            var marker = new google.maps.Marker({
                position: { lat: -38.7495027, lng: -72.6133699 },
                map: map,
                title: "Ejemplo 1"
            });
            marker.setMap(map);
        }
    }
})();