document.getElementById('btn-validar').addEventListener('click', () => {
  const num = parseFloat(document.getElementById('numero').value)
  if (ehInteiro(num)) {
    if (ehPar(num)) {
      document.querySelector('.resultado').innerHTML = `O numero ${num} é PAR`
    } else {
      document.querySelector('.resultado').innerHTML = `O numero ${num} é ÍMPAR`
    }
  } else {
    document.querySelector('.resultado').innerHTML = `Você digitou: ${num}.</br> Por favor, escolha um numero inteiro e tente novamente!`
  }
})

function ehPar(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function ehInteiro(num) {
  if (Number.isInteger(num)) {
    return true
  }
  return false
}