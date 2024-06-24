/*-------------visit-counter------------------*/

const displayVisit = document.querySelector(".counter");
let numberVisits = Number(window.localStorage.getItem("visits") || 0);
if (numberVisits !== 0) {
  displayVisit.textContent = numberVisits + " " + "visits to the page";
} else {
  displayVisit.textContent = "Welcome. This is your first visit..!";
}
numberVisits++;

localStorage.setItem("visits", numberVisits);

/*---------------------Date----------------*/

const dia = document.querySelector(".date");
const ho = document.querySelector(".horas");
const day = new Date();
const hoy = day.toDateString();
dia.textContent = hoy;

/*-----------------hours------------------*/

const hora = () => {
  const d = new Date();
  let hour = String(d.getHours()).padStart(2, "0");
  let minutes = String(d.getMinutes()).padStart(2, "0");
  let seconds = String(d.getSeconds()).padStart(2, "0");

  const time = `${hour} : ${minutes} : ${seconds}`;
  document.querySelector(".horas").textContent = time;
};
setInterval(hora, 1000);
