const progressbar = document.querySelector('.progress-bar');

let progress = 0;
const interval = setInterval(loading, 100)

function loading() {
  progress++
  if (progress <= 100) {
    progressbar.style.setProperty('--progress', progress)
  } else {
    clearInterval(interval)
    done();
  }
}

function done() {
  const div = document.createElement('div')
  div.textContent = "Concluído!"
  div.className = "progress-msg"
  progressbar.insertAdjacentElement('afterend', div)
}