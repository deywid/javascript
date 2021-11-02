var nome = window.prompt("digite seu nome:")
var idade = window.prompt("digite sua idade:")
var esporteFav = window.prompt("digite seu esporte favorito:")
var diaSemanaFav = window.prompt("digite o seu dia da semana favorito:")
var alguemImportante = window.prompt("digite o nome de alguém importante:")
var alguemAdmiravel = window.prompt("digite o nome de alguém que admira:")

var noticia = `<h1>Breaking News</h1><p>Hoje, ${diaSemanaFav}, é um dia histórico! Todos os fãs de ${esporteFav} estão maravilhados com a proeza realizada 
                pelo(a) atleta ${nome}. ${alguemImportante} não conteve as lágrimas ao comentar sobre em uma entrevista e 
                até o(a) ${alguemAdmiravel} twittou “é muito bom ver alguém de ${idade} demonstrando tanta habilidade.</p>`

document.write(noticia)

