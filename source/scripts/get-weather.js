const getWeather = async () => {
    try {
        const response = await fetch('https://api.weatherstack.com/current?access_key=6aea1fb5b0614f290ff9a0b696b93ff2&query=Khabarovsk');
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