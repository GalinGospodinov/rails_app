
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

// function gmap_show(entity) {
//   if ((entity.latitudeitude == null) || (entity.longitude == null) ) {    // validation check if coordinates are there
//     return 0;
//   }

//   handler = Gmaps.build('Google');    // map init
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//     markers = handler.addMarkers([    // put marker method
//       {
//         "latitudeitude": entity.latitudeitude,    // coordinates from parameter entity
//         "longitude": entity.longitude,
//         "picture": {    // setup marker icon
//           "url": 'http://www.planet-action.org/img/2009/interieur/icons/orange-dot.png',
//           "width":  32,
//           "height": 32
//         },
//         "infowindow": "<b>" + entity.address
//       }
//     ]);
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
//     handler.getMap().setZoom(12);    // set the default zoom of the map
//   });
// }

// function gmap_show(entity) {
//   if ((entity.latitude == null) || (entity.longitude == null) ) {
//     return 0;
//   } 

//   var mapProp = {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// function gmap_form(entity) {
//   handler = Gmaps.build('Google');    // map init
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//     if (entity && entity.latitude && entity.longitude) {    // statement check - new or edit view
//       markers = handler.addMarkers([    // print existent marker
//         {
//           "latitude": entity.latitude,
//           "longitude": entity.longitude,
//           "picture": {
//             "url": 'http://www.planet-action.org/img/2009/interieur/icons/orange-dot.png',
//             "width":  32,
//             "height": 32
//           },
//           "infowindow": "<b>" + entity.address
//         }
//       ]);
//       handler.bounds.extendWith(markers);
//       handler.fitMapToBounds();
//       handler.getMap().setZoom(12);
//     }
//     else {    // show the empty map
//       handler.fitMapToBounds();
//       handler.map.centerOn([52.10, 19.30]);
//       handler.getMap().setZoom(6);
//     }
//   });

//   var markerOnMap;

//   function placeMarker(location) {    // simply method for put new marker on map
//     if (markerOnMap) {
//       markerOnMap.setPosition(location);
//     }
//     else {
//       markerOnMap = new google.maps.Marker({
//         position: location,
//         map: handler.getMap()
//       });
//     }
//   }

//   google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
//     placeMarker(event.latitudelongitude);
//     document.getElementById("map_latitude").value = event.latitudelongitude.latitude();
//     document.getElementById("map_longitude").value = event.latitudelongitude.longitude();
//   });
// }
