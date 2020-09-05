
function citySearch (event) {
  event.preventDefault();
  let apiKey = "300be6f34bbbd967dbaaa62932323436";
  let unit = "imperial";
  let cityImput = document.querySelector("#city-input");
  let cityShow = document.querySelector("#city-display");
  cityShow.innerHTML = `${cityImput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityImput.value}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(cityWeather)
}

  function cityWeather(response) {
  let tempRound = Math.round(response.data.main.temp);
  let tempShow = document.querySelector("#current-temp");
  tempShow.innerHTML = `${tempRound}℉`
}

let city = document.querySelector("#city-form");
city = addEventListener("submit", citySearch);

