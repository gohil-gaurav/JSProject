
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let time = new Date();

function updateClock() {
    hour.innerText = time.getHours();
    minute.innerText = time.getMinutes();
    second.innerText = time.getSeconds();
    time = new Date();
}

setInterval(updateClock, 1000); 

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

function updateDate() {
    day.innerText = time.getDate();
    month.innerText = time.getMonth()+1;
    year.innerText = time.getFullYear();
    time = new Date();
}

setInterval(updateDate, 1000);
