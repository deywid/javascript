const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

function calcular() {
  const total = parseFloat(document.getElementById('total').value)
  const desconto = parseFloat(document.getElementById('desconto').value)
  if (isNaN(total) || isNaN(desconto)) {
    return
  } else if (desconto <= 0 || desconto >= 100) {
    alert('valor de desconto inválido')
    return
  }
  document.getElementById('valor-total').innerHTML = formatter.format(total)
  document.getElementById('total-desconto').innerHTML = formatter.format(comDesconto(total, descontoTotal(total, desconto)))
  document.getElementById('valor-desconto').innerHTML = formatter.format(descontoTotal(total, desconto))
  const resumo = document.querySelectorAll(".resumo")
  resumo.forEach(el => el.style.display = 'block');
}

function descontoTotal(a, b) {
  return (a * b) / 100
}

function comDesconto(a, b) {
  return a - b
}