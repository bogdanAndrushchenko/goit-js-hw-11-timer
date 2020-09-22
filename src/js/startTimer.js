 import {
   refs,
   showTime,
 } from "./myTimer";


 function startTimer() {
   let isActive = false;
     if (isActive) {
       return;
     }
   isActive = true;
   showTime('2020,9,30')
 }


 refs.start.addEventListener('click', startTimer);
 
