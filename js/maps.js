 // Variável global para o mapa
 var map;

 // Função para inicializar o mapa
 function initMap() {
   var latLng = { lat: -23.550520, lng: -46.633308 }; // Coordenadas de São Paulo, por exemplo
   map = new google.maps.Map(document.getElementById('map'), {
     center: latLng,
     zoom: 13 // Ajuste o nível de zoom conforme necessário
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
         resultHtml = `
           <h4>Resultado:</h4>
           <ul>
             <li>CEP: ${data.cep}</li>
             <li>Logradouro: ${data.logradouro}</li>
             <li>Bairro: ${data.bairro}</li>
             <li>Localidade: ${data.localidade}</li>
             <li>UF: ${data.uf}</li>
           </ul>
         `;

         // Chame a função para mostrar a localização no mapa após obter os resultados do CEP
         showLocationOnMap(data.localidade, data.uf);
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
 function showLocationOnMap(localidade, uf) {
   var geocoder = new google.maps.Geocoder();

   geocoder.geocode({ address: localidade + ', ' + uf }, function (results, status) {
     if (status === 'OK' && results[0] && map) {
       map.setCenter(results[0].geometry.location);
     } else {
       // Trate o erro ou mostre uma mensagem ao usuário
       console.error('Erro ao geocodificar o endereço');
     }
   });
 }
 