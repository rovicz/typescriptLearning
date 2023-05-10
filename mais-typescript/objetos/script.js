"use strict";
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
};
const servico1 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 5);
}
mostrarQuantidade(produto1); // 15.
// Partial:
function mostrarQuantidadePartial(produto) {
    // com o partial podemos indicar que todas as propiedades da interface passada em tipo, são opcionais.
    if (produto.quantidade) {
        console.log(produto.quantidade + 5);
    }
}
mostrarQuantidadePartial(produto1); // 15.
mostrarQuantidadePartial(servico1);
const artigo = {
    titulo: "Como aprender JavaScript",
    visualizacoes: 2000,
    tags: ["JavaScript", "Front-End"],
    autor: "André Origamid",
    horas: 20,
};
artigo.autor; // André Origamid.
artigo.descricao; // undefined (não foi definida).
// sendo assim, fazer a verificação é necessário, como por exemplo:
if (artigo.horas === "number") {
    artigo.horas; // 20.
}
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: "Star Wars",
}); // Star Wars (correto, funciona).
