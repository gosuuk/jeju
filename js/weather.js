const API_KET = "";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KET}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert("위치를 동의하지 않으면 날씨와 온도를 알려줄 수 없어");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);