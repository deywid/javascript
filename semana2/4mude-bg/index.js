
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
  modificaBG()
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