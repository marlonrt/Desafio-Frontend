function calculateChange() {
    const purchaseAmount = parseInt(document.getElementById("purchaseAmount").value);
    const givenAmount = parseInt(document.getElementById("givenAmount").value);
    const changeResults = document.getElementById("changeResults");
    changeResults.innerHTML = "";

    if (isNaN(purchaseAmount) || isNaN(givenAmount) || purchaseAmount > givenAmount) {
      changeResults.innerHTML = "Por favor, insira valores válidos.";
      return;
    }

    const changeAmount = givenAmount - purchaseAmount;
    const notes100 = Math.floor(changeAmount / 100);
    const notes10 = Math.floor((changeAmount % 100) / 10);
    const notes1 = changeAmount % 10;

    changeResults.innerHTML = `Valor da Compra: R$ ${purchaseAmount}<br>`;
    changeResults.innerHTML += `Valor Entregue: R$ ${givenAmount}<br>`;
    changeResults.innerHTML += `Valor do Troco: R$ ${changeAmount}<br>`;
    changeResults.innerHTML += `Notas de R$ 100: ${notes100}<br>`;
    changeResults.innerHTML += `Notas de R$ 10: ${notes10}<br>`;
    changeResults.innerHTML += `Notas de R$ 1: ${notes1}`;
  }