// Variáveis globais
var map;
var marker; // Variável global para o marcador
var cepHistory = [];

// Função para inicializar o mapa
function initMap() {
  var latLng = { lat: -19.9167, lng: -43.9345 }; // Coordenadas de Belo Horizonte
  map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 13 // Ajuste o nível de zoom conforme necessário
  });
}

// Função para adicionar um marcador no mapa
function addMarkerToMap(location) {
  if (marker) {
    marker.setMap(null); // Remova o marcador existente, se houver
  }

  marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Localização do CEP'
  });
}

// Função para mostrar a localização no mapa
function showLocationOnMap(location) {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: location }, function (results, status) {
    if (status === 'OK' && results[0] && map) {
      var locationData = results[0].geometry.location;
      map.setCenter(locationData);

      // Adicione um marcador no mapa
      addMarkerToMap(locationData);
    } else {
      // Trate o erro ou mostre uma mensagem ao usuário
      console.error('Erro ao geocodificar o endereço');
    }
  });
}

// Função para obter informações de um CEP
function fetchCepData() {
  var cep = $('#cep').val();
  if (!cep) {
    alert('Por favor, insira um CEP válido.');
    return;
  }

  var apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function (data) {
      var resultHtml = '';

      if (data.erro) {
        resultHtml = "CEP não encontrado";
      } else {
        let addressInfo = `${data.cep}, ${data.localidade}-${data.uf}.`;

        if (data.logradouro) {
          addressInfo += ` ${data.logradouro}`;
        }

        if (data.bairro) {
          addressInfo += ` - ${data.bairro}.`;
        }

        resultHtml = `
          <h4>Resultado:</h4>
          ${addressInfo}
        `;

        // Crie um objeto com os dados do CEP
        var cepData = {
          cep: data.cep,
          localidade: data.localidade,
          uf: data.uf,
          logradouro: data.logradouro || '',
          bairro: data.bairro || ''
        };

        // Adicione o objeto ao array de histórico
        cepHistory.push(cepData);

        // Chame a função para mostrar a localização no mapa após obter os resultados do CEP
        var location = data.localidade + ', ' + data.uf + ', ' + data.logradouro;
        showLocationOnMap(location);
      }

      $('#cep').val(''); // Limpar o campo CEP após a busca
      $('#cepResults').html(resultHtml);
    },
    error: function () {
      $('#cepResults').html("Erro ao obter informações do CEP");
    }
  });
}

// Função para mostrar a localização no mapa
function showLocationOnMap(location) {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: location }, function (results, status) {
    if (status === 'OK' && results[0] && map) {
      var locationData = results[0].geometry.location;
      map.setCenter(locationData);

      // Adicione um marcador no mapa
      addMarkerToMap(locationData);
    } else {
      // Trate o erro ou mostre uma mensagem ao usuário
      console.error('Erro ao geocodificar o endereço');
    }
  });
}
