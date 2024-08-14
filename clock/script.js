"use strict";
/*variabes of clock*/
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");  
/*variables of alarm*/
let horas = null;
let minutos =null;
const stop = document.querySelector('.stop');


function setDate() {
    
  const now = new Date();
  const getSecond = now.getSeconds();

  const secondDegree = (getSecond / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const getMinute = now.getMinutes();

  const minuteDegree = (getMinute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const getHour = now.getHours();
  const hourDegree = (getHour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

    
    /*alarm setting*/
    if(getHour === horas && getMinute === minutos){
        const audio = new Audio('audio/chamame.mp3');
        audio.play();
        
        horas= null;
        minutos = null;
        document.querySelector('.stop').style.background = 'green'
        
     stop.addEventListener('click', () =>{
        if(audio) {
             audio.pause();
             audio.currentTime = 0;
            document.querySelector('.stop').style.background = 'white';
        document.querySelector('button').style.background="white";
         document.querySelector('button').style.color="black";
        
     }
     })   
    }

}


function alarma(){
    horas = parseInt(document.querySelector('.box1').value);
   minutos =  parseInt(document.querySelector('.box2').value);
    document.querySelector('button').style.background='red';
     document.querySelector('button').style.color='white';
    
}


setInterval(setDate, 1000);

/*================hamburger-menu========================*/
const open = document.querySelector(".menu");
const close = document.querySelector(".barra");

open.addEventListener("click", () => {
  open.classList.toggle("close");
  close.classList.toggle("open");
});
