 // Adicione event listeners para teclas "Enter" nos campos de entrada
 document.getElementById("start").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      findPalindromes();
    }
  });

  document.getElementById("end").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      findPalindromes();
    }
  });

  document.getElementById("purchaseAmount").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateChange();
    }
  });

  document.getElementById("givenAmount").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateChange();
    }
  });

  document.getElementById("cep").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchCepData();
    }
  });

  // Adicione event listeners para teclas "Enter" nos botões
  document.getElementById("start").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      findPalindromes();
    }
  });

  document.getElementById("end").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      findPalindromes();
    }
  });

  document.getElementById("purchaseAmount").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateChange();
    }
  });

  document.getElementById("givenAmount").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateChange();
    }
  });

  document.getElementById("cep").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchCepData();
    }
  });