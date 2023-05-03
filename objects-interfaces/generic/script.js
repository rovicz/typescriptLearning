"use strict";
function retorno(a) {
    return a;
}
console.log(retorno('O Jogo'));
console.log(retorno(600));
console.log(retorno(false));
// um tipo genérico é uma forma de declarar as nossas funções, classes ou interfaces com um parâmetro génerico, com a utilização do <>.
// Exemplo prático: 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ['Banana', 'Maça', 'Uva', 'Ameixa', 'Pêra', 'Morango', 'Tomate'];
function fFive(lista) {
    return lista.slice(0, 5);
}
console.log(fFive(numeros)); // retorna os 5 primeiros items da array, [1, 2, 3, 4, 5].
console.log(fFive(frutas).map(item => item)); // vai retornar as 5 primerias frutas da array, ['Banana', 'Maça', 'Uva', 'Ameixa', 'Pêra'].
// Exemplo 02:
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado('A vida é Linda.'); // {dado: 'A vida é Linda.', tipo: 'string'}.
tipoDado(1000); // {dado: 1000, tipo: 'number'}.
tipoDado(true); // {dado: true, tipo: 'boolean'}.
