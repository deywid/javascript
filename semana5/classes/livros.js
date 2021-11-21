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

const livro1 = new Livros('Pai Rico, Pai Pobre', 'Robert Kiyosaki', 1997);
const livro2 = new Livros('Cem Anos de Solidão', 'Gabriel García Márquez', 1967);
const livro3 = new Livros('Admirável Mundo Novo', 'Aldous Huxley', 1932);

const livros = [livro1, livro2, livro3];

console.log(livro1.toJSON()); //'livros1' é um obj da classe Livros e pode chamar o metodo toJSON()
//console.log(livros.toJSON()); Error --> 'livros' não é um obj da classe Livros, não pode acessar o metodo toJSON()
console.log(livros.map(arr => arr.toJSON())); //os elementos(arr) dentro de 'livros' são objs da classe Livros
console.log(Livros.ordenarLivros(livros)); //chamada ao metodo estatico

console.log(livro2.emprestaLivro());
console.log(livro2.emprestaLivro());