"use strict";
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
