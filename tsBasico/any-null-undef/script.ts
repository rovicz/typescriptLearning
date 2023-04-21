// Any

function normalizar(texto: any) {
  return texto.trim().toLowerCase();
} // O any indica que o dado pode conter qualquer tipo de dado do TypeScript.

normalizar(' DeSIGN');
normalizar(200);

// Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json'); // Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.

// Null

const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();
button?.click();

console.log(typeof null); // null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

// Undefined

let total;
console.log(total); // undefined

// undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

const data = {};
// console.log(data.nome);
