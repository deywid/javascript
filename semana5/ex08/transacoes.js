import Conta from '../ex06/conta.js'

class Transacoes extends Conta {
  #valorTransacao

  constructor(numConta, valorTransacao) {
    super(numConta)
    this.#valorTransacao = valorTransacao
  }

  get valorTransacao() {
    return this.#valorTransacao
  }

  toJSON() {
    return {
      valorTransacao: this.valorTransacao,
      conta: this.numConta
    }
  }

  transferencia(conta) {
    return conta.saldo = conta.saldo - this.valorTransacao
  }

  deposito(conta) {
    return conta.saldo = conta.saldo + this.valorTransacao
  }
}

const conta = new Conta("003999-2", 500);
const transacao1 = new Transacoes(conta, 200);
const transacao2 = new Transacoes(conta, 350);
console.log("transf", transf.toJSON())
transacao1.transferencia(conta)
console.log("deposit", deposito.toJSON())
transacao2.deposito(conta)

console.log("extrato: ", conta.toJSON())