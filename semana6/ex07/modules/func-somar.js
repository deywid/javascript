import { numero1, numero2, resultado } from "../index.js";

const somar = () => {
  resultado.innerHTML =
    `Somou: ${parseFloat(numero1.value) + parseFloat(numero2.value)}`
};
export default somar;