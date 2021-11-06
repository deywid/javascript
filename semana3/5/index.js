let lampada = true;

document.getElementById('btn-on-off').addEventListener('click', () => {
  ligaDesliga(lampada)
  if (lampada) {
    document.getElementById('lampada').setAttribute('src', 'luz-acesa.png');
  } else {
    document.getElementById('lampada').setAttribute('src', 'luz-apagada.png');
  }
})

function ligaDesliga(onOFF) {
  lampada = !onOFF
}