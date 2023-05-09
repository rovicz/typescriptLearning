// usabilidade normal de uma constante de array:
const produto1 = ["Notebook", 2500]; // produto1 é uma string ou number de array, sendo assim, ao tentar manipular a array com alguma propiedade, ele não sabe-se é uma string ou número.

// usabilidade com tuples (arrays que possuem dados em posições fixas):
const produto2: [string, number] = ["Notebook", 2500]; // agora por padrão, produto2 é uma string e na sequência um number [string, number], sendo assim fixada previamente.

// pode ser usado com uma desestruturação para facilitar a manipulação da array, como por exemplo:
const [nome, preco] = produto2;
nome; // 'Notebook'.
preco; // 2500.

// as const:

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const; // o as const torna um dado readonly e infere o tipo de dado mais específico possível.
  } else {
    return null;
  }
}

const button = getText("button");
console.log(button); // retornou o proprio elemento (el) seguido do innerText dele (el.innerText) = [button, 'Clique Aqui'].

// Exercicio(s):

async function fetchExerc() {
  const r = await fetch("https://api.origamid.dev/json/vendas.json");
  const json = await r.json();
  somarVendas(json);
}

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  let total1 = 0;
  for (let i = 0; i < vendas.length; i++) {
    total1 += vendas[i][1];
  }
  document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;
}

fetchExerc();
