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