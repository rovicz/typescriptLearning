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