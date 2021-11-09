let cadastros = []
window.addEventListener('load', () => {
  if (localStorage.getItem('cadastrados')) {
    cadastros = JSON.parse(localStorage.getItem('cadastrados'))
    for (let i = 0; i < cadastros.length; i++) {
      criarTabLinhas(cadastros[i])
    }
  }
})

function setLocalStorage() {
  localStorage.setItem('cadastrados', JSON.stringify(cadastros));
}

function salvar() {
  const cadastro = new Object
  cadastro.nome = document.getElementById('nome').value
  cadastro.sobrenome = document.getElementById('sobrenome').value
  cadastro.email = document.getElementById('email').value
  cadastro.telefone = document.getElementById('tel').value
  cadastro.enderecos = [];
  [...document.querySelectorAll(".enderecos")].forEach(node => {
    cadastro.enderecos.push({ 'endereco': node.value, 'id': node.getAttribute('id') })
  })
  cadastros.push(cadastro)
  setLocalStorage()
  criarTabLinhas(cadastro)
}

function criarTabLinhas(cadastros) {
  const tab_col_nome = document.createElement('td')
  tab_col_nome.innerHTML = cadastros.nome
  const tab_col_sobrenome = document.createElement('td')
  tab_col_sobrenome.innerHTML = cadastros.sobrenome
  const tab_col_email = document.createElement('td')
  tab_col_email.innerHTML = cadastros.email
  const tab_col_fone = document.createElement('td')
  tab_col_fone.innerHTML = cadastros.telefone
  const tab_col_endereco = document.createElement('td')
  for (let i = 0; i < cadastros.enderecos.length; i++) {
    tab_col_endereco.innerHTML += cadastros.enderecos[i].endereco + ";</br>"
  }
  const tabLinha = document.createElement('tr')
  tabLinha.appendChild(tab_col_nome)
  tabLinha.appendChild(tab_col_sobrenome)
  tabLinha.appendChild(tab_col_email)
  tabLinha.appendChild(tab_col_fone)
  tabLinha.appendChild(tab_col_endereco)
  const tab = document.getElementById('t-body')
  tab.appendChild(tabLinha)
}

function addEndereco() {
  const HTMLEndereco = `<div>
                          <label for="endereco">Endereço</label>
                          <input type="text" name="endereco" id="endereco" class="enderecos">
                       </div>`;
  document.querySelector('.form-content').insertAdjacentHTML('beforeend', HTMLEndereco);
  renomearEnderecosIDs()
}

function renomearEnderecosIDs() {
  let i = 0;
  [...document.querySelectorAll(".enderecos")].forEach(node => {
    if (i > 0)
      node.setAttribute('id', `endereco${i}`);
    i++
  });
}