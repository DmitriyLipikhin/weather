// source/scripts/weather.js
var weatherWind = document.querySelector(".weather__details-count-wind");
var weatherHumadity = document.querySelector(".weather__details-count-humadity");
var weatherTempMin = document.querySelector(".weather__details-count-temp-min");
var weatherTempFeel = document.querySelector(".weather__details-count-temp-feel");
var weatherCloudy = document.querySelector(".weather__details-count-cloudy");
var weatherCurrent = document.querySelector(".weather__details-current-weather");
var weatherCity = document.querySelector(".weather-info__city");
var weatherTemp = document.querySelector(".weather-info__degrees");
var distributesWeather = (weather) => {
  weatherCity.textContent = `${weather.location.name}`;
  weatherCurrent.textContent = `${weather.current.weather_descriptions}`;
  weatherCloudy.textContent = `${weather.current.cloudcover}%`;
  weatherTempFeel.textContent = `${weather.current.feelslike}`;
  weatherTempMin.textContent = `${weather.current.temperature}`;
  weatherHumadity.textContent = `${weather.current.humidity}%`;
  weatherWind.textContent = `${weather.current.wind_speed} km/h`;
  weatherTemp.textContent = `${weather.current.temperature}\xB0`;
};
export {
  distributesWeather
};
//# sourceMappingURL=weather.js.map
