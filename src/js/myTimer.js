export {
  refs,
  showTime,

}
const refs = {
  daysSpan: document.querySelector('[data-value="days"]'),
  hoursSpan: document.querySelector('[data-value="hours"]'),
  minutesSpan: document.querySelector('[data-value="mins"]'),
  secondsSpan: document.querySelector('[data-value="secs"]'),
  start: document.querySelector('button[data-action-start]'),
}




function allTimeRemaining(deadLineDate) {
  const time = howManyDayRemaining(deadLineDate);

  const days = padZeroZero(Math.floor(time / (1000 * 60 * 60 * 24)));


  const hours = padZeroZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));


  const mins = padZeroZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));


  const secs = padZeroZero(Math.floor((time % (1000 * 60)) / 1000));

  return {
    'allTime': time,
    'days': days,
    'hours': hours,
    'minutes': mins,
    'seconds': secs,
  }

}

function padZeroZero(value) {
  return String(value).padStart(2, '0');
}

function howManyDayRemaining(deadLineDate) {
  const now = Date.parse(new Date())
  const deadLine = Date.parse(deadLineDate)
  const time = deadLine - now;
  return time;
}



function showTime(deadLineDate) {
  function createSpan() {
    const show = allTimeRemaining(deadLineDate);
    refs.daysSpan.textContent = show.days;
    refs.hoursSpan.textContent = show.hours;
    refs.minutesSpan.textContent = show.minutes;
    refs.secondsSpan.textContent = show.seconds;
    if (show.allTime <= 0) {
      clearInterval(timeinterval);

    }
  }

  createSpan();
  const timeinterval = setInterval(createSpan, 1000);
}

