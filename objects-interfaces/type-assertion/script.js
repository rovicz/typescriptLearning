"use strict";
// o Type Assertion serve para indicar ao TypeScript qual o tipo de dado esperado com a palavra-chave 'as'.
// não é aconselhado o uso excessivo do Type Assertion pois o Type Safety (a segurança) é afetada e perdida quando indicamos algo que nem sempre será verdade.
// Exemplo 01:
const video = document.querySelector('.video');
video.volume; // erro, já que não existe volume de null, dito que não existe nenhum objeto com classe '.video' no HTML.
// Exemplo 02:
const link = document.querySelector('.link'); // as string;
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto();
    produto.nome;
}
// ! non-null operator:
const videonull = document.querySelector('video');
videonull.volume; // erro, não existe volume de null.
document.querySelector('a').href = 'https://www.victorferreira.dev';
// erro de runtime.
