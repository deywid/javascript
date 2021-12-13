# React

## Renderização condicional
> O que é a rederização condicional em React?

Sabemos que os componentes em React retornam elementos. 
A partir desse princípio, podemos definir condições para que nosso componente rotorne um elemento com características condizentes ao contexto selecionado.

> Por exemplo:

```
function Circle() {
  return <div className="circle"></div>
}
```
```
function Rectangle() {
  return <div className="circle"></div>
}
```

Temos até aqui dois componentes distintos e que retornam um elemento de característica específica.

```
function Figures({type}) {
  return (
    <>
      {type === 'circle' && <Circle />}

      {type === 'rectangle' && <Rectangle />}
    </>
  )
}
```

Criamos o componente Figures e condicionamos seu retorno a um determinado critério.

```
ReactDOM.render(
  <React.StrictMode>
    <Figures type="rectangle" />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Os componentes Circle e Rectangle retornam um elemento de forma estatica. 
Já Figures, por outro lado, realiza uma validação antes de retornar o elemento que atende o critério estabelecido. A renderização de Figures, por tanto, é condicional.
