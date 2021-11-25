import Enderecos from "./Enderecos.js";
import { REG_Enderecos, setLocalStorage } from "./index.js";

const form = document.getElementById('cadastros-cli')
form.addEventListener('submit', e => {
  e.preventDefault();
  const novoEndereco = new Enderecos
  novoEndereco.logradouro = form.elements['logradouro'].value;
  novoEndereco.numero = form.elements['numero'].value;
  novoEndereco.cidade = form.elements['cidade'].value;
  novoEndereco.uf = form.elements['uf'].value;
  novoEndereco.pais = form.elements['pais'].value;
  novoEndereco.cep = form.elements['cep'].value;
  REG_Enderecos.push(novoEndereco);
  setLocalStorage()
})