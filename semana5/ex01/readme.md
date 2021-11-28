# Saiba mais javascript:

## var, let e const
Neste documento vamos conhecer um pouco mais sobre essas palavras chaves que utilizamos durante uma declaração de variável na programação javascript.

O que será que cada uma faz?
## class
Classes.  Peça fundamental para aplicação do conceito de programação orientada a objetos (POO). Já ouviu falar? Pois é! O javascript ouviu tanto que resolveu adotar em seu padrão... rs

Bora conhecer o que são classes, seus atributos e métodos e porque devemos utiliza-las na programação javascript?

#

### intro
Assim que iniciei meus estudos javascript, aprendi que, para declarar variáveis, independente de tipos, uma palavra reservada específica deveria preceder o nome da nova variável.
Essa palavra reservada era a **var**. 

E assim o fiz durante muito tempo.

Mesmo após o advento do ES6(ECMAScript2015), que implementou em seu padrão mais duas palavras reservadas para a declaração de variáveis, a let e const, a declaração com a var continua a ser utilizada, principalmente por quem está começando. 
Um dos motivos pode ser a questão de **escopo**, que pode confundir logo no ínicio, mas que é essencial ser compreendido para que se entenda as diferenças entre var, let e const.

> #### Escopo
>> Para uma melhor compreensão de escopo, do ponto de vista da programação, eu, particularmente, gosto de definir como _o espaço para definição de um propósito_.

Agora, sabendo que meu código possui esses 'espaços' e que neles eu vou querer definir apenas o que é relacionado ao seu propósito, vamos as diferenças...

> ### var
>> A var se estabelece no escopo global ou no escopo de função, e não se limita a um escopo de bloco.
>> Em outras palavras, quando declaramos uma var em um bloco, como em um ```for(){}```, essa variável irá procurar o escopo logo acima, podendo ser o de uma função ou o global, e ali se estabelecer.
>> Além disso, assim como ocorre com funções, a var possui uma característica interessante, a qual damos o nome de **hoisting**.
>>> #### Hoisting 
>>>> (içamento/elevação, em português) é o que nos permite 'executar o código antes de criar o código', ou seja, quando atribuimos valor a uma variável logo na primeira linha, mas só a declaramos na última, estamos nos valendo dessa característica.
>>>> Ademais, o que faz var se comportar diferente de let e const nesse sentido, é que ela é inicializada como ```undefined``` até que seu valor seja lido no código.
>> Parece útil, não é? Eu diria que para funções funciona muito bem, mas quando tratamos de variáveis, isso pode fugir do controle!
>> 
>> Vamos ver no exemplo:
>>>  ```
>>>  var num1 = 3;
>>>  console.log(num1 + " e " + num2); //o que será exbido em log?
>>>  var num2 = 4;
>>> ```
>> A resposta será "3 e undefined". O comportamento de hoisting coloca na memória a declaração da variável, permitindo acessa-la a qualquer momento. Ainda assim, sua inicialização obedecerá sua ordem de escrita no código. (```num2``` vale 4 agora!)
>> A princípio esse comportamento não parece ser um problema, e pode até ser verdade se você conhece cada linha do seu código. Já em grandes projetos, pode ser o motivo de um bug!
>> 
>> Outra característica para levar em conta:
>>> ```
>>> var nome = "Joe";
>>> function funcao() {
>>>   var nome = "John";
>>> }
>>> funcao();
>>> console.log(nome); ///qual será o valor de nome?
>>> ```
>> Acertou se respondeu "Joe". Apesar de uma var permitir ser redeclarada, ela também se estabelece em escopo de função, por tanto, neste caso, teríamos duas variáveis ```nome```, sendo a primeira em escopo global e a segunda em escopo de função. Ao acessar ```nome``` fora da função, obtemos o valor correspondente a variável de escopo global. Se accessarmos ```nome``` dentro da função, teremos o valor correspondente a variável no escopo de função.
>>
>> Em mais um exemplo, podemos ver outra característica importante:
>>> ```
>>> for(var index = 0; index <= 10; index++){ 
>>> } 
>>> console.log(index); // qual será o valor de index?
>>> ```
>> Acertou se respondeu 11. Perceba que ```var index``` foi declarada em um bloco e mesmo assim pôde ser acessada fora dele!
>> 
>> Em sistemas pequenos, isso não parece ser um grande problema, pois com um pouquinho de atenção, pode ser evitado. Mas imagine um sistema robusto, com inumeras funções, cheio de ```for(){}```'s, ```if(){}```'s, ```whiles(){}```'s e claro, muuuitas variáveis. Ter um código confiavel seria imprescindível, não é mesmo? Mas manter tudo funcionando bem, considerando as características da var, seria bem dispendioso...
>> 
>> E foi pensando nessas necessidades que surgiram **let** e **const**.

