function initialize_gmaps() {
  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.70556613, -74.0139471);

  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById("map");

  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<img id="firstHeading" class="firstHeading" src="/images/gh-logo-temp.png" style="width: 80%" alt="Grace Hopper Academy">'+
    '<div id="bodyContent">'+
    '<p>Grace Hopper Academy is an immersive software engineering school for women with no upfront tuition cost.</p>'+
    '<p><a href="http://www.gracehopper.com/">Website</a></p>'+
    '</div>'+
    '</div>';

  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  // add the marker to the map
  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Grace Hopper Academy",
    label: "Grace Hopper Academy"
  });

  // add the marker to the map by calling setMap()
  marker.setMap(map);

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

}

$(document).ready(function(){
  initialize_gmaps();
})