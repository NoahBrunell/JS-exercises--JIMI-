function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit-input");
    const celsius = (fahrenheitInput.value - 32) * 5 / 9;
    const result = celsius.toFixed(2) + " °C = " + fahrenheitInput.value + " °F";
    document.getElementById("result").textContent = result;
  }
  
function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius-input");
  const fahrenheit = celsiusInput.value * 9 / 5 + 32;
  const result = fahrenheit.toFixed(2) + " °F = " + celsiusInput.value + " °C";
  document.getElementById("result").textContent = result;
}
