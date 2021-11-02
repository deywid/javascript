var corDeFundo = ["#000000", "#1A1A1A", "#1A3D4C"];
var corDosElementosSobrepostos = ["#E6E6E6", "#CCCCCC", "#0D2526"];
var corDoTexto = ["white", "black"];

const botao = document.getElementById("btn-mudar-cor")
botao.addEventListener('click', function () {
  document.body.style.backgroundColor = corDeFundo[Math.floor(Math.random() * 3)]
  document.getElementsByClassName("container")[0].style.backgroundColor = corDosElementosSobrepostos[Math.floor(Math.random() * 3)]
  document.getElementsByTagName('p')[0].style.color = corDoTexto[Math.floor(Math.random() * 2)]
})