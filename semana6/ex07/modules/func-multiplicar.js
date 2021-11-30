import { numero1, numero2, resultado } from "../index.js";

const multiplicar = () => {
  resultado.innerHTML =
    `Multiplicou: ${(parseFloat(numero1.value) * parseFloat(numero2.value)).toFixed(2)}`
};
export default multiplicar;