> ### let
>> Uma variável declarada com let irá respeitar o escopo de bloco e só nele poderá ser acessada. Outra característica da let é permitir a reatribuição de valores, porém, ao contrário da var, ela não permitirá ser redeclarada.
>>
>> Vamos ver um exemplo:
>>>  ```
>>>  let num1 = 3;
>>>  console.log(num1 + " e " + num2); //o que será exbido em log?
>>>  let num2 = 4;
>>> ```
>> Você lembra do comportamento hoisting, certo? Bom, se você testou o código, viu que ocorre um erro ao acessar ```num2```! Mas isso não quer dizer que let não é içada assim como a var. Na verdade ela é, e a const também. A diferença aqui, é que let e const não são **inicializadas** como _undefined_, elas serão inicializadas conforme sua ordem de escrita no código.
>>
>> Compare mais este exemplo:
>>> ```
>>> let nome = "Joe";
>>> function funcao() {
>>>  let nome = "John";
>>> }
>>> funcao();
>>> console.log(nome); //qual será o comportamento?
>>> ```
>> O resultado será "Joe". Lembre-se que let respeita o escopo de bloco, o que quer dizer que também respeita o escopo de função. Vale ressaltar que, se em um mesmo escopo, redeclarar uma variável let não será possível!
>>
>> Vamos comparar mais um exemplo:
>>> ```
>>> for(let index = 0; index <= 10; index++){ 
>>> } 
>>> console.log(index); // qual será o valor de index?
>>> ```
>> Booom... teremos o erro: Uncaught ReferenceError: index is not defined. Sim, temos um erro... mas não um problema!
>> Na verdade, este é mais um dos comportamentos de let que nos garante maior confiabilidade e controle sobre o código. Repare que agora a variável de controle ```index``` só existe dentro de seu contexto. Isso é ótimo! Agora temos certeza que nenhuma variável irá conflitar ou guardar valores sem necessidade.

> ### const
>> Mas e a **const**?
>> 
>> Basicamente, const e let se comportam de igual forma em relação a escopo e ambas não permitem serem redeclaradas. A diferença entre elas está na atribuição!
>> Ao declarar uma variável const (constante), necessáriamente devemos atribuir-lhe valor. Este valor é tido como constante e não poderá ser alterado, exceto quando tratamos de Arrays e Objetos, nestes casos, mudar sua referência é que não será permitida.
>> 
>> Vamos ao exemplo:
>>> ```
>>> for(const index = 0; index <= 10; index++){
>>> console.log(index);
>>> }
>> Aqui temos um erro! A variável ```index``` não pôde ter seu valor reatribuído a cada iteração do ```for(){}```.
>>
>>  Outro exemplo:
>>> ```
>>> const PI = 3.14159265359; //Certo
>>> ```
>>> ```
>>> const PI;
>>> PI = 3.14159265359; //Errado
>>> ```
>> Lembre-se, devemos atribuir valor às variáveis const logo ao declara-la!
>> 
>> E quanto a Arrays e Objetos:
>>> ```
>>> const pessoa = { nome: "John", sobrenome: "Doe", idade: 30 }
>>> pessoa.idade = 31; //Certo
>>> ```
>>> ```
>>> const pessoa = { nome: "John", sobrenome: "Doe", idade: 30 }
>>> pessoa = { nome: "John", sobrenome: "Doe", idade: 31 } //Errado
>>> ```
>> Podemos incluir, alterar e até mesmo remover propriedades de um objeto ou elementos de um array, mas nunca reatribuir totalmente um novo valor.

> ### Conclusão
>> Eu me perguntava qual dessas palavras reservadas deveria utilizar. A medida que fui entendendo o comportamento e características de cada uma, percebi que a escolha depende apenas das nossas necessidades e ojetivos com aquilo que estamos programando. Se é um projeto pessoal simples e trivial, não vai ter problema usar a var, não é? Agora, em um projeto complexo de alguma operação comercial, por exemplo, o uso da var pode representar riscos!
>> 
>> Então... pra não ter erro, use a let quando for necessário reatribuir valores e const sempre que for possível, principalmente com arrays e objetos!

#
> ### Class
>> 
