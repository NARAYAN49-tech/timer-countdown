const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2026'; // update to future date

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds /( 3600 * 24));
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

// Typed.js animation
var typed = new Typed('#element', {
  strings: ["Time Down Counter", "Countdown to New Year!", "2026 Is Now Closer", "Huyaah 2026"],
  typeSpeed: 60,
  backSpeed: 60,
  startDelay: 1000,
  backDelay: 500,
  loop: true,
  onBegin: function(self) { prettyLog('onBegin ' + self) },
  onDestroy: function(self) { prettyLog('onDestroy ' + self) }


});
