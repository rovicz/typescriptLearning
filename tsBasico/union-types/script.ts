let total: string | number = 200;
total = '5000'; // funciona, já que defini que total poderia ser tanto uma string quanto um número.

function isNumber(value: string | number) {
  if(typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber('200')) // false.

// DOM 

const button = document.querySelector('button');

button?.click(); // o "?" faz com que só execute o click no button caso o button seja diferente de null ou undefined. 

// Exercicio(s)

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: string | number) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value)
  } else {
    throw 'value deve ser um número ou uma string'
  }
}

console.log(toNumber('500')) // retorna 500 em número.