import { updateTime } from "./index.js";
import { getWeather } from "./get-weather.js";
import { distributesWeather } from "./weather.js"

updateTime()
getWeather().then((weather) => {
    distributesWeather(weather);
});