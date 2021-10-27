const newYears = new Date("01/1/2022");
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secsEl = document.getElementById("seconds")

function countDown(){
    const currentDate = new Date();
    var diff = newYears - currentDate;
    var days = Math.floor((diff/(1000*60*60*24)));
    var hours = Math.floor((diff/(1000*60*60))%24);
    var minutes = Math.floor((diff/(1000*60))%60);
    var seconds = Math.floor((diff/1000)%60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
    
}

setInterval(countDown, 1000);

