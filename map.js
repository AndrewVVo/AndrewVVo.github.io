window.onload = getMyLocation;

function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var div = document.getElementById("location");
	div.innerHTML = "You are at Lat: " + latitude + ", Long: " + longitude;
}

var map;

function showMap(coords){
	var googleLatLon = new google.maps.LatLng(coords.latitude, coords.longitude);
	var mapOptions={
		zoom: 10,
		center: googleLatLon,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	map=new google.maps.Map(mapDiv, mapOptions);
}