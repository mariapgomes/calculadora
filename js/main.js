const visor = document.querySelector('[data-visor="value"]');
const visorEspressao = document.querySelector('[data-visor="value"] input');
const botoes = document.querySelectorAll('[data-teclado="botoes"] input');
let expressao = '';

function triagemDeBotoes(event) {
  let btn = event.target.value;

  if(btn !== 'AC' & btn !== '⌫') {
    montaExpressao(btn);
  }else {
    apagador(btn);
  }
}

function montaExpressao(btn) {
  
  if(+btn || btn === '0') {
    expressao += btn;

  }else if(typeof btn === 'string' & btn !== '=' & btn !== '( )' & btn !== '.') {
    expressao += ' ' + btn + ' ';

  }else if(btn === '( )') {
    if(expressao.includes('(')) {
      expressao += ')'
    } else {
      expressao += '('
    }
  }else if(btn === '.') {
    expressao += btn;
  }else {
    resultado(expressao);
    expressao += ' ='
  }

  if(expressao.length >= 15){
    visorEspressao.classList.add('f34');
  }

  visorEspressao.value = expressao;
  
}

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

