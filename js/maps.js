function initMap() {
  var latLng = { lat: -23.550520, lng: -46.633308 }; // Coordenadas de São Paulo, por exemplo
  var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 13 // Ajuste o nível de zoom conforme necessário
  });

  // Adicione um marcador no mapa (opcional)
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Local do CEP'
  });
}