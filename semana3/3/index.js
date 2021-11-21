const num = []
let ultimoOperador = ""
let resultado = ""

function validaEntrada(operador) {
  if (operador === '') {
    return
  } else {
    ultimoOperador = operador
  }
  var ehNumero = parseFloat(document.getElementById('numero').value)
  if (isNaN(ehNumero)) {
    return
  } else if (num.length < 1) {
    num.push(ehNumero)
  } else {
    num.push(ehNumero)
    opEscolha(operador)
  }
}

function opEscolha(operador) {
  if (operador === '+') {
    resultado = somar(num[0], num[1])
  } else if (operador === '-') {
    resultado = subtrair(num[0], num[1])
  } else if (operador === '*') {
    resultado = multiplicar(num[0], num[1])
  } else if (operador === '/') {
    resultado = dividir(num[0], num[1])
  } else {
    imprimirResultado("unknown error")
    return
  }
  imprimirResultado(resultado, num[0], num[1], operador)
}

function ehIgual() {
  return validaEntrada(ultimoOperador)
}

function imprimirResultado(resultado, a, b, operador) {
  document.getElementById('operacao').innerHTML = `${a} ${operador} ${b} =`
  document.getElementById('resultado').innerHTML = `${resultado}`
  num[0] = resultado
  num.pop()
}

/* ---> Operações <--- */

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}