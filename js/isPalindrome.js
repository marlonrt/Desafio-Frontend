let palindromes = [];
let currentBatch = 0;
const batchSize = 20;

function findPalindromes() {
  const startInput = parseInt(document.getElementById("start").value);
  const endInput = parseInt(document.getElementById("end").value);
  const palindromeResults = document.getElementById("palindromeResults");
  const showMoreButton = document.getElementById("showMore");

  palindromeResults.innerHTML = "";
  currentBatch = 0;

  if (isNaN(startInput) || isNaN(endInput) || startInput > endInput) {
    palindromeResults.innerHTML = "Por favor, insira um intervalo válido.";
    showMoreButton.style.display = "none";
    return;
  }

  palindromes = [];

  for (let number = startInput; number <= endInput; number++) {
    if (isPalindrome(number.toString())) {
      palindromes.push(number);
    }
  }

  if (palindromes.length === 0) {
    palindromeResults.innerHTML = "Nenhum palíndromo encontrado no intervalo.";
    showMoreButton.style.display = "none";
  } else {
    showMoreButton.style.display = "block";
  }

  showMorePalindromes();
}

function showMorePalindromes() {
  const palindromeResults = document.getElementById("palindromeResults");
  const showMoreButton = document.getElementById("showMore");

  const start = currentBatch;
  const end = start + batchSize;

  for (let i = start; i < end && i < palindromes.length; i++) {
    const palindromeNumber = document.createElement("div");
    palindromeNumber.className = "palindrome-number";
    palindromeNumber.innerText = palindromes[i];
    palindromeResults.appendChild(palindromeNumber);
  }

  currentBatch = end;

  if (currentBatch >= palindromes.length) {
    showMoreButton.style.display = "none";
  }
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
