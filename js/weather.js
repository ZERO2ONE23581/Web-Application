const API_KEY = "d95d3165f53b478762e6cd6f0b1a679e";

navigator.geolocation.getCurrentPosition(getLocation, getError);

function getLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather p:first-child");
      const weather = document.querySelector("#weather p:last-child");
      city.innerText = `Current Location: ${data.name}`;
      weather.innerText = `Today's weather:  ${data.main.temp} ,${data.weather[0].main}`;
    })
  );
}
function getError() {
  alert("We can't find your location");
}
