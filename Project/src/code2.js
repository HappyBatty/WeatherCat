// day + time

let today = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thusday", "Friday", "Saturday"];
let day = days[today.getDay()];

let year = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[today.getMonth()];

let date = today.getDate();

let hours = today.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let time = `${hours}:${minutes}`;

function timeDisplay() {
  let h6 = document.querySelector("h6");
  h6.innerHTML = `${day} ${time}`;
}

timeDisplay();

// city

function cityDisplay(event) {
  event.preventDefault();
  timeDisplay();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city-display");
  city.innerHTML = `${cityInput.value}`;
}

let citySearch = document.querySelector("#city-form");
citySearch = addEventListener("submit", cityDisplay);

// temperature conversion

let currentTemp = 95;
let far = "℉";
let currentTempDisplay = document.querySelector("#current-temp");

function celsiusConvert(event) {
  event.preventDefault();
  let currentTempDisplay = document.querySelector("#current-temp");
    let currentTempC = Math.round((currentTemp - 32) * 5 / 9);
    let cel = "℃";
    currentTempDisplay.innerHTML = `${currentTempC}${cel}`;
}

let celsiusClick = document.querySelector("#c-link");
celsiusClick.addEventListener("click", celsiusConvert);

function fareinheitConvert(event) {
  let currentTempC = 35
  let currentTempF = Math.round((currentTempC * 9) / 5 + 32);
  currentTempDisplay.innerHTML = `${currentTempF}${far}`;
}

let fareinheitClick = document.querySelector("#f-link");
fareinheitClick.addEventListener("click", fareinheitConvert);

