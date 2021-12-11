const  renderProduto = (produto, container) => {
  const componente = document.createElement('div')
  componente.className = "produto"

  const img = document.createElement('img')
  img.src = produto.imagem

  const titulo = document.createElement('h3')
  titulo.textContent = produto.nome

  const label = document.createElement('label')
  label.setAttribute('for', 'parcelas')
  label.textContent = "Parcelas "

  const select = document.createElement('select')
  select.id = "parcelas"

  for (let i = 0; i < produto.parcelas; i++) {
    const option = document.createElement('option')
    option.setAttribute('value', `${i + 1}`)
    option.textContent = i + 1
    select.appendChild(option)
  }

  componente.appendChild(img)
  componente.appendChild(titulo)
  label.appendChild(select)
  componente.appendChild(label)
  container.appendChild(componente)
}

export default renderProduto