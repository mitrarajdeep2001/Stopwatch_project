// Constants
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
let ms = (sec = mint = hr = "0" + 0);
let timer;

// Add event listeners
(function () {
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
})();

// Starts the timer
function startTimer() {
  timer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    if (ms === 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "00";
    }
    if (sec === 60) {
      mint++;
      mint = mint < 10 ? "0" + mint : mint;
      sec = "00";
    }
    if (mint === 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      mint = "00";
    }

    document.getElementById("milisecond").innerHTML = ms;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("minute").innerHTML = mint;
    document.getElementById("hour").innerHTML = hr;

    document.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    this.setAttribute("disabled", true);
    stopBtn.removeAttribute("disabled");
    resetBtn.removeAttribute("disabled");
  }, 10);
}

// Stops the timer
function stopTimer() {
  clearInterval(timer);
  
  document.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  this.classList.add("active");
  this.setAttribute("disabled", true);
  startBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
}

// Resets the timer
function resetTimer() {
  clearInterval(timer);

  startBtn.classList.remove("active");
  startBtn.removeAttribute("disabled");
  this.classList.add("active");
  this.setAttribute("disabled", true);
  stopBtn.classList.add("active");
  stopBtn.setAttribute("disabled", true);

  document.getElementById("milisecond").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}
