document.getElementById('btn-newUser').addEventListener('click', () => {
  document.getElementById('user-name').innerHTML = document.getElementById('nome').value
  document.getElementById('user-img').src = document.getElementById('imagem').value
  document.getElementById('user-desc').innerHTML = document.getElementById('desc').value
});