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

  } else {
    if (expressao.includes('%')){
      calcPorcentagem(expressao);
      expressao += ' ='
      
    } else {
      resultado(expressao);
      expressao += ' ='
    }
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

function calcPorcentagem(expressao) {
  const porcentagem = expressao.indexOf('%');
  let calcPorcentagem = '';
  let arrayExpressao = expressao.split('');

  for (let i = porcentagem - 2; expressao[i] !== '(' && expressao[i] !== ' ' && i >= 0; i--) {
    calcPorcentagem += expressao[i];
    arrayExpressao.splice(i, 1);
  }

  let valorPorcentagem = calcPorcentagem.split('').reverse().join('');
  let porcentagemFinal = valorPorcentagem/100;
  arrayExpressao[arrayExpressao.indexOf('%')] = '*';

  if (arrayExpressao.lastIndexOf('*') - 1 === 0) {
    arrayExpressao.unshift(porcentagemFinal);

  } else {
    arrayExpressao.splice(arrayExpressao.lastIndexOf('*') - 1, 0, porcentagemFinal);
  }

  resultado(arrayExpressao.join(''));

}

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

botoes.forEach((btn) => btn.addEventListener('click', triagemDeBotoes));

