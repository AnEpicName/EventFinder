function initMap() {
    var uluru = {lat: -38.7290843, lng: -72.6377406};
    var test = {lat: -38.7495027 ,lng: -72.6133699}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: test
    });
    var marker = new google.maps.Marker({
        position: test  ,
        map: map,
        title: "mati se la come"
    });
    var marker2 = new google.maps.Marker({
        position: uluru  ,
        map: map
    });
}
