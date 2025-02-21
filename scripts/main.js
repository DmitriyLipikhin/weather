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
var getWeather = async (city) => {
  console.log(city);
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=62e8139d4e7244d893b32610252002&q=${city}&aqi=no&lang=ru`);
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

// source/scripts/country-weather.js
var selectCountry = document.querySelector(".weather__city-select");
var chooseCountry = () => {
  selectCountry.addEventListener("change", () => {
    const city = selectCountry.value;
    changesCountry(city);
  });
};

// source/scripts/main.js
updateTime();
chooseCountry();
var changesCountry = (city) => {
  getWeather(city).then((weather) => {
    distributesWeather(weather);
  });
};
export {
  changesCountry
};
//# sourceMappingURL=main.js.map
