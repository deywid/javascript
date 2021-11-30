import { numero1, numero2, resultado } from "../index.js";

const subtrair = () => {
  resultado.innerHTML =
    `Subtraiu: ${parseFloat(numero1.value) - parseFloat(numero2.value)}`
};
export default subtrair;