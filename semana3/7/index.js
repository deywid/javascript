window.addEventListener('load', () => {
  let lampada;
  if (localStorage.getItem('lampada')) {
    lampada = JSON.parse(localStorage.getItem('lampada'));
  } else {
    lampada = true;
    guardaEstadoLampada(lampada);
  }
  mostraLampada(lampada);
});

function mostraLampada(lampada) {
  if (lampada) {
    document.getElementById('lampada').setAttribute('src', 'luz-acesa.png');
  } else {
    document.getElementById('lampada').setAttribute('src', 'luz-apagada.png');
  }
  document.getElementById('lampada').style.display = 'block';
}

document.getElementById('btn-on-off').addEventListener('click', () => {
  lampada = !JSON.parse(localStorage.getItem('lampada'));
  guardaEstadoLampada(lampada);
  mostraLampada(lampada);
})

function guardaEstadoLampada(lampada) {
  localStorage.setItem('lampada', JSON.stringify(lampada));
}