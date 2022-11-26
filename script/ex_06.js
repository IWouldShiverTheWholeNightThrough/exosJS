class Hero {

    nom;
    classe;
    intelligence;
    force;

    constructor(nom, classe, intelligence, force) {
        this.nom = nom;
        this.classe = classe;
        this.intelligence = intelligence;
        this.force = force;
    }

    toString() {
        let phrase = `Je suis ${this.nom} le ${this.classe}, j'ai ${this.intelligence} points d'intelligence, et ${this.force} points de force.`;
        let cadre = document.querySelector("footer div");
        let p = document.createElement("p");
        p.textContent = phrase;
        cadre.append(p);
    }

}

var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pontius", "guerrier", 1, 9);
mage.toString();
guerrier.toString();