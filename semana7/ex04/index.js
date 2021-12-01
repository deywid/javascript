import novaLista from "../ex03/index.js";

const clientesMaior25 = novaLista.filter(({ idade }) => {
  return idade > 25;
});
console.log(clientesMaior25)