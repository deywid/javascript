let lampada = true;

window.addEventListener('load', () => {
  setInterval(ligaDesliga, 2000);
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