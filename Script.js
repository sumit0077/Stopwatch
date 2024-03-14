let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (!running) {
        running = true;
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopButton").textContent = "Stop";
    } else {
        running = false;
        clearInterval(timer);
        document.getElementById("startStopButton").textContent = "Start";
    }
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopButton").textContent = "Start";
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);
