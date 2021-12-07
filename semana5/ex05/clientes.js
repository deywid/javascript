import Enderecos from "../ex04/Enderecos.js"

class Clientes {
  #nome
  #cpf
  #telefone
  #endereco
  #tipo

  constructor(nome, cpf, telefone, tipo, [...endereco]) {
    this.#nome = nome;
    this.#cpf = cpf;
    this.#telefone = telefone;
    this.#endereco = endereco
    this.#tipo = tipo
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get telefone() {
    return this.#telefone;
  }

  get endereco() {
    return this.#endereco;
  }

  get tipo() {
    return this.#tipo;
  }

  set nome(newNome) {
    this.#nome = newNome;
  }

  set cpf(newCPF) {
    this.#cpf = newCPF;
  }

  set telefone(newTelefone) {
    this.#telefone = newTelefone;
  }

  toJSON() {
    return {
      nome: this.nome,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      tipo: this.tipo
    }
  }
}
const endereco1 = new Enderecos("rua bonita", "123", "Desterro", "SC", "Brasil", "88000000");
const endereco2 = new Enderecos("rua mais bonita", "321", "Desterro", "SC", "Brasil", "88000000");
const arrEnderecos = [endereco1, endereco2]
const cliente = new Clientes("Deywid", "9999", "9999,", "Fornecedor", arrEnderecos)
console.log(cliente.toJSON())