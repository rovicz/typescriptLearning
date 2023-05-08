"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 4000,
});
// um CurrentTarget pode ser um EventTarget | null:
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClick);
// uso de '...rest':
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
} // o operador '...rest' sempre retorna uma array, seja de números, string ou ambos.
console.log(comparar("menor", 2, 4, 8, 16, 32, 64, 128, 256)); // 2.
console.log(comparar("maior", 2, 4, 8, 16, 32, 64, 128, 256)); // 256.
