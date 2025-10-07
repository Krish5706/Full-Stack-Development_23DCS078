const weatherData = {
  "New York": "22°C",
  "London": "18°C",
  "Tokyo": "26°C",
  "Sydney": "24°C",
  "Mumbai": "30°C",
  "Ahemdabad": "40°C",
};

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("result");

  if (weatherData[city]) {
    result.textContent = `The weather in ${city} is ${weatherData[city]}.`;
  } else {
    result.textContent = `Weather data for "${city}" not found.`;
  }
});
