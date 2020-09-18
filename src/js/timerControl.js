 import {
   refs,
   showTime,
 } from "./myTimer";

 const timer = {
   deadLineHomework: '2020,9,30',
   intervalId: null,
   isActive: false,
   start() {
     if (this.isActive) {
       return;
     }

     this.isActive = true;
     this.intervalId = setInterval(showTime(this.deadLineHomework), 1000)
   },
   stop() {
     clearInterval(this.intervalId);
     this.intervalId = null;
     this.isActive = false;
   },
 };


 refs.start.addEventListener('click', timer.start.bind(timer));
 refs.stop.addEventListener('click', timer.stop.bind(timer));
