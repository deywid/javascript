import './App.css'
import Figures from './components/Figure'

function App() {
  return (
    <>
      <Figures type="square" title="Quadrado"
        bg="yellow" />

      <Figures type="triangle" title="Triangulo"
        bg="red" />

      <Figures type="circle" title="Circulo"
        bg="blue" />

      <Figures type="rectangle" title="Retangulo"
      />
    </>
  )
}

export default App;