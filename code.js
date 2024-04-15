const startBtn = document.querySelector("[startBtn]");
const stopBtn = document.querySelector("[stopBtn]");
const timerDisplay = document.querySelector("[timer]");
const pauseBtn = document.querySelector("[pauseBtn]");
timerDisplay.innerHTML = " 00 : 00 : 00 : 00";
let d0 = 0,
  d1 = 0,
  h0 = 0,
  h1 = 0,
  c0 = 0,
  c1 = 0,
  counter0 = 0,
  counter1 = 0;
let myInterval;
let intervalSpeed = 1000;
let isTimerRunning = false;

function display() {
  return `${d0}${d1} : ${h0}${h1} : ${c0}${c1} : ${counter0}${counter1}`;
}

function updateTimer() {
  timerDisplay.textContent = display();
  counter1++;
  if (counter1 > 9) {
    counter1 = 0;
    counter0++;
  }
  if (counter0 > 5) {
    counter0 = 0;
    c1++;
  }
  if (c1 > 9) {
    c1 = 0;
    c0++;
    counter1 = 0;
    counter0 = 0;
  }
  if (c0 > 5) {
    h1++;
    c0 = 0;
    c1 = 0;
    counter0 = 0;
    counter1 = 0;
  }
  if (h1 > 9 && h0 < 2) {
    h1 = 0;
    h0++;
    c0 = 0;
    c1 = 0;
    counter0 = 0;
    counter1 = 0;
  }
  if (h0 === 2 && h1 >= 4) {
    h0 = 0;
    h1 = 0;
    d1++;
    c0 = 0;
    c1 = 0;
    counter0 = 0;
    counter1 = 0;
  }
  if (d1 > 9) {
    d1 = 0;
    d0++;
  }
}

function startTimer() {
  if (!isTimerRunning) {
    myInterval = setInterval(updateTimer, intervalSpeed);
    isTimerRunning = true;
  }
}

function pauseTimer() {
  clearInterval(myInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(myInterval);
  d0 = (d1 = h0 = h1 = c0 = c1 = counter0 = counter1 = 0);
  timerDisplay.textContent = " 00 : 00 : 00 : 00";
  isTimerRunning = false;
}

startBtn.addEventListener("click", () => {
  startTimer();
});

pauseBtn.addEventListener("click", () => {
  pauseTimer();
});

stopBtn.addEventListener("click", () => {
  resetTimer();
});
