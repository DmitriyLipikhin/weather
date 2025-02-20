const weatherWind = document.querySelector('.weather__details-count-wind')
const weatherHumadity = document.querySelector('.weather__details-count-humadity')
const weatherTempMin = document.querySelector('.weather__details-count-temp-min')
const weatherTempFeel = document.querySelector('.weather__details-count-temp-feel')
const weatherCloudy = document.querySelector('.weather__details-count-cloudy')
const weatherCurrent = document.querySelector('.weather__details-current-weather')
const weatherCity = document.querySelector('.weather-info__city')
const weatherTemp = document.querySelector('.weather-info__degrees');

const distributesWeather = (weather) => {
    weatherCity.textContent = `${weather.location.name}`;
    weatherCurrent.textContent = `${weather.current.weather_descriptions}`;
    weatherCloudy.textContent = `${weather.current.cloudcover}%`;
    weatherTempFeel.textContent = `${weather.current.feelslike}`;
    weatherTempMin.textContent = `${weather.current.temperature}`;
    weatherHumadity.textContent = `${weather.current.humidity}%`;
    weatherWind.textContent = `${weather.current.wind_speed} km/h`;
    weatherTemp.textContent = `${weather.current.temperature}°`;
}

export {distributesWeather};