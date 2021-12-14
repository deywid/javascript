import { useState } from 'react'
import LessText from './modules/LessText';
import './App.css';

function App() {
  let horaAgora = new Date().toLocaleTimeString();

  const [hora, setHora] = useState(horaAgora)

  function atualizaHora() {
    horaAgora = new Date().toLocaleTimeString();
    setHora(hora)
  }

  setInterval(atualizaHora, 1000);

  return (
    <div>
      <h1>{hora}</h1>
      <LessText maxLength={10}>No exemplo a seguir passamos um valor negativo no segundo parâmetro.</LessText>
    </div>
  )
}

export default App;