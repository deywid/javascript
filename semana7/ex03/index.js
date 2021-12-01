const lista = [
  { id: 1, cliente: 'João Celso de Souza', idade: 33 },
  { id: 2, cliente: 'Claudia Cipriano', idade: 28 },
  { id: 3, cliente: 'Edilene Souza Silva', idade: 41 },
  { id: 4, cliente: 'Maurício Gomes', idade: 17 },
  { id: 5, cliente: 'Claudia Cipriano', idade: 22 }
];

const novaLista = lista.map(item => {
  return { ...item, ativo: true }
})
console.log(novaLista);

export default novaLista;