let listChar=[];

let cadre = document.querySelector("footer div");

window.addEventListener("keydown",(e) => {
    if(listChar.length<43) {
        listChar.push(e.key);
    } else {
        listChar = listChar.slice(1)
        listChar.push(e.key);
    }
    cadre.textContent = listChar;
   
});