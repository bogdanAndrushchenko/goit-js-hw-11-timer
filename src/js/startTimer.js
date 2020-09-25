 import 
  CountdownTimer
  from "./myTimer";

  const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("2020,9,30"),
  });

  const startBtn = document.querySelector("button[data-action-start]");
  startBtn.addEventListener("click", startTimer);
  
  function startTimer() {
    startBtn.setAttribute('disabled','')
    timer.showTime();
  }
  
  
 
 