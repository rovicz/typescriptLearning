// desativado @ts-check
const frase = "Front End";
const total = 100.05;
const empresas = ["Apple", "Microsoft"];
const body = document.body;
const button = document.querySelector("button");

frase.toLowerCase();
// frase.toFixed();

total.toFixed();
// total.toLowerCase();

empresas.map((empresa) => empresa.toUpperCase());
// empresas.toLowerCase();

body.style.background = "#000";
// body.map((item) => item);

console.log(button);
// button.click();

// const operacao = true + 'teste' - (4 * {}) / [];
const strings = "Front " + "End";
const numbers = 100 + 200;
console.log(strings, numbers);

// Disclaimer: ao usar o @ts-check, o editor passará a indicar erros que seriam pegos pelo TS.

// TypeScript Annotations

const produtos = [
  {
    nome: "O Senhor dos Anéis",
    tipo: "livro",
  },
  {
    nome: "A Guerra dos Tronos",
    tipo: "livro",
  },
  {
    nome: "Dark Souls",
    tipo: "jogo",
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === "livro");
}

console.log(filtrarLivros(produtos));
