// Type

type ProdutoType = {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: ProdutoInter) {
  document.body.innerHTML += `
      <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Inclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
      </div>
  `;
}

const computador: ProdutoType = {
  nome: 'Computador',
  preco: 5000,
  teclado: true,
}

const notebook: ProdutoInter = {
  nome: 'Notebook',
  preco: 3000,
  teclado: false,
}

preencherDados(computador);
preencherDados(notebook);

// Interface

interface ProdutoInter {
  nome: string;
  preco: number;
  teclado: boolean;
} // diferente do Type acima de "Produto", o Interface deve-se ser utilizado na criação de objetos, sendo assim, a maneira aconselhada de se utilizar é a exemplificada pelo "`ProdutoInter".

// Exercicio(s):

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface ProdutosExer {
  nome: string;
  preco: number;
  descricao: string;
}

function showProduct(data: ProdutosExer) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>Descrição do Produto: ${data.descricao}</p>
    </div>
  `;
}