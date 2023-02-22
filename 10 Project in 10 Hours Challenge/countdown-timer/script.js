const daysElements = document.getElementById('days');
const hoursElements = document.getElementById('hours')
const minsElements = document.getElementById('mins')
const secsElements = document.getElementById('secs')

const summerSolstice = '21 Jun 2023 10:57'

function countdown() {
    const summerSolsticeDate = new Date(summerSolstice)
    const currentDate = new Date();

    const totalSeconds = Math.floor((summerSolsticeDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;

    daysElements.innerHTML = days;
    hoursElements.innerHTML = hours;
    minsElements.innerHTML = minutes;
    secsElements.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);