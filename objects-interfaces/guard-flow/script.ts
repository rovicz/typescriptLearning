function typeGuard(value: any) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  } else if (typeof value === 'number') {
    return value.toFixed();
  } else if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard(50); // 50.
typeGuard('EU QUERO COMER.') // eu quero comer.
typeGuard(document.body); 

// in:

const obj = {
  nome: 'Faca',
  quantidade: 2,
}

if ('nome' in obj) {
  console.log('O Objeto possui um Nome.') // true.
} // o 'in' verifica se o objeto possui uma propriedade com o mesmo nome da string comaparada.
