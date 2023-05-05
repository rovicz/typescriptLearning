// o Type Assertion serve para indicar ao TypeScript qual o tipo de dado esperado com a palavra-chave 'as'.
// não é aconselhado o uso excessivo do Type Assertion pois o Type Safety (a segurança) é afetada e perdida quando indicamos algo que nem sempre será verdade.

// Exemplo 01:

const video = document.querySelector('.video') as HTMLVideoElement;
video.volume; // erro, já que não existe volume de null, dito que não existe nenhum objeto com classe '.video' no HTML.

// Exemplo 02:

const link = document.querySelector('.link') // as string;
// erro, já que o elemento só é compátivel com Element ou null.

// uso de Any:

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}

// ! non-null operator:

const videonull = document.querySelector('video')!;
videonull.volume; // erro, não existe volume de null.

document.querySelector('a')!.href = 'https://www.victorferreira.dev'
// erro de runtime.

// outras sintaxes:

const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;