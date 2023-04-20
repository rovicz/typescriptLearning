const produto: string = 'Livro';
const preco: number = 200;

const carro: {
marca: string;
portas: number;
} = {
  marca: 'Audi',
  portas: 5,
}

// carro.marca = 3 (Retorna um erro, já que especifiquei que 'marca' deveria ser uma string, sendo assim, não é possível que eu insira um número);
// carro.portas = 'cinco' (Retorna um erro, já que especifiquei que 'marca' deveria ser uma número, sendo assim, não é possível que eu insira uma string);

// Inference - com a Inference, não é necessário informar que uma constante/let é uma string, número ou boolean, já que o TS entende por padrão o que é dependendo do que eu defina, sendo assim, o código acima poderia ser:

const produtoInf = 'Livro';
const precoInf = 200;

const carroInf ={
  marca: 'Audi',
  portas: 5,
}

// os erros envolvendo redefinir uma string para um número e vice-versa ainda se aplicam.

function somar(a: number, b: number) {
  return a + b;
}

somar(5, 20); // Correto.
// somar(5, '14') // Incorreto, o segundo valor foi definido como uma STRING.

const xboxSS = {
  nome: 'Xbox Series S',
  preco: '1890'
}

function transformarPreco(produto: { nome: string; preco: string; }) {
  produto.preco = 'R$ ' + produto.preco;
    return produto;
}

const produtoNovo = transformarPreco(xboxSS); // Retorna um Objeto: {nome: 'Xbox Series S', preco: 'R$ 1890'}

// Exercicios

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

normalizarTexto(' FrONT-enD   ') // retorna front-end.

// Exercicio 02
const input = document.querySelector("input");

const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}