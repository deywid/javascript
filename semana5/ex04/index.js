let REG_Enderecos = [];

window.onload = () => {
  getLocalStorage();
  consultarEnderecos();
}

function getLocalStorage() {
  if (localStorage.getItem('REG_Enderecos')) {
    for (let i = 0; i < JSON.parse(localStorage.getItem('REG_Enderecos')).length; i++) {
      const temp = new Enderecos
      Object.assign(temp, JSON.parse(localStorage.getItem('REG_Enderecos'))[i]);
      REG_Enderecos.push(temp)
    }
  }
}

function setLocalStorage() {
  localStorage.setItem('REG_Enderecos', JSON.stringify(REG_Enderecos));
}

import Enderecos from "./Enderecos.js";
import consultarEnderecos from "./consultas.js"
export { REG_Enderecos, getLocalStorage, setLocalStorage };
