function typeGuard(value: unknown) {
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

// o Unknown indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso 
// de métodos quando a Type Safety estiver garantida.

// é bem mais prático e convencional o uso do Unknown do que o uso do Any.