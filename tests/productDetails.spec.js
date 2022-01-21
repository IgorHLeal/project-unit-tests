const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Outra forma de fazer seria:
    /* const newArray = productDetails('Alcool gel', 'Máscara');
    expect(typeof newArray[0]).toBe('object');
    expect(typeof newArray[1]).toBe('object'); */

    expect((typeof productDetails()[0] === 'object') && (typeof productDetails()[1] === 'object')).toBe(true);
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('igor', 'leal')[0]).not.toBe(productDetails('igor', 'leal'));

    // Teste se os dois productIds terminam com 123.
    expect(productDetails()[0].details.productId.includes(123) && productDetails()[1].details.productId.includes(123)).toBe(true);
  
  });
});



// ---------- REFERÊNCIAS ----------
// Array.isArray: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// typeof: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof

// includes: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes