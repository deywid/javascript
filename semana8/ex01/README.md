# React

## Componentes 
> O que são os _componentes_ em React?

Os chamados componentes do React são funções ou classes do javascript que retornam elementos React. 
Os elementos, por sua vez, podem ser tags HTML ou mesmo outros componentes já definidos.

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

Por convenção, sempre declaramos um novo componente iniciando seu nome por uma letra em maiúsculo. Assim, sabemos que ```<img />``` representa a tag do HTML e ```<Imagem />``` representa um componente em React.
