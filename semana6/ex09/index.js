const circulo = document.querySelector('.circulo')
const container = document.querySelector('.container')

const parametros = {
  _size: 200,
  _maxSize: 300,
  _minSize: 20,
  _inflate: 50,
  _deflate: 10,
  _increment: [0, 0.5],
  _intervals: [null, null, null],
  _position: ["center", "start", "end"]
}

const currentSize = () => {
  return circulo.getBoundingClientRect().width
}

const start = () => {
  if (!parametros._interval) {
    parametros._intervals[0] = setInterval(deflate, 1000)
    parametros._intervals[1] = setInterval(invisible, 18000)
    parametros._intervals[2] = setInterval(positioning, 7000)

  }
}

start()

const gameOver = () => {
  const size = currentSize();
  if (size > parametros._maxSize || size < parametros._minSize) {
    return true
  }
  return false
}

function deflate() {
  if (!gameOver()) {
    const size = currentSize();
    circulo.style.width = (size - parametros._deflate - parametros._increment[0]) + 'px'
    circulo.style.height = (size - parametros._deflate - parametros._increment[0]) + 'px'
  } else {
    restart();
  }
}

function invisible() {
  circulo.style.opacity = 0
  setTimeout(() => {
    circulo.style.opacity = 1
  }, Math.floor((Math.random() * 3 + 2)) * 1000)
}

circulo.addEventListener('click', () => {
  click();
})

const click = () => {
  if (!gameOver()) {
    const size = currentSize()
    circulo.style.width = (size + parametros._inflate) + 'px'
    circulo.style.height = (size + parametros._inflate) + 'px'
    parametros._increment[0] += parametros._increment[1];
  } else {
    restart();
  }
}

const restart = () => {
  clearInterval(parametros._intervals[0])
  parametros._intervals[0] = null
  clearInterval(parametros._intervals[1])
  parametros._intervals[1] = null
  clearInterval(parametros._intervals[2])
  parametros._intervals[2] = null
  parametros._increment[0] = 0
  confirm('try again?')
  circulo.style.width = parametros._size + 'px'
  circulo.style.height = parametros._size + 'px'
  container.style.justifyContent = parametros._position[0]
  container.style.alignItems = parametros._position[0]
  start()
}

function positioning() {
  container.style.justifyContent = parametros._position[Math.floor(Math.random() * 3)]
  container.style.alignItems = parametros._position[Math.floor(Math.random() * 3)]
}