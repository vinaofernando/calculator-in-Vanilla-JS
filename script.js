function somaMatriz(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const numeroAnterior = array[i - 1];
    const numeroPosterior = array[i + 1];

    if (item === "+") {
      return Number(numeroAnterior) + Number(numeroPosterior);
    } else if (item === "*") {
      return Number(numeroAnterior) * Number(numeroPosterior);
    } else if (item === "/") {
      return Number(numeroAnterior) / Number(numeroPosterior);
    } else if (item === "-") {
      return Number(numeroAnterior) - Number(numeroPosterior);
    }
  }
}

const buttons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
].forEach((buttonName) => {
  const button = document.getElementById(buttonName);
  button.addEventListener("click", buttonEventListner(buttonName));
});

let resultado = "";
let display = document.getElementById("display");
function buttonEventListner(buttonName) {
  return function () {
    resultado = resultado + buttonName;
    display.innerHTML = resultado;
  };
}
const buttonCancelar = document.getElementById("c");
const buttonIgual = document.getElementById("=");
buttonIgual.addEventListener("click", () => {
  let matriz = resultado.split(/(\+|-|\*|\/)/);
  resultado = somaMatriz(matriz);
  display.innerHTML = somaMatriz(matriz);
});
buttonCancelar.addEventListener("click", () => {
  resultado = "";
  display.innerHTML = "";
});
