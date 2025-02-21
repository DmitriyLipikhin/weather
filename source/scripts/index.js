const fieldDate = document.querySelector('.weather-info__time');


const createTime = () => {
    let today = new Date();

    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0'); 

    const option = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }

    const currentDate = today.toLocaleDateString('ru-RU', option)
    return fieldDate.textContent = `${hours}:${minutes} ${currentDate}`;
}

console.log(createTime())

const updateTime = () => {
    document.addEventListener('DOMContentLoaded', () => {
        createTime();
        setInterval(createTime, 1000);
    })
}

export {updateTime};