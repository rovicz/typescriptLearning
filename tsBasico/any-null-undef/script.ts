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