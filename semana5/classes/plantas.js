class Plantas {
  #hidratacao //definição de uma propriedade privada

  constructor(nome, hidratacao) {
    this.nome = nome;
    this.#hidratacao = hidratacao;
    this.tahViva = true;
  }

  regar(agua) {
    this.#hidratacao += agua;
    if (this.#hidratacao > 100) {
      return this.tahViva = false;
    }
    return this.tahViva
  }

  get hidratacao() {
    return this.#hidratacao
  }

  toJSON() {
    return {
      nome: this.nome,
      hidratacao: this.#hidratacao,
      tahVivah: this.tahViva
    }
  }
}

const girassol = new Plantas('Girassol', 50);

girassol.regar(20); //hidratacao = 70
girassol.regar(35); //hidratacao = 105
girassol.hidratacao = 80; //não atribui o valor devido ao encapsulamento
console.log(girassol.hidratacao); //chama o metodo get()

console.log(girassol) //não mostra a propriedade <hidratacao> por estar privada #;
console.log(girassol.toJSON()); //o metodo tem acesso a propriedade privada podendo imprimi-la