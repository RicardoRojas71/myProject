/*=============dark-mode======================*/
/*============================================*/

function chan() {
  let change = document.querySelector("body");
  let boton = document.querySelector(".boton");
  change.classList.toggle("dark");
  if (boton.textContent.includes("🌞")) {
    boton.textContent = "🌙";
    boton.style.backgroundColor = "#333";
  } else {
    boton.textContent = "🌞";
    boton.style.backgroundColor = "#fff";
  }
}

/*===============hamburger-buttom===================*/

const open = document.querySelector(".menu");
const close = document.querySelector(".barra");

open.addEventListener("click", () => {
  close.classList.toggle("open");
  open.classList.toggle("close");
});
