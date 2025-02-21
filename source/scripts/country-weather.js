import { changesCountry } from "./main";

const selectCountry = document.querySelector('.weather__city-select');

const chooseCountry = () => {
    selectCountry.addEventListener('change', () => {
        const city = selectCountry.value;
        changesCountry(city);
    })
}

export {chooseCountry};