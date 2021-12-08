import Enderecos from "../ex04/Enderecos.js"
import Clientes from "../ex05/clientes.js"

export default class Conta extends Clientes {
#numConta
#saldo

  constructor(numConta, saldo, cliente){
    super(cliente)
    this.#numConta = numConta;
    this.#saldo = saldo;
  }

  get numConta() {
    return this.#numConta;
  }
  get saldo() {
    return this.#saldo;
  }

  toJSON() {
    return {
      contaNumero : this.numConta,
      saldo : this.saldo,
      cliente : this.nome
    }
  }
}

const endereco1 = new Enderecos("rua bonita", "123", "Desterro", "SC", "Brasil", "88000000");
const endereco2 = new Enderecos("rua mais bonita", "321", "Desterro", "SC", "Brasil", "88000000");
const arrEnderecos = [endereco1, endereco2]
const cliente = new Clientes("Deywid", "9999", "9999,", "Fornecedor", arrEnderecos)
const conta = new Conta("123456", "20500999.90", cliente)
console.log(conta.toJSON())