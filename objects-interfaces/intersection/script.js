"use strict";
function handleProCar(dados) {
    // a intersection funciona em parte como o extends para interfaces, porém também pode ser utilizado em Types.
    dados.rodas;
    dados.portas;
    dados.preco;
}
handleProCar({ rodas: 4, portas: 4, preco: 20000 }); // funciona corretamente.
window.userId = 200; // se definimos uma propiedade global, podemos extender a interface de Window, apenas redeclarando a interface.
