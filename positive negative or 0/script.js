function checkNumber() {
    const numberInput = document.getElementById("number");
    const resultElement = document.getElementById("result");
    const number = parseFloat(numberInput.value);
  
    if (number > 0) {
      resultElement.innerText = "Talet är positivt";
      resultElement.className = "positive";
    } else if (number < 0) {
      resultElement.innerText = "Talet är negativt";
      resultElement.className = "negative";
    } else {
      resultElement.innerText = "Talet är noll";
      resultElement.className = "zero";
    }
  }
  