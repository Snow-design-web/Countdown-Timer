const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");


const lastExam = '1 October 2025';


function timer() {
    const lastExamDay = new Date(lastExam);
    const currentDate = new Date();

    const totSeconds = (lastExamDay - currentDate) / 1000;

    const days = Math.floor(totSeconds / 3600 / 24);
    const hours = Math.floor(totSeconds / 3600) % 24;
    const minutes = Math.floor(totSeconds / 60) % 60;
    const seconds = Math.floor(totSeconds) % 60;
    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(minutes);
    secEl.innerHTML = format(seconds);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}
timer();

setInterval(timer, 1000);