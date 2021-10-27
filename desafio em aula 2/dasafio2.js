
var inferior, 
    superior, 
    numero100

window.addEventListener("load", function() {
  recarregar()
})

function recarregar() {
  inferior = 0
  superior = 0
  numero100 = 0
  distribuiNumeros()
  modificaBG()
}

function distribuiNumeros() {
  for (var i = 0; i < 1000; i++) {
    let aleatorio = Math.floor(Math.random() * 1000)
    if (aleatorio > 500) {
      superior++
    } else if (aleatorio === 100) {
      numero100++
    } else {
      inferior++
    }
  }
}

function modificaBG() {
  if (numero100 === 1) {
    document.body.style.backgroundColor = "Orange"
    document.body.style.backgroundImage = "none"
  } else if (numero100 > 1) {
    document.body.style.backgroundColor = "Black"
    document.body.style.backgroundImage = "none"
  } else if (superior > inferior) {
    document.body.style.backgroundImage = "url('https://picsum.photos/200/300')"
    document.body.style.backgroundColor = "transparent"
  } else {
    document.body.style.backgroundImage = "url('https://via.placeholder.com/500')"
    document.body.style.backgroundColor = "transparent"
  }
}

/*
Crie um programa que cria 1000 numeros aleátorios entre 1 e 1000,
sempre que a quantidade de números de 501 a 1000 for maior que a quantidade de inferiores,
o background da página deve ser esta url: https://picsum.photos/200/300
quando for inferior o background deve ser: https://via.placeholder.com/500
porem quando o numero 100 aparecer apenas uma vez o background deve ser "orange"
e o 100 aparecer mais de uma vez  o background deve ser "black"

por fim deve haver um botão que recarrega essa lógica sem recarregar a página
*/