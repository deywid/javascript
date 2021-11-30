import { numero1, numero2, resultado } from "../index.js";

const dividir = () => {
  resultado.innerHTML =
    `Dividiu: ${(parseFloat(numero1.value) / parseFloat(numero2.value)).toFixed(2)}`
};
export default dividir;