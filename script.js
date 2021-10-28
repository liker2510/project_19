'use strict';
const span = document.getElementById('span');
console.log(span);

const getTimeRemaning = () => {

    let hour = (new Date()).getHours();
    let minutes = (new Date()).getMinutes();
    let seconds = (new Date()).getSeconds();
    let day = String(new Date());
    let time = new Date()

    let dateStop = new Date("December 31, 2021").getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60 / 24);
    let days;
    let lastDigit = hours % 10;


    if (lastDigit == 2 || lastDigit == 3 || lastDigit == 4) {
        days = " дня";
    } else if (lastDigit > 4 && lastDigit < 21) {
        days = " дней";
    } else if (lastDigit == 1) {
        days = " день";
    } else {
        days = " дней";
    }

    if (hour >= 5 && hour < 12) {
        span.innerHTML = `С добрым утром! <br> Сегодня: ${day.slice(0, 4)} <br> Текущее время: ${hour} : ${minutes} : ${seconds} <br> До нового года осталось: ${hours} ${days}`;
    } else if (hour >= 0 && hour < 5) {
        span.innerHTML = `Доброй ночи! <br> Сегодня: ${day.slice(0, 4)} <br> Текущее время: ${hour} : ${minutes} : ${seconds} <br> До нового года осталось: ${hours} ${days}`;
    } else if (hour >= 12 && hour < 18) {
        span.innerHTML = `Добрый день! <br> Сегодня: ${day.slice(0, 4)} <br> Текущее время: ${hour} : ${minutes} : ${seconds} <br> До нового года осталось: ${hours} ${days}`;
    } else if (hour >= 18 && hour < 24) {
        span.innerHTML = `Добрый вечер! <br> Сегодня: ${day.slice(0, 4)} <br> Текущее время: ${hour} : ${minutes} : ${seconds} <br> До нового года осталось: ${hours} ${days}`;
    }

}

let idInterval = setInterval(() => {
    getTimeRemaning()
}, 1000);



