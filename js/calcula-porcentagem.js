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