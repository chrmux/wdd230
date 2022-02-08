const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

document.getElementById("speed").textContent = celsiusToFahrenheit;
document.getElementById("chill").textContent = fahrenheitToCelsius;