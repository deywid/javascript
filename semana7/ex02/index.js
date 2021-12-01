const lista = [3, 5, 7, 9, 11, 13];
const novaLista = lista.map((item, i) => {
  return i === 0 ? item : item * lista[--i]
})
console.log(novaLista)