let buttons = document.querySelectorAll("footer button");
let btn1 = buttons[0];
let btn2 = buttons[1];

let fontsize = window
  .getComputedStyle(document.body)
  .getPropertyValue("font-size")
  .split("p")[0];
let size = parseInt(fontsize);
let cadre = document.querySelector("body");

btn1.addEventListener("click", () => {
  size = size * 1.1;
  cadre.style.fontSize = size + "px";
});

btn2.addEventListener("click", () => {
  size = size / 1.1;
  cadre.style.fontSize = size + "px";
});

let menu = document.querySelector("footer select");
menu.addEventListener("change", () => {
    document.body.style.backgroundColor = menu.value;
});

// pour cet exercice, mon fontsize est récuếré d'une façon un peu longue
// le cadre.style.fontSize ne renvoyait pas le fontSize pourtant correctement set dans le CSS
// le bouton + augmente la taille de 10% mais le bouton - divise par 1.1 au lieu d'enlever 10%
// tout simplement pour pouvoir retomber sur la taille initiale, ce qui n'arriverait jamais
// si j'enlevais 10% à chaque fois (car x*0.9*1.1 n'est pas à égal à x)
