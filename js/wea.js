async function getWeather() {
  const apiKey = "";
  const city = 'jeju';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    const temperature = data.main.temp;
    const temperatureElement = document.querySelector('.temperature');
    temperatureElement.innerHTML = `${temperature}°C`;
  } catch (error) {
    console.log(error);
  }
}

getWeather();