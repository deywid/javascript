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
}

export default Produtos