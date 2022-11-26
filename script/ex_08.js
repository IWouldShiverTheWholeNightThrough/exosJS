let input = "";

let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".buttons div");

for (let i = 2; i < buttons.length - 1; i++) {
  buttons[i].addEventListener("click", () => {
    input += buttons[i].textContent;
    result.textContent = input;
  });
}

buttons[0].addEventListener("click", () => {
  input = input.slice(0, input.length - 1);
  result.textContent = input;
});

buttons[1].addEventListener("click", () => {
  input = "";
  result.textContent = input;
});

buttons[buttons.length - 1].addEventListener("click", () => {
  let resultat = parseInput();
  input = resultat;
  result.textContent = input;
});

function parseInput() {
  try {
    let x = "";
    let operateur = "";
    let y = "";
    let i = 0;
    while (
      input[i] != "+" &&
      input[i] != "-" &&
      input[i] != "x" &&
      input[i] != "/" &&
      input[i] != "%"
    ) {
      x += input[i];
      i++;
    }

    operateur = input[i];
    i++;

    while (i < input.length + 1) {
      if (
        input[i] != "+" &&
        input[i] != "-" &&
        input[i] != "x" &&
        input[i] != "/" &&
        input[i] != "%" &&
        i < input.length
      ) {
        y += input[i];
      } else {
        let a = parseFloat(x);
        let b = parseFloat(y);

        switch (operateur) {
          case "+":
            x = "" + (a + b);
            break;
          case "-":
            x = "" + (a - b);
            break;
          case "x":
            x = "" + a * b;
            break;
          case "/":
            x = "" + a / b;
            break;
          case "%":
            x = "" + (a % b);
            break;
        }

        y = "";
        operateur = input[i];
      }
      i++;
    }
    return x;
  } catch (error) {
    return "erreur";
  }
}
