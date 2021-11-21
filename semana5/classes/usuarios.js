class Usuarios {
  #nome
  #email
  #password
  #admin = false;

  constructor(nome, email, password) {
    this.#nome = nome;
    this.#email = email;
    this.#password = password
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get password() {
    return this.#password
  }

  get admin() {
    return this.#admin
  }

  isAdmin() {
    return this.admin;
  }

  toJSON() {
    return {
      nome: this.nome,
      email: this.email,
      password: this.password,
      admin: this.admin
    }
  }
}

class Admin extends Usuarios {
  #admin = true;

  get admin() {
    return this.#admin
  }
}

const usuario1 = new Usuarios('Zé', 'zeca.pagodinho@email.com', '*******')
const usuario2 = new Usuarios('Ana', 'florzinha1020@email.com', '*******')
const usuario3 = new Usuarios('Maria', 'maria.desaparecida@email.com', '*******')

const usuarioADM = new Admin('Juninho', 'juninho14@email.com', '*******')

/*console.log(usuario1.isAdmin());
console.log(usuarioADM.isAdmin()); */

const arrUsuarios = [usuario1, usuario2, usuario3, usuarioADM]

console.log(arrUsuarios.filter(arr => arr.isAdmin() ? console.log(arr.toJSON()) : false));
console.log(arrUsuarios.map(arr => arr.toJSON()))