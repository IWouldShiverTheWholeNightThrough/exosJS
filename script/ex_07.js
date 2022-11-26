let cadre = document.querySelector("footer div");
let carre = cadre.querySelector("canvas");
let position = document.querySelectorAll("footer div")[1];

carre.style.position = "absolute";
let clicked = false;

let decalageLeft = carre.style.left; // j'ai des bugs parfois sur la position du bouton ... 
let decalageTop = carre.style.top;
let move = (e) => {
    carre.style.left = e.clientX - decalageLeft + "px";
    carre.style.top = e.clientY - decalageTop + "px";
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
