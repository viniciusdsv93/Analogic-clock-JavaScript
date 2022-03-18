let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(
        seconds
    )}`;
    updatePointers(hour, minutes, seconds);
}

function fixZero(time) {
    return time < 10 ? "0" + time : time;
}

function updatePointers(_hour, _minutes, _seconds) {
    sElement.style.transform = `rotate(${_seconds * 6 - 90}deg)`;
    mElement.style.transform = `rotate(${_minutes * 6 - 90}deg)`;
    hElement.style.transform = `rotate(${_hour * 30 - 90}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
