class Clientes {
  #nome
  #cpf
  #telefone
  #endereco
  #tipo

  constructor(nome, cpf, telefone, tipo, [...endereco]) {
    this.#nome = nome;
    this.#cpf = Clientes.validaCPF(cpf) ? cpf : null;
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
    if (Clientes.validaCPF(newCPF))
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

  //refatorar
  //https://www.devmedia.com.br/validar-cpf-com-javascript/23916
  static validaCPF(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }
}

const cpf = "00000000000"
const cliente = new Clientes("Deywid", cpf, "9999,", "Fornecedor", ['endereco'])
//cliente.cpf = '12345678909'
console.log(cliente.toJSON())