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
>> Além disso, assim como ocorre em funções nomeadas, a var possui uma característica interessante, a qual damos o nome de **hoisting**.
>>> #### Hoisting 
>>>> (içamento/elevação, em português) é o que nos permite 'executar o código antes de criar o código', ou seja, quando atribuimos valor a uma variável logo na primeira linha de código, mas a declaramos na última linha, estamos nos valendo dessa característica.
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
>>> var nome = "Joe"
>>> function escopoDeFuncao() {
>>>   var nome = "Jane"
>>> }
>>> escopoDeFuncao()
>>> console.log(nome) ///qual será o valor de nome?
>>> ```
>> Acertou se respondeu "Joe". Apesar de uma var permitir ser redeclarada, ela também se estabelece no escopo de função, por tanto, neste caso, teríamos duas variáveis ```nome```'s, sendo a primeira em escopo global e a segunda em escopo de função. Ao acessar ```nome``` fora da função, obtemos o valor correspondente a variável de escopo global. Se accessarmos ```nome``` dentro da função, teremos o valor correspondente a variável no escopo de função.
>>
>> Em mais um exemplo, podemos ver outra característica importante:
>>> ```
>>> for(var index = 0; index <= 10; index++){ 
>>> } 
>>> console.log(index) // qual será o valor de index?
>>> ```
>> Acertou se respondeu 11. Perceba que ```var index``` foi declarada em um bloco e mesmo assim pôde ser acessada fora dele!
>> 
>> Em sistema pequeno, isso não parece ser um grande problema e com um pouquinho de atenção, pode ser evitado. Mas imagine um sistema robusto, com inumeras funções, cheio de ```for(){}```'s, ```if(){}```'s, ```whiles(){}```'s e claro, muuuitas variáveis. Ter um código confiavel seria imprescindível, não é mesmo? Mas manter tudo funcionando bem, considerando as características da var, seria bem dispendioso...
>> 
>> E foi pensando nessas necessidades que surgiram **let** e **const**.

> ### let
>>  
