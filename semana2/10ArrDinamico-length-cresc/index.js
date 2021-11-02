var textos = [];

do {
  var entrada = window.prompt(`digite uma palavra qualquer ou digite "parar" para sair`)
  if (entrada !== "parar") {
    textos.push(entrada)
  } else if (entrada == "parar") {
    window.alert("lista salva!")
  }
} while (entrada !== "parar")

console.log('ordem original: ' + textos)

window.onload = () => {
  textos.sort(comparaTamanho)
  for (var i = 0; i < textos.length; i++) {
    document.getElementsByTagName('body')[0].innerHTML += `<section class="div-content"><h2>${textos[i]}</h2></section>`
  }
}

function comparaTamanho(a, b) {
  return a.length - b.length;
}