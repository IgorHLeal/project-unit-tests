/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, idade) => {
  if (name === undefined && idade === undefined) {
    return undefined;
  }
  // Foi preciso retirar os espaços nas quebras de linha para a string ser retornada como o esperado;
  return `Oi, meu nome é ${name}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
 };

console.log(vqv('Tunico', 30));

module.exports = vqv;
