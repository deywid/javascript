class Conta {
  #numConta
  #saldo

  constructor(numConta, saldo) {
    this.#numConta = numConta;
    this.#saldo = saldo;
  }

  get numConta() {
    return this.#numConta;
  }
  get saldo() {
    return this.#saldo;
  }
  set saldo(newSaldo) {
    this.#saldo = newSaldo
  }

  toJSON() {
    return {
      contaNumero: this.numConta,
      saldo: this.saldo
    }
  }
}

class Transacoes extends Conta {
  #valorTransacao
  #idTransacao
  #data

  constructor(conta, valorTransacao) {
    super(conta.numConta)
    this.#valorTransacao = valorTransacao
    this.#idTransacao = Math.random().toString(36).substr(2, 9); //source: https://gist.github.com/gordonbrander/2230317
    this.#data = `dia ${new Date().getDate()} às ${new Date().getHours()}:${('0' + new Date().getMinutes()).slice(-2)}`
  }

  get valorTransacao() {
    return this.#valorTransacao
  }
  get idTransacao() {
    return this.#idTransacao
  }
  get data() {
    return this.#data
  }

  toJSON() {
    return {
      conta: this.numConta,
      valorTransacao: this.valorTransacao,
      idTransacao: this.idTransacao,
      data: this.data
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
console.log("transf", transacao1.toJSON())
transacao1.transferencia(conta)
console.log("deposit", transacao2.toJSON())
transacao2.deposito(conta)

console.log("extrato: ", conta.toJSON())