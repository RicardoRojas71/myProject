"use strict";
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
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
  console.log(getHour);
}

setInterval(setDate, 1000);

/*================hamburger-menu========================*/
const open = document.querySelector(".menu");
const close = document.querySelector(".barra");

open.addEventListener("click", () => {
  close.classList.toggle("open");
  open.classList.toggle("close");
});
