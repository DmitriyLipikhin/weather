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
export {
  getWeather
};
//# sourceMappingURL=get-weather.js.map
