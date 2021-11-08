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
  const array = [...document.querySelectorAll(".enderecos")];
  array.forEach(node => {
    if (i > 0)
      node.setAttribute('id', `endereco${i}`);
    i++
  });
}