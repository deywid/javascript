import CapsLock from '../capslock'
import Circle from '../circle'
import Square from '../square'
import Retangulo from '../retangulo'
import Triangulo from '../triangulo'

const Figures =
  ({
    type,
    title,
    bg
  }) => {

    return (
      <>
        <CapsLock>{title}</CapsLock>

        {type === 'triangle' && (
          <Triangulo
            bg={bg} />
        )}

        {type === 'square' && (
          <Square
            bg={bg} />
        )}

        {type === 'circle' && <Circle bg={bg} />}

        {type === 'rectangle' && <Retangulo bg={bg} />}
      </>
    )
  }

export default Figures