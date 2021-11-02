var numParticipantes = 0,
    idadeTotal = 0,
    idadeMedia, 
    numSatisfeitos = 0

function participar() {
  window.prompt("digite seu nome")
  var idade = window.prompt("Digite sua idade")
  idadeTotal += parseInt(idade) 
  window.prompt("Digite um número de 1 a 10 para expressar sua satisfação")
  var incluiSatisfeito = window.confirm("Podemos incluir você na lista de satisfeitos?")
  window.alert("Salvo com sucesso")

  numParticipantes += 1
  document.getElementById('num-participantes').innerHTML = numParticipantes

  idadeMedia = idadeTotal / numParticipantes
  document.getElementById('idade-media').innerHTML = idadeMedia.toFixed(2)

  if (incluiSatisfeito) {
    numSatisfeitos++
  }
  document.getElementById('num-satisfeitos').innerHTML = numSatisfeitos
}