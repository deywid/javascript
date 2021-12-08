import './App.css'
import Square from './components/square'
import Circle from './components/circle'
import CapsLock from './components/capslock'

function App() {
  return (
    <>
      <Square title='quadrado' />
      <Square background="violet" title='quadrado' />
      <Circle background="yellow" title='circulo' />
      <Circle title='circulo' />

      <CapsLock texto="me deixe em capslock" />
    </>
  )
}

export default App;
