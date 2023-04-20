"use strict";
// Type
function preencherDados(dados) {
    document.body.innerHTML += `
      <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Inclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
      </div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 5000,
    teclado: true,
};
const notebook = {
    nome: 'Notebook',
    preco: 3000,
    teclado: false,
};
preencherDados(computador);
preencherDados(notebook);
// Exercicio(s):
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>Descrição do Produto: ${data.descricao}</p>
    </div>
  `;
}
