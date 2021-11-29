# Tree-shaking

Trabalhar com módulos em Javascript requer um meio de interligar os arquivos, criando assim o que chamamos de interdependência. Na prática, usamos _import_ e _export_ entre um módulo e outro para determinar o quê será compartilhado e quem/ou qual módulo está compartilhando certo recurso do código.

Em meio a tudo o que pode ser exportado e o que é de fato importado pela aplicação, temos o que é conhecido como _código morto_, ou melhor, todo trecho de código não usado pela aplicação em questão. 

Por exemplo:

> ./carros.js
``` 
export const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
}
```
> ./main.js
```
import { carro } from './carros.js'
console.log(carro.modelo)
```

Estamos importando o objeto ```carro```, mas apenas a propriedade _modelo_ foi acessada. Nesse caso a propriedade _marca_ é o código morto, e será removida de nosso pacote.

Isso é o **Tree-shaking**. É como balançar uma árvore para recolher apenas os frutos maduros, afinal, só eles serão consumidos.