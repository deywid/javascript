import { useState } from 'react';
import TextBtn from './LessText-Btn';

function LessText({ maxLength, children }) {

  const [actualState, setState] = useState(true)

  return (
    <>
      {actualState
        ? <p>{children}<button onClick={() => setState(!actualState)}><TextBtn>Esconder</TextBtn></button></p>
        : <p>{children.slice(0, maxLength)}<button onClick={() => setState(!actualState)}>...<TextBtn>Esconder</TextBtn></button></p>
      }
    </>
  )
}

export default LessText;