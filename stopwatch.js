let startTime = 0;
let elapsedTime = 0;
let timer = null;

const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");


function updateDisplay() {

    const time = elapsedTime;

    const hours = Math.floor(time / 3600000);

    const minutes = Math.floor(
        (time % 3600000) / 60000
    );

    const seconds = Math.floor(
        (time % 60000) / 1000
    );

    const milliseconds = Math.floor(
        (time % 1000) / 10
    );


    stopwatch.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + "." +
        String(milliseconds).padStart(2, "0");
}


function startStopwatch() {

    if (timer !== null) {
        return;
    }

    startTime = Date.now() - elapsedTime;

    timer = setInterval(() => {

        elapsedTime = Date.now() - startTime;

        updateDisplay();

    }, 10);

    startButton.textContent = "Pause";
}


function pauseStopwatch() {

    clearInterval(timer);

    timer = null;

    startButton.textContent = "Start";
}


function resetStopwatch() {

    clearInterval(timer);

    timer = null;

    elapsedTime = 0;

    updateDisplay();

    startButton.textContent = "Start";
}


startButton.addEventListener("click", () => {

    if (timer === null) {
        startStopwatch();
    } else {
        pauseStopwatch();
    }

});


resetButton.addEventListener("click", resetStopwatch);


updateDisplay();

