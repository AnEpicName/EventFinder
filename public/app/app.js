(function() {
    angular
        //Define el módulo de la app.
        .module('app', ['ngRoute','ngMap'])
        .config(config)
        //Define las directivas
        .directive('navbar', navbar)
        .directive('mapview', mapView)
        .directive('events', eventList);

    //Se definen las rutas de las vistas que tendrá la app y cuándo utilizarlas
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'app/views/main.html'
            });
    }

    //Se crean las directivas y se define la ruta en la que está el html respectivamente
    //Directiva del Navbar
    function navbar() {
        return {
            templateUrl : 'app/views/directives/navbar.html'
        }
    }
    //Directiva que muestra el mapa (map)
    function mapView() {
        return {
            templateUrl : 'app/views/directives/map.html'
        }
    }
    //Directiva de la lista de eventos (events)
    function eventList() {
        return {
            templateUrl : 'app/views/directives/event-list.html'
        }
    }
})();
