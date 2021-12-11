import cadastro from "./modules/cadastro.js";
import renderProduto from "./modules/render.js";

const container = document.querySelector('.container');
const arrProdutos = []

cadastro(arrProdutos) /* cadastro estatico para efeito de exemplo */
cadastro(arrProdutos)
cadastro(arrProdutos)

arrProdutos.forEach(produto => {
  renderProduto(produto, container)
})