document.getElementById('btn-validar').addEventListener('click', () => {
  var num = parseFloat(document.getElementById('numero').value)
  if (ehNatural(num)) {
    if (ehPrimo(num)) {
      document.querySelector('.resultado').innerHTML = `O numero ${num} é PRIMO`
    } else {
      document.querySelector('.resultado').innerHTML = `O numero ${num} não é PRIMO`
    }
  } else {
    document.querySelector('.resultado').innerHTML = `Você digitou: ${num}.</br> Por favor, escolha um numero natural e tente novamente!`
  }
})

function ehPrimo(num) {
  if (num === 0 || num === 1) {
    return false
  } else {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return true;
  }
}

function ehNatural(num) {
  if (num >= 0 && Number.isInteger(num)) {
    return true
  }
  return false
}