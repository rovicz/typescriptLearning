export const livro: Produto = {
  nome: "Star Wars",
  preco: 49,
}; // adquiriu a interface Produto do arquivo '.d.ts' perfeitamente.

// pode-se declarar globalmente interfaces sem a necessidade de criação de um arquivo 'd.ts'.
declare global {
  interface User {
    nome: string;
    idade: number;
    email: string;
  }
} // agora essa interface (ou type) pode ser utilizada e acessada globalmente por todos arquivos ts, porém contudo, há de se ter uma precaução em se reinscrever interfaces em cima da outra.
