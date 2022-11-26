let cadre = document.querySelector("footer div");
let lien = cadre.querySelector("a");

lien.addEventListener("click", () => {
  
  if (document.cookie == "") {
    cadre.textContent = "";
    let expTime = new Date(new Date().getTime() + 1000 * 3600 * 24);
    document.cookie = "acceptsCookie = true; expires = " + expTime;
    lien.textContent = "supprimer cookie ?";
    cadre.replaceChildren(lien);
  } else {
    document.cookie = "acceptsCookie =; expires = " + (new Date("1970"));
    
    cadre.textContent = "Ce site utilise les cookies, cliquez sur OK si vous acceptez leur utilisation. ";
    lien.textContent = "Remettre cookie ?";
    cadre.appendChild(lien);
  }

 
});
