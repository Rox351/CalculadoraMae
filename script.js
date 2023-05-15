let calcular = document.getElementById('calcular');
calcular.addEventListener('click', function() {
  let valor = parseFloat(document.getElementById('valor').value);
  let taxa = 0.05252;
  let juros = (valor * taxa).toFixed(2);
  let valorFinal = (valor + parseFloat(juros)).toFixed(2);
  document.getElementById('resultado').innerHTML = `O valor do juros é: R$ ${juros} <br> O valor total é: R$ ${valorFinal}`;
});
