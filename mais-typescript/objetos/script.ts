interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
};

const servico1 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 5);
}

mostrarQuantidade(produto1); // 15.

// Partial:

function mostrarQuantidadePartial(produto: Partial<Produto>) {
  if (produto.quantidade) {
    console.log(produto.quantidade + 5);
  }
}

mostrarQuantidadePartial(produto1); // 15.
mostrarQuantidadePartial(servico1);
