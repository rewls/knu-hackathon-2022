function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 35.8905, lng: 128.6112 },
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
  { place: "스파크랜드", lat: 35.8692, lng: 128.5987 },
  { place: "엑스코", lat: 35.9095, lng: 128.612 },
];
