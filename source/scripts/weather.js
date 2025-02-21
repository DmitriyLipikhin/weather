const weatherWind = document.querySelector('.weather__details-count-wind')
const weatherHumadity = document.querySelector('.weather__details-count-humadity')
const weatherTempMin = document.querySelector('.weather__details-count-temp-min')
const weatherTempFeel = document.querySelector('.weather__details-count-temp-feel')
const weatherCloudy = document.querySelector('.weather__details-count-cloudy')
const weatherCurrent = document.querySelector('.weather__details-current-weather')
const weatherCity = document.querySelector('.weather-info__city')
const weatherTemp = document.querySelector('.weather-info__degrees');
const weatherDetailsIcon = document.querySelector('.weather__details-icon')

const distributesWeather = (weather) => {
    weatherCity.textContent = `${weather.location.name}`;
    weatherCurrent.textContent = `${weather.current.condition.text}`;
    weatherCloudy.textContent = `${weather.current.cloud}%`;
    weatherTempFeel.textContent = `${weather.current.feelslike_c}`;
    weatherTempMin.textContent = `${weather.current.temp_c}`;
    weatherHumadity.textContent = `${weather.current.humidity}%`;
    weatherWind.textContent = `${weather.current.wind_kph} км/ч`;
    weatherTemp.textContent = `${Math.trunc(weather.current.temp_c)}°`;
    weatherDetailsIcon.style.backgroundImage = `url(${weather.current.condition.icon})`;
}

export {distributesWeather};