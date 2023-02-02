// * -------------------------------------------------- *
// * © Copyright 2023 - Zode                            *
// * -------------------------------------------------- *

import "@hotwired/turbo-rails";
import "controllers";

// ------------------------------------------

console.log("What You're Doing Here :)");

// ------------------------------------------

//* Year
function updateYear() {
  const date = new Date();

  let year = date.getFullYear();

  document.getElementById("Year").innerHTML = year;
}

setInterval(updateYear, 1);

// ------------------------------------------

//* Local Time
function updateTime() {
  const date = new Date();

  let period = "AM";
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 12) {
    period = "PM";
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (milliseconds < 10) {
    milliseconds = "0" + milliseconds;
  }
  if (milliseconds < 100) {
    milliseconds = "0" + milliseconds;
  }

  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds + " " + period;
}

setInterval(updateTime, 1);

// ------------------------------------------

//* Local Date
function updateDate() {
  const date2 = new Date();

  let year = date2.getFullYear();
  let month = date2.getMonth();
  let date = date2.getDate();

  if ((month = "00")) {
    month = "1";
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  document.getElementById("date").innerHTML = year + "/" + month + "/" + date;
}

setInterval(updateDate, 1);

// ------------------------------------------

//* Stop Watch
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// ------------------------------------------

//* TimeZone

let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone);

// ------------------------------------------

//* ------------------Background-Tests------------------

//* Times Test
function updateDateGMT() {
  const date2 = new Date().setUTCDate();

  let year = date2.getFullYear();
  let month = date2.getMonth();
  let date = date2.getDate();

  if ((month = "00")) {
    month = "1";
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  document.getElementById("date").innerHTML = year + "/" + month + "/" + date;
}

setInterval(updateDate, 1);

// ------------------------------------------
