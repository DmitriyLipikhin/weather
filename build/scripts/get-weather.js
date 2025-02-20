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
export {
  getWeather
};
//# sourceMappingURL=get-weather.js.map
