//Script.js
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '26cc1b0a71mshb503fea2aeedb25p122b05jsnc916465ec9b1',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(Response => Response.json)
    .then((Response) =>
      console.log(Response))

  temp.innerHTML = Response.temp
  humidity.innerHTML = Response.humidity
  wind_speed.innerHTML = Response.wind_speed
  cloud_pct.innerHTML = Response.cloud_pct

    .catch(err => console.error(err));
}

submit.addEventListner("click", (e) => {
  console.log(submit);
  e.preventDefault();
  getWeather(city.value);
});

getWeather("agartala")