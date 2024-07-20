"use strict";

/*===========================whether-api=====================*/

const clima = `https://api.openweathermap.org/data/2.5/weather?q=Lujan&units=Imperial&appid=d0d692d58f21e02e6201f521d129c741`;
const whether = document.querySelector(".whether");
const ubication = document.querySelector(".ubication");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const winds = document.querySelector(".winds");
const icoImage = document.querySelector(".icon");

fetch(clima)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const name = data.name;
    ubication.textContent = `${data.name}, Argentina`;
    const grade = Math.round(data.main.temp);
    temperature.textContent = `${grade} F`;
    let icon = data.weather[0].icon;
    const icoUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    icoImage.src = icoUrl;
    icoImage.style.backgroundColor = "lightblue";
    winds.textContent = `wind speed:  ${data.wind.speed} m/s`;
    const words = data.weather[0].description;
    description.textContent = words.toUpperCase();
  });

/*====================nasa-api============================*/
/* NByIAyXkLCxAH5aHsr5uFfWT4p3bdh3YVsGeWedA  */
const box1 = document.querySelector(".box");
const url1 =
  "https://api.nasa.gov/planetary/apod?api_key=NByIAyXkLCxAH5aHsr5uFfWT4p3bdh3YVsGeWedA&count=6";

async function getNasa() {
  const response = await fetch(url1);
  const data = await response.json();
  console.log(data);
  getDatos(data);
}
getNasa();

const getDatos = (data) => {
  data.forEach((element) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h5");
    const image = document.createElement("img");
    const p = document.createElement("p");

    if (element.media_type === "image") {
      image.setAttribute("src", `${element.url}`);
    } else {
      image.width = "0";
      image.height = "0";
    }

    h3.textContent = `${element.title}`;
    h4.textContent = `${element.date}`;
    image.setAttribute("loading", "lazy");
    image.setAttribute("src", `${element.url}`);
    image.setAttribute("width", "500");
    image.setAttribute("height", "250");
    p.textContent = `${element.explanation}`;

    section.appendChild(h3);
    section.appendChild(h4);
    section.appendChild(image);
    section.appendChild(p);

    box1.appendChild(section);
  });
};
getDatos();

/*=======================dark-mode=========================*/
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
