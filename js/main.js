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

  }else if(typeof btn === 'string' & btn !== '=' & btn !== '( )') {
    expressao += ' ' + btn + ' ';

  }else if(btn === '( )') {
    if(expressao.includes('(')) {
      expressao += ')'
    } else {
      expressao += '('
    }
  }else {
    resultado(expressao);
    expressao += ' ='
  }

  visorEspressao.value = expressao;
}

botoes.forEach((btn) => btn.addEventListener('click', triagemDeBotoes));
