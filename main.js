let startTimer;
let  ms = "0" + 0;
let sec = 0;
let min=0;
let hr=0; // Initialize sec to 0

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;

    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0; // Reset milliseconds to "00"
    }
    if (sec== 60) {
        min++;
        min =  min < 10 ? "0" +  min :  min;
        sec = "0" + 0; // Reset milliseconds to "00"
      }
      if (min== 60) {
        hr++;
        hr= hr < 10 ? "0" +  hr :  hr;
        min = "0" + 0; // Reset milliseconds to "00"
      }
    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
 
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  ms = "0" + 0;
  sec = 0; 
  min = 0;
  hr = 0;
  putValue();
}

function putValue() {
  document.querySelector(".milisec").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}