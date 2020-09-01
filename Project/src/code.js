let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city=prompt("Enter a city?");
city = city.toLowerCase();
city = city.trim();
let tempCelsius = Math.round(weather[city].temp)
let tempFahrenheit = Math.round((weather[city].temp * 9) / 5 + 32) ;
 if (weather[city] !== undefined) {
alert(`It is currently ${tempCelsius}℃ (${tempFahrenheit}℉) in ${city} with a humidity of ${weather[city].humidity}`);
 } else {
   alert(`Sorry, we know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
 }

 //date and time

 let today = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[today.getDay()];

let year = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[today.getMonth()];

let date = today.getDate();

let time = `${today.getHours()}:${today.getMinutes()}`

function formatDate(today) {
  let h6 = document.querySelector("h6");
  h6.innerHTML = `${day}, ${month} ${date}, ${time}`;
}

formatDate(today);