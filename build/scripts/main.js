// source/scripts/index.js
var fieldDate = document.querySelector(".weather-info__time");
var createTime = () => {
  let today = /* @__PURE__ */ new Date();
  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  const option = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const currentDate = today.toLocaleDateString("ru-RU", option);
  fieldDate.textContent = `${hours}:${minutes} ${currentDate}`;
};
var updateTime = () => {
  document.addEventListener("DOMContentLoaded", () => {
    createTime();
    setInterval(createTime, 1e3);
  });
};

// source/scripts/get-weather.js
var getWeather = async () => {
  try {
    const response = await fetch("https://api.weatherstack.com/current?access_key=6aea1fb5b0614f290ff9a0b696b93ff2&query=Khabarovsk");
    if (!response.ok) {
      throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430:", error.message);
    throw error;
  }
};

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

// source/scripts/main.js
updateTime();
getWeather().then((weather) => {
  distributesWeather(weather);
});
//# sourceMappingURL=main.js.map
