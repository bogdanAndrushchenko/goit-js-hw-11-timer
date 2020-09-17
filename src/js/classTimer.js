class CountdownTimer {
  constructor(
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    t,
    dead = '0',
  ) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
    this.t = t;
    this.dead = dead;
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

  getTimeRemaining(endtime) {
    this.t = Date.parse(endtime) - Date.parse(new Date());
    this.seconds = Math.floor((this.t / 1000) % 60);
    this.minutes = Math.floor((this.t / 1000 / 60) % 60);
    this.hours = Math.floor((this.t / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
    return {
      total: this.t,
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  }

  initializeClock(endtime) {
    //   const clock = document.getElementById(id);
    const daysSpan = document.querySelector('[data-value="days"]');
    const hoursSpan = document.querySelector('[data-value="hours"]');
    const minutesSpan = document.querySelector('[data-value="mins"]');
    const secondsSpan = document.querySelector('[data-value="secs"]');

    const updateClock = () => {
      const t = this.getTimeRemaining(endtime);

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
}




    const clock = new CountdownTimer();
    const deadLineFormat = new Date(2020,8,30);
    clock.initializeClock(deadLineFormat);

console.log(clock);
