type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
      <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Inclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
      </div>
  `;
}

const computador: Produto = {
  nome: 'Computador',
  preco: 5000,
  teclado: true,
}

const notebook: Produto = {
  nome: 'Notebook',
  preco: 3000,
  teclado: false,
}

preencherDados(computador);
preencherDados(notebook);