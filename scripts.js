const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resumeBtn = document.querySelector("#resume");
const resetBtn = document.querySelector("#reset");
let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#second");
let milliseconds = document.querySelector("#millisecond");
let minute = 0;
let second = 0;
let millisec = 0;
let interval;
let isPause = false;



function startTimer() {

    interval = setInterval(() => {
        if (!isPause) {

            millisec += 10

            if (millisec === 1000) {
                second++;
                millisec = 0
            }

            if (second === 60) {
                minute++;
                second = 0
            }

            minutes.textContent = formatTime(minute)
            seconds.textContent = formatTime(second)
            milliseconds.textContent = formatMillisecod(millisec)
        }

    }, 10)

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"

}

function stopTimer() {
    isPause = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTimer() {
    isPause = false
    resumeBtn.style.display = "none"
    pauseBtn.style.display = "block"

}


function resetTimer() {
    clearInterval(interval);

    minute = 0;
    second = 0;
    millisec = 0;

    minutes.textContent = "00";
    seconds.textContent = "00";
    milliseconds.textContent = "000";

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"

}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', stopTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)


function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMillisecod(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}








