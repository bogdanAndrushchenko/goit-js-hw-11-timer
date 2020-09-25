export default
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.$selector = selector;
    this.targetDate = targetDate;

  }
  _padZeroZero(value) {
    return String(value).padStart(2, "0");
  }
  _howManyDayRemaining() {
    const currentTime = Date.now();
    return Date.parse(this.targetDate) - currentTime;
  }
  _allTimeRemaining() {
    const time = this._howManyDayRemaining();
    const days = this._padZeroZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this._padZeroZero(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this._padZeroZero(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this._padZeroZero(Math.floor((time % (1000 * 60)) / 1000));
    return {
      allTime: time,
      days: days,
      hours: hours,
      minutes: mins,
      seconds: secs,
    };
  }
  showTime() {
    const timer = document.querySelector(this.$selector);
    const daysSpan = timer.querySelector('[data-value="days"]');
    const hoursSpan = timer.querySelector('[data-value="hours"]');
    const minutesSpan = timer.querySelector('[data-value="mins"]');
    const secondsSpan = timer.querySelector('[data-value="secs"]');

   
    const createSpanValue = () => {
        const show = this._allTimeRemaining();
      
      daysSpan.textContent = show.days;
      hoursSpan.textContent = show.hours;
      minutesSpan.textContent = show.minutes;
      secondsSpan.textContent = show.seconds;

      if ((show.allTime <= 0)) {
        clearInterval(timeinterval);
      }
    };

    createSpanValue();
    const timeinterval = setInterval(createSpanValue, 1000);
  }
}

