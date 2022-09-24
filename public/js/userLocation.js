const CITYHALL_LAT = 35.8716;
const CITYHALL_LNG = 128.6015;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  locations.unshift({ place: "User", lat: lat, lng: lng });
  initMap(lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
  locations.unshift({
    place: "대구광역시청 ",
    lat: CITYHALL_LAT,
    lng: CITYHALL_LNG,
  });
  initMap(CITYHALL_LAT, CITYHALL_LNG);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function initMap(currentLat, currentLng) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: parseFloat(currentLat), lng: parseFloat(currentLng) },
  });

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      map: map,
      label: locations[i].place,
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    });
  }
}

var locations = [
  { place: "경북대학교", lat: 35.8905, lng: 128.6112 },
  { place: "엑스코", lat: 35.9095, lng: 128.612 },
];
