let lampada = false;

window.addEventListener('load', () => {
  setTimeout(ligaDesliga, 5000);
})

function ligaDesliga() {
  lampada = !lampada
  mostraLampada(lampada)
};

function mostraLampada(lampada) {
  if (lampada) {
    document.getElementById('lampada').setAttribute('src', 'luz-acesa.png');
  } else {
    document.getElementById('lampada').setAttribute('src', 'luz-apagada.png');
  }
}