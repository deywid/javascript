var map;
var places = []

/* --- aqui se inicializa o mapa */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
/* --- center: { lat: 0.029286, lng: -51.060524 }, --- essa linha torna-se desnecessária graças ao map.setCenter() --- */
    zoom: 13,
  });
  reqJson()
}

/* --- faz a requisição ao endpoint --- */
function reqJson() {
  fetch('https://amapalanches.com/includes/v1/getTodas.php')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      places = json.todas
      getCenter(map, places)
      setMarkers(places)
    })
}

/* --- cria as marcas no mapa, de acordo com as informações de latitude e longitude da lista fornecida pelo endpoint --- */
function setMarkers(places) {
  for (var i = 0; i < places.length; i++) {
    var marker = new google.maps.Marker({
      "map": map,
      "position": {
        "lat": parseFloat(places[i].lat),
        "lng": parseFloat(places[i].lng)
      }
    });
  }
}

/* --- lê todas as coordenadas de latitude e longitude, calcula o centro entre todas elas e marca no mapa --- */
function getCenter(map, places) {
  $X = 0.0;
  $Y = 0.0;
  $Z = 0.0;
  for (var i = 0; i < places.length; i++) {

    $lat = places[i].lat * Math.PI / 180;
    $lon = places[i].lng * Math.PI / 180;
    $a = Math.cos($lat) * Math.cos($lon);
    $b = Math.cos($lat) * Math.sin($lon);
    $c = Math.sin($lat);
    $X += $a;
    $Y += $b;
    $Z += $c;
  }

  $X /= places.length;
  $Y /= places.length;
  $Z /= places.length;
  $lon = Math.atan2($Y, $X);
  $hyp = Math.sqrt($X * $X + $Y * $Y);
  $lat = Math.atan2($Z, $hyp);

  var latitude = $lat * 180 / Math.PI;
  var longitude = $lon * 180 / Math.PI;

  var latlng = new google.maps.LatLng(latitude, longitude);
  map.setCenter(latlng);

  /* --- abaixo, cria-se uma marca no mapa identificando o seu centro. meramente ilustrativo --- */
  var marker = new google.maps.Marker({
    "map": map,
    "position": latlng,
  });

  var infowindow = new google.maps.InfoWindow({
    "content": "aqui é o centro do mapa",
    "position": latlng,
  }).open(map, marker);
}