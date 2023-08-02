function apagador(btn) {
  const visorResultado = document.querySelector('[data-visor="value"] span');

  if(btn === 'AC') {
    expressao = '';
    visorEspressao.value = '';
    visorEspressao.classList.remove('f34');
    visorEspressao.classList.remove('separador');
  
  
    if(visorResultado) {
      visor.removeChild(visorResultado);
    }

  }else if(btn ==='⌫') {
    expressao = expressao.slice(0, visorEspressao.value.length-1);
    visorEspressao.value = expressao;

    if(visorResultado) {
      visorEspressao.classList.remove('separador');
      visor.removeChild(visorResultado);
    }
  }
}