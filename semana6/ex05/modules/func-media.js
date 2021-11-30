import * as key from "../index.js";

export const media = () => {
  key.resultado.innerHTML = ` Média: 
  ${((parseFloat(key.nota1.value)
      + parseFloat(key.nota2.value)
      + parseFloat(key.nota3.value)) / 3).toFixed(1)}`;
}