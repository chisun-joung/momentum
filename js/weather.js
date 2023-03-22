const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "93227c482fa36aed1ab7dde51d9698e5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
