class Produtos {
  #nome
  #imagem
  #valor
  #parcelas

  constructor(nome, imagem, valor, parcelas) {
    this.#nome = nome
    this.#imagem = imagem
    this.#valor = valor
    this.#parcelas = parcelas
  }

  get nome() {
    return this.#nome
  }
  get imagem() {
    return this.#imagem
  }
  get valor() {
    return this.#valor
  }
  get parcelas() {
    return this.#parcelas
  }

  toJSON() {
    return {
      nome: this.nome,
      imagem: this.imagem,
      valor: this.valor,
      parcelas: this.parcelas,
    }
  }
}

const produto1 = new Produtos("produto legal", "img.png", "199.99", "6");
const produto2 = new Produtos("produto manero", "img.png", "64.95", "4");
const produto3 = new Produtos("produto da hora", "img.png", "699.80", "12");

const arrProdutos = [produto1, produto2, produto3]

const container = document.querySelector('.container')

arrProdutos.forEach(produto => {
  renderProduto(produto)
})

function renderProduto(produto) {
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