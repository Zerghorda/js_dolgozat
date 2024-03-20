import { ALLATOK } from "./allatok.js";
const tartalomELEM = document.querySelector(".tartalom");
const kivalasztotELEM = document.querySelector(".kivalasztott");
const cardELEM = document.getElementsByClassName("card");
tartalomELEM.innerHTML += cardok(ALLATOK);

function cardok(ALLATOK) {
  let txt = "";
  for (let index = 0; index < ALLATOK.length; index++) {
    txt += `<div class='card'>`;
    txt += `<img scr='${ALLATOK[index].kep}' alt='${ALLATOK[index].nev}'>`;
    txt += `<ul>`;
    txt += `<li>Faj:${ALLATOK[index].faj}</li>`;
    txt += `<li>Neve:${ALLATOK[index].nev}</li>`;
    txt += `<li>Szerintem mennyire aranyos egy 1-10 skállán:${ALLATOK[index].aranyosSkala}</li>`;
    txt += `</ul>`;
    txt += `</div>`;
  }
  return txt;
}
let kivalasztottLista = [];
for (let index = 0; index < cardELEM.length; index++) {
  cardELEM[index].addEventListener("click", function (event) {
    console.log(event.target);
    kivalasztottLista.push(cardELEM[index]);
  });
}
function kivalasztotKiir(kivalasztottLista) {
  let txt = "";
  for (let index = 0; index < kivalasztottLista.length; index++) {
    txt += `<div>`;
    txt += `${kivalasztottLista[index]}`;
    txt += `</div>`;
  }
  return txt;
}
kivalasztotELEM.innerHTML += kivalasztotKiir(kivalasztottLista);
