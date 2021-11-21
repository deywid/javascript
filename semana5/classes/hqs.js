class Livros {
  #titulo
  #autor
  #lancamento
  #emprestado

  constructor(titulo, autor, lancamento) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#lancamento = lancamento;
    this.#emprestado = false;
  }

  //metedos getters irão permitir acessar as propriedades privadas da classe
  get titulo() {
    return this.#titulo
  }

  get autor() {
    return this.#autor
  }

  get lancamento() {
    return this.#lancamento
  }

  get emprestado() {
    return this.#emprestado
  }

  emprestaLivro() {
    if (this.#emprestado == true) {
      return `O livro: ${this.#titulo} já foi emprestado!`;
    } else {
      this.#emprestado = true;
      return `Você tomou por emprestimo o livro: ${this.#titulo}`;
    }
  }

  static ordenarLivros(livros) {
    const livrosOrdenados = livros.sort((a, b) => {
      return a.lancamento - b.lancamento
    });
    return livrosOrdenados.map(arr => arr.toJSON());
  }

  toJSON() {
    return {
      titulo: this.#titulo,
      autor: this.#autor,
      lancamento: this.#lancamento,
      emprestado: this.#emprestado
    }
  }
}

/* const livro1 = new Livros('Pai Rico, Pai Pobre', 'Robert Kiyosaki', 1997);
const livro2 = new Livros('Cem Anos de Solidão', 'Gabriel García Márquez', 1967);
const livro3 = new Livros('Admirável Mundo Novo', 'Aldous Huxley', 1932);

const livros = [livro1, livro2, livro3]; */

class HQs extends Livros {
  #ilustrador

  constructor(titulo, autor, lancamento, ilustrador) {
    super(titulo, autor, lancamento)
    this.#ilustrador = ilustrador
  }

  get ilustrador() {
    return this.#ilustrador
  }

  toJSON() {
    return {
      titulo: this.titulo,
      autor: this.autor,
      lancamento: this.lancamento,
      emprestado: this.emprestado, //não incluimos # pois será chamado o metodo get() da classe mãe <Livros>
      ilustrador: this.#ilustrador //quando incluimos # estamos referenciando a propriedade da classe sem passar pelo metodo get()
    }
  }
}

const hq1 = new HQs('V de Vingança', 'Alan Moore', 1989, 'David Lloyd')
const hq2 = new HQs('Watchmen', 'Alan Moore', 1987, 'Dave Gibbons')

const hqs = [hq1, hq2]

console.log(hq1.emprestaLivro());

console.log(hqs.map(arr => arr.toJSON()));
console.log(Livros.ordenarLivros(hqs));