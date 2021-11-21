document.querySelector('#btn-calcular').addEventListener('click', function () {
  const peso = parseFloat(document.getElementById('peso').value)
  const altura = parseFloat(document.getElementById('altura').value)
  if (validaEntrada(peso, altura)) {
    calcularIMC(peso, altura)
  } else {
    window.alert('Você deve inserir dados válidos!')
  }
})

function calcularIMC(peso, altura) {
  const resultado = peso / (altura ** 2)
  return resultadoIMC(resultado.toFixed(2))
}

function resultadoIMC(resultado) {
  if (resultado < 18.5) {
    document.querySelector('.resultado').innerHTML = `Seu IMC é de ${resultado}, considerado como MAGREZA`
  } else if (resultado >= 18.5 && resultado < 25) {
    document.querySelector('.resultado').innerHTML = `Seu IMC é de ${resultado}, considerado como NORMAL`
  } else if (resultado >= 25 && resultado < 30) {
    document.querySelector('.resultado').innerHTML = `Seu IMC é de ${resultado}, considerado como SOBREPESO	I`
  } else if (resultado >= 30 && resultado < 40) {
    document.querySelector('.resultado').innerHTML = `Seu IMC é de ${resultado}, considerado como OBESIDADE	II`
  } else if (resultado >= 40) {
    document.querySelector('.resultado').innerHTML = `Seu IMC é de ${resultado}, considerado como OBESIDADE GRAVE	III`
  }
}

function validaEntrada(peso, altura) {
  if (peso >= 1 && altura >= 1) {
    return true
  } else {
    return false
  }
}