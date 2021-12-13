# React

## Props
> O que são _props_ dos componentes em React?

Props, de forma simples, são as propriedades dos componentes em React. Assim como em funções e classes, que podem receber argumentos, nossos componentes podem receber propriedades.
As props de um componente React equivalem as propriedades de um elemento ou nó HTML.

> Exemplo:
```
function Imagem(props) {
  return (
    <img className="imagem"
      src={props.url}
      alt={props.name}
    />
  );
}
```

Perceba que ```props``` é um objeto que serve como argumento do componente, o qual torna-se vivo, pois o elemento retornado a cada chamada receberá propriedades dinamicamente.
