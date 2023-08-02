function resultado(expressao) {
  const resultado = new Function('return ' + expressao)();

  visorEspressao.classList.add('separador');
  const visorResultado = document.createElement('span');
  visorResultado.classList.add('resultado');
  
  if(resultado.toString(10).length > 8){
    visorResultado.innerText = resultado.toFixed(4);
  } else {
    visorResultado.innerText = resultado;
  }

  visor.appendChild(visorResultado);
}