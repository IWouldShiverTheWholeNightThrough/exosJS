let cadre = document.querySelector("footer div");
let carre = cadre.querySelector("canvas");
let position = document.querySelectorAll("footer div")[1];

carre.style.position = "absolute";
let clicked = false;

let decalageLeft = 30;
let decalageTop = 25;
let move = (e) => {
    carre.style.left = e.pageX - decalageLeft + "px";
    carre.style.top = e.pageY - decalageTop + "px";
    position.textContent = `Nouvelles coordonnées => {x:${carre.style.left}, y:${carre.style.top}}`;
}
carre.onmousedown = (e) => {
    move(e);
    if(!clicked) {
        clicked = true;
        document.onmousemove = (e) => {
            move(e);
        }
    } else {
        clicked = false;
        document.onmousemove = null;
    }
}
