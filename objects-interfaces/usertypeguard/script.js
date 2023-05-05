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
