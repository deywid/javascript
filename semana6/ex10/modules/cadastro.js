import Produtos from "./produtos.js";

function cadastro(arrProdutos) {
  return arrProdutos.push(new Produtos("produto legal", "img.png", "199.99", "6"))
}

export default cadastro