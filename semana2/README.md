## Lista de exercícios - 2ª semana - JavaScript

### [Ex 1 - Gerador de história](https://deywid.github.io/javascript/semana2/1historia/) 
#### Criar uma sequência de diálogos com as seguintes perguntas:
> - Nome, idade, esporte favorito, dia da semana predileto, nome de alguém importante, nome de alguém que você admira
#### No final deve ser usado as respostas para formular uma história que deverá ser alertada ou escrita em tela. como por exemplo:
> - “Hoje, {diaDaSemana}, é um dia histórico. Todos os fãs de {esportePredileto} estão maravilhados com a proeza realizada pelo(a) atleta {nome}. {alguemImportante} não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) {alguemAdmiravel} twittou “é muito bom ver alguém com {idade} demonstrando tanta habilidade” ”. 
#

### [Ex 2 - Atualiza secções](https://deywid.github.io/javascript/semana2/2participantes/participantes.html)
#### Construir tela com 3 sections lado a lado com as seguintes legendas:
> - Número de participantes
> - Idade média dos participantes
> - Número de satisfeitos
#### Abaixo deve existir um botão centralizado com o texto “participar”.
#### Ao clicar deve ser exibido em sequência as seguintes mensagens:
> - “Digite seu nome”
> - “Digite um número de 1 a 10 para expressar sua satisfação
> - “Digite sua idade”
> - “Podemos incluir você na lista de satisfeitos?”
> - “Salvo com sucesso”
#### As sections devem ser atualizadas após cada resposta.
#

### [Ex 3 - Modifica página aleatoriamente](https://deywid.github.io/javascript/semana2/3mude-cores/desafio.html)
#### Gerar um programa em java que atenda os seguintes requisitos:
> - possua 3 listas(arrays) de strings, sendo eles:
```
var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
var corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
var corDoTexto = ["white","black"];
```
#### Queremos um site simples cujo container principal fica centralizado e contenha apenas um artigo com o seguinte texto:
> "Lorem ipsum... 
#### Acima do artigo deverá haver um botão que dispare a ação de escolher qual cor cada elemento terá conforme os respectivos nomes das variáveis, ALEATORIAMENTE.
#

### [Ex 4 - Modifica página com regra aleatória](https://deywid.github.io/javascript/semana2/4mude-bg/)
#### Crie um programa que cria 1000 números aleatórios entre 1 e 1000;
> - sempre que a quantidade de números de 501 a 1000 for maior que a quantidade de inferiores, o background da página deve ser esta url: https://picsum.photos/200/300
> - quando for inferior o background deve ser: https://via.placeholder.com/500
> - porém quando o numero 100 aparecer apenas uma vez o background deve ser: "orange"
> - e quando o 100 aparecer mais de uma vez o background deve ser: "black"
#### Por fim deve haver um botão que recarrega essa lógica sem recarregar a página.
#

### [Ex 5 - Monta tela com recurso de API](https://deywid.github.io/javascript/semana2/5dog-cat/)
#### Crie uma página cujo ao abrir seja exibido um prompt para o usuário escolher um número de 1 a 10:
> - Quando um número for escolhido e devidamente validado, deverá ser montado 2 sections lado a lado para cada iteração do número escolhido
> - Em cada section lado a lado deve existir uma imagem de um cão e um gato respectivamente. Isso deve ser feito consultando aleatoriamente a API:
> https://dog.ceo/dog-api/ e https://api.thecatapi.com/v1/images/search 
#### As imagens devem ocupar 100% da section e aparecer por completo sem repetir
#

### [Ex 6 - Manipular Array para montar página](https://deywid.github.io/javascript/semana2/6map/)
#### Dado o end-point https://amapalanches.com/includes/v1/getTodas.php que retorna uma lista json, faça:
> - Crie um mapa;
> ([documentação](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript))
> - Com a lista, crie um marcador para cada conjunto de latitude e longitude.
#

### [Ex 7 - Ordenando o conteúdo de secções](https://deywid.github.io/javascript/semana2/7Arr-abc/)
#### Dado o array:
```
var textos = [“animal”,”carro,”humano”,”prédio”,”cadeira”,”objeto”];
```
> - crie uma página que sempre ao ser inicializada ordene os elementos do array por ordem alfabética;
> - com o resultado crie as secções em ordem.
#

### [Ex 8 - Ordenando o conteúdo de secções](https://deywid.github.io/javascript/semana2/8Arr-length-decresc/)
#### Dado o array:
```
var textos = [“animal”,”carro,”humano”,”prédio”,”cadeira”,”objeto”];
```
> - crie uma página que sempre ao ser inicializada ordene os elementos do array pela quantidade de caracteres, do maior para o menor;
> - com o resultado crie as secções em ordem.
#

### [Ex 9 - Construindo um array dinamicamente](https://deywid.github.io/javascript/semana2/9ArrDinamico-zyx/)
#### Em um laço de repetição,
> - peça para o usuário digitar uma palavra (prompt) enquanto ele não digitar a palavra “parar”;
> - cada nova palavra será acrescentada em um array;
#### quando o usuário escrever "parar",
> - deve ser mostrado pra ele, em sections, os elementos digitados em ordem alfabética decrescente.
#

### [Ex 10 - Construindo um array dinamicamente](https://deywid.github.io/javascript/semana2/10ArrDinamico-length-cresc/)
#### Em um laço de repetição,
> - peça para o usuário digitar uma palavra (prompt) enquanto ele não digitar a palavra “parar”;
> - cada nova palavra será acrescentada em um array;
#### quando o usuário escrever "parar",
> - deve ser mostrado pra ele, em sections, os elementos digitados ordenados pela quantidade de caracteres, do menor para o maior.
