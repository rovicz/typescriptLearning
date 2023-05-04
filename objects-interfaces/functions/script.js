"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
} // possível selecionar um parâmetro como opcional, utilizando o ? após o parâmetro.
somar(5, 2); // 7.
somar(2, 3, 5); // 10.
const multiplicar = (a, b) => a * b; // pode-se utilizar o const com o uso da arrow function para simplificar.
multiplicar(3, 5); // 15.
// Void
// o Void no TypeScript é alternativa do Undefinied do JavaScript. o Void evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('#000');
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
// Never
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar('    ProDUTO').toUpperCase()); // PRODUTO.
console.log(normalizar(['PROduto    ', '   pRoDuTo2 ', 'PrOdUtO3     '])); // ['produto', 'produto2', 'produto3'].
function $(seletor) {
    return document.querySelector(seletor);
}
$('a')?.click();
$('video')?.volume;
