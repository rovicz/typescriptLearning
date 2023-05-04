function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
} // possível selecionar um parâmetro como opcional, utilizando o ? após o parâmetro.

somar(5, 2); // 7.
somar(2, 3, 5) // 10.

const multiplicar = (a: number, b: number) => a * b; // pode-se utilizar o const com o uso da arrow function para simplificar.

multiplicar(3, 5); // 15.

// Void

// o Void no TypeScript é alternativa do Undefinied do JavaScript. o Void evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor: string): void {
  document.body.style.background = cor;
}

pintarTela('#000');

function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  }
}

// Never

function abortar(mensagem: string): never { // o Never é utilizado em casos onde a função gera um erro ou termina a aplicação.
  throw new Error(mensagem);
}

// abortar('Erro Detectado.') // retorna Erro Detectado como mensagem de Erro, abortando o código.

// Métodos:

interface Quadrado {
  lado: number;
  perimetro(lado: number): number
}

function calcular(forma: Quadrado) {
  forma.perimetro(3);
}

// Overload:

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === 'string') {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar('    ProDUTO').toUpperCase()); // PRODUTO.
console.log(normalizar(['PROduto    ', '   pRoDuTo2 ', 'PrOdUtO3     '])); // ['produto', 'produto2', 'produto3'].

// Exemplo 02:

function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: 'video'): HTMLVideoElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$('a')?.click();
$('video')?.volume;


// Exercicios:

// Crie uma função que arredonda um valor passsado para cima.
// A função deve receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondarCima(value: number): number;
function arredondarCima(value: string): string;
function arredondarCima(value: number | string): number | string {
  if (typeof value === 'number') {
    return Math.ceil(value);
  } else {
    return Math.ceil(Number(value)).toString();
  }
}

arredondarCima('22.22'); // 23.
arredondarCima(50.01); // 51.