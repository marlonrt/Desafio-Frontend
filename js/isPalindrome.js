let palindromes = [];
let currentBatch = 0;
const batchSize = 20;
let separator = ", "; // Pode ser "," ou "-"

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

      palindromes = findPalindromesInRange(startInput, endInput);
      showMoreButton.style.display = palindromes.length > 0 ? "block" : "none";
      showMorePalindromes();
    }

    function findPalindromesInRange(start, end) {
      const palindromes = [];
      for (let number = start; number <= end; number++) {
        if (isPalindrome(number.toString())) {
          palindromes.push(number);
        }
      }
      return palindromes;
    }

    async function showMorePalindromes() {
      const palindromeResults = document.getElementById("palindromeResults");
      const showMoreButton = document.getElementById("showMore");

      const start = currentBatch;
      const end = Math.min(start + batchSize, palindromes.length);

      if (start >= palindromes.length) {
        showMoreButton.style.display = "none";
        return;
      }

      const fragment = document.createDocumentFragment();

      for (let i = start; i < end; i++) {
        const palindromeNumber = document.createElement("div");
        palindromeNumber.className = "palindrome-number";
        palindromeNumber.innerText = palindromes[i];
        fragment.appendChild(palindromeNumber);
      }

      palindromeResults.appendChild(fragment);
      currentBatch = end;

      // Liberar a interface do usuário por um breve momento usando um timeout.
      // Isso permite que a interface responda a eventos enquanto os palíndromos são exibidos.
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    function isPalindrome(str) {
      return str === str.split("").reverse().join("");
    }    const palindromeNumbers = palindromes.slice(start, end).join(", ");
    palindromeResults.insertAdjacentHTML("beforeend", palindromeNumbers);
