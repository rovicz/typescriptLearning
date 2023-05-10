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
  // com o partial podemos indicar que todas as propiedades da interface passada em tipo, são opcionais.
  if (produto.quantidade) {
    console.log(produto.quantidade + 5);
  }
}

mostrarQuantidadePartial(produto1); // 15.
mostrarQuantidadePartial(servico1);

// [key: string]: unknown:

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown; // serve como um valor genérico, sendo assim, deve conter as propiedades acima porém pode conter QUALQUER outra propiedade não definida anteriormente.
}

const artigo: Post = {
  titulo: "Como aprender JavaScript",
  visualizacoes: 2000,
  tags: ["JavaScript", "Front-End"],
  autor: "André Origamid", // propiedade nova e não definida anteriormente.
  horas: 20,
};

artigo.autor; // André Origamid.
artigo.descricao; // undefined (não foi definida).

// sendo assim, fazer a verificação é necessário, como por exemplo:
if (artigo.horas === "number") {
  artigo.horas; // 20.
}

// Record:

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>; // funciona da mesma forma que o método acima da key, porém de forma mais simples.

function mostrarTitulo(obj: ObjetoLiteral) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo({
  titulo: "Star Wars",
}); // Star Wars (correto, funciona).
