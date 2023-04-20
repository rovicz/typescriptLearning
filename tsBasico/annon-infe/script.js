"use strict";
const produto = 'Livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
// carro.marca = 3 (Retorna um erro, já que especifiquei que 'marca' deveria ser uma string, sendo assim, não é possível que eu insira um número);
// carro.portas = 'cinco' (Retorna um erro, já que especifiquei que 'marca' deveria ser uma número, sendo assim, não é possível que eu insira uma string);
// Inference - com a Inference, não é necessário informar que uma constante/let é uma string, número ou boolean, já que o TS entende por padrão o que é dependendo do que eu defina, sendo assim, o código acima poderia ser:
const produtoInf = 'Livro';
const precoInf = 200;
const carroInf = {
    marca: 'Audi',
    portas: 5,
};
// os erros envolvendo redefinir uma string para um número e vice-versa ainda se aplicam.
function somar(a, b) {
    return a + b;
}
somar(5, 20); // Correto.
// somar(5, '14') // Incorreto, o segundo valor foi definido como uma STRING.
const xboxSS = {
    nome: 'Xbox Series S',
    preco: '1890'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(xboxSS); // Retorna um Objeto: {nome: 'Xbox Series S', preco: 'R$ 1890'}
