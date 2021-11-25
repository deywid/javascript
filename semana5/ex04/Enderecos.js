export default class Enderecos {
  #logradouro
  #numero
  #cidade
  #uf
  #pais
  #cep

  constructor(logradouro, numero, cidade, uf, pais, cep) {
    this.#logradouro = logradouro;
    this.#numero = numero;
    this.#cidade = cidade;
    this.#uf = uf;
    this.#pais = pais;
    this.#cep = cep;
  }

  /* getters */
  get logradouro() {
    return this.#logradouro;
  }

  get numero() {
    return this.#numero;
  }

  get cidade() {
    return this.#cidade;
  }

  get uf() {
    return this.#uf;
  }

  get pais() {
    return this.#pais;
  }

  get cep() {
    return this.#cep;
  }

  /* setters... */
  set logradouro(newLogradouro) {
    this.#logradouro = newLogradouro;
  }

  set numero(newNumero) {
    this.#numero = newNumero;
  }

  set cidade(newCidade) {
    this.#cidade = newCidade;
  }

  set uf(newUF) {
    this.#uf = newUF;
  }

  set pais(newPais) {
    this.#pais = newPais;
  }

  set cep(newCep) {
    this.#cep = newCep;
  }

  toJSON() {
    return {
      logradouro: this.logradouro,
      numero: this.numero,
      cidade: this.cidade,
      uf: this.uf,
      pais: this.pais,
      cep: this.cep
    }
  }
}