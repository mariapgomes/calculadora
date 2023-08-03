function montaExpressao(btn) {
  
  if(+btn || btn === '0' || btn === '.') {
    expressao += btn;

  }else if(btn !== '=' && btn !== '( )') {
    expressao += ' ' + btn + ' ';

  }else if(btn === '( )') {
    if(expressao.includes('(')) {
      expressao += ')';

    } else {
      expressao += '(';
    }
  } else {
    if (expressao.includes('%')){
      calcPorcentagem(expressao);
      expressao += ' =';
      
    } else {
      resultado(expressao);
      expressao += ' =';
    }
  }

  if(expressao.length >= 14){
    visorEspressao.classList.add('f34');
  } 

  visorEspressao.value = expressao;
  
}