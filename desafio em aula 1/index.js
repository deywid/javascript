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


/* Criar uma sequência de diálogos com as seguintes perguntas:
Nome, idade, esporte favorito, dia da semana predileto, nome de alguém importante, nome de alguém que você admira
No final deve ser usado as respostas para formular uma história que deverá ser alertada ou escrita em tela. como por exemplo:
“Hoje, {diaDaSemana}, é um dia histórico. Todos os fãs de {esportePredileto} estão maravilhados com a proeza realizada
pelo(a) atleta {nome}. {alguemImportante} não conteve as lágrimas ao comentar sobre em uma entrevista e
até o(a) {alguemAdmiravel} twittou “é muito bom ver alguém com {idade} demonstrando tanta habilidade” ”.
*/
