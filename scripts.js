//Botões
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resumeBtn = document.querySelector("#resume");
const resetBtn = document.querySelector("#reset");
// Números da tela
let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#second");
let milliseconds = document.querySelector("#millisecond");
//Tempos
let minute = 0;
let second = 0;
let millisec = 0;
let interval;
let isPause = false;

startBtn.addEventListener("click", function () {
    interval = setInterval(() => {
        if (!isPause) {
            millisec += 10

            if (millisec === 1000) {
                second++
                millisec = 0
            }

            if (second === 60) {
                minute++
                second = 0
            }
            minutes.textContent = formatTime(minute)
            seconds.textContent = formatTime(second)
            milliseconds.textContent = formatMillisecod(millisec)

        }
    }, 10);

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
})

const togglePause = () => {
    isPause = !isPause
    resumeBtn.style.display = isPause ? "block" : "none"
    pauseBtn.style.display = isPause ? "none" : "block"
}

pauseBtn.addEventListener("click", togglePause)
resumeBtn.addEventListener("click", togglePause)

resetBtn.addEventListener("click", function () {
    clearInterval(interval)
    minutes.textContent = "00"
    seconds.textContent = "00"
    milliseconds.textContent = "000"

    minute = 0
    second = 0
    millisec = 0

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"

})

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMillisecod(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}








