let cadre = document.querySelector("footer div");

cadre.addEventListener("click", () => {

    let person = prompt("ton nom ?");
    while(person == null || person == "") {
        person = prompt("ton nom ?");
    }

    cadre.textContent = "bienvenue "+person;
    alert("bienvenue "+person);

})