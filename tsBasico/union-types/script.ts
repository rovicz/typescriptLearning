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