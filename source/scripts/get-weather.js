const getWeather = async (city) => {
    console.log(city)
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=62e8139d4e7244d893b32610252002&q=${city}&aqi=no&lang=ru`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Произошла ошибка:", error.message);
        throw error;
    }
};

export {getWeather}