import { updateTime } from "./index.js";
import { getWeather } from "./get-weather.js";
import { distributesWeather } from "./weather.js"
import { chooseCountry } from "./country-weather.js";

updateTime()
chooseCountry();
const changesCountry = (city) => {
    getWeather(city).then((weather) => {
        distributesWeather(weather);
    });
}


export {changesCountry};