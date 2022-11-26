let cadre = document.querySelector("footer div");
let compteur =0;
cadre.addEventListener("click", ()=>{
    compteur++;
    cadre.textContent = compteur;

});