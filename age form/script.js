function showMessage() {
    var age = document.getElementById("age").value;
    var message = document.getElementById("message");
  
    if (age < 0) {
      message.textContent = "Ange en giltig ålder";
    } else if (age >= 0 && age <= 12) {
      message.textContent = "Du är ett barn";
    } else if (age >= 13 && age <= 19) {
      message.textContent = "Du är en tonåring";
    } else if (age >= 20 && age <= 64) {
      message.textContent = "Du är en vuxen";
    } else {
      message.textContent = "Du är en senior";
    }
  }
  