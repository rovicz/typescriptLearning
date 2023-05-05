"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log('É uma Array.'); // retorna a string, já que é true.
    }
    if (Array.isArray(data)) {
        console.log('É uma Array, porém com método diferente.'); // também retorna a string, porém utilizando uma função.
    }
}
// is:
function isNumber(value) {
    return typeof value === 'number';
}
function handleData(data) {
    if (isNumber(data)) {
        data.toFixed();
    }
}
handleData(200.50); // 201.
// Objetos
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data);
    }
}
// Exercicio:
async function fetchAtividade() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleAtividade(json);
}
fetchAtividade();
function isCurso(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleAtividade(data) {
    if (data instanceof Array) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
        <div class='itens'>
          <h2>Nome: ${item.nome}</h2>
          <p>Horas: ${item.horas}</p>
          <p>Tags: ${item.tags}</p>
        </div>
      `;
        });
    }
}
