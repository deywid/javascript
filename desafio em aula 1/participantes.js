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
  document.getElementById('idade-media').innerHTML = idadeMedia

  if (incluiSatisfeito) {
    numSatisfeitos++
  }
  document.getElementById('num-satisfeitos').innerHTML = numSatisfeitos
}

/*
Construir tela com 3 sections lado a lado com as seguintes legendas:
Número de participantes
Idade média dos participantes
Número de satisfeitos

Abaixo deve existir um botão centralizado com o texto “participar”
Ao clicar deve ser exibido em sequência as seguintes mensagens
“Digite seu nome”
“Digite um número de 1 a 10 para expressar sua satisfação
“Digite sua idade”
“Podemos incluir você na lista de satisfeitos?”
“Salvo com sucesso”

As sections devem ser atualizadas após cada resposta  
*/