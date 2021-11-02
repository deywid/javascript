var textos = ["animal", "carro", "humano", "prédio", "cadeira", "objeto"];
console.log('ordem original: ' + textos)

window.onload = () => {
  textos.sort(comparaTamanho)
  for (var i = 0; i < textos.length; i++) {
    document.getElementsByTagName('body')[0].innerHTML += `<section class="div-content"><h2>${textos[i]}</h2></section>`
  }
}

function comparaTamanho(a, b) {
  return b.length - a.length;
}