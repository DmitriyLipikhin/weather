// source/scripts/weather.js
var weatherWind = document.querySelector(".weather__details-count-wind");
var weatherHumadity = document.querySelector(".weather__details-count-humadity");
var weatherTempMin = document.querySelector(".weather__details-count-temp-min");
var weatherTempFeel = document.querySelector(".weather__details-count-temp-feel");
var weatherCloudy = document.querySelector(".weather__details-count-cloudy");
var weatherCurrent = document.querySelector(".weather__details-current-weather");
var weatherCity = document.querySelector(".weather-info__city");
var weatherTemp = document.querySelector(".weather-info__degrees");
var weatherDetailsIcon = document.querySelector(".weather__details-icon");
var distributesWeather = (weather) => {
  weatherCity.textContent = `${weather.location.name}`;
  weatherCurrent.textContent = `${weather.current.condition.text}`;
  weatherCloudy.textContent = `${weather.current.cloud}%`;
  weatherTempFeel.textContent = `${weather.current.feelslike_c}`;
  weatherTempMin.textContent = `${weather.current.temp_c}`;
  weatherHumadity.textContent = `${weather.current.humidity}%`;
  weatherWind.textContent = `${weather.current.wind_kph} \u043A\u043C/\u0447`;
  weatherTemp.textContent = `${Math.trunc(weather.current.temp_c)}\xB0`;
  weatherDetailsIcon.style.backgroundImage = `url(${weather.current.condition.icon})`;
};
export {
  distributesWeather
};
//# sourceMappingURL=weather.js.map
