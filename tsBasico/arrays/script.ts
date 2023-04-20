const numeros = [2, 4, 8, 16, 32, 64, 128] // numeros: number, já que só possui número(s) na array.
const numerosWrong = [5, 10, 100, '1000'] // numerosWrongs: number | string, já QUE possui número(s) e string(s) na array.

function maiorQue20(data:number[]) {
  return data.filter((n) => n > 20);
}

function filtrarValores(data: (string | number)[]) {
  return data.filter(item => typeof item === 'number')
}

console.log(maiorQue20(numeros)); // filtrou os números maior que 20 da array "numeros".
console.log(filtrarValores(numerosWrong)); // filtrou os números da array "numerosWrong" que haviam strings juntas.