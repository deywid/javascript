import { REG_Enderecos } from "./index.js";
export default consultarEnderecos;

function consultarEnderecos() {
   REG_Enderecos.forEach(endereco => {
    const temp = endereco.toJSON();
    const tr = document.createElement('tr')
    Object.keys(temp).forEach(item => {
      const td = document.createElement('td')
      td.innerHTML = temp[item];
      tr.appendChild(td)
    });
    document.getElementById('t-body').appendChild(tr);
  })
}