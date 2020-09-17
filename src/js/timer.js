function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime) {
  const daysSpan = document.querySelector('[data-value="days"]');
  const hoursSpan = document.querySelector('[data-value="hours"]');
  const minutesSpan = document.querySelector('[data-value="mins"]');
  const secondsSpan = document.querySelector('[data-value="secs"]');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.textContent = t.days;
    hoursSpan.textContent = ('0' + t.hours).slice(-2);
    minutesSpan.textContent = ('0' + t.minutes).slice(-2);
    secondsSpan.textContent = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadLineFormat = new Date(2020,8, 30);


initializeClock(deadLineFormat)


