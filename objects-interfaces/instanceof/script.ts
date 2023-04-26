class Produto {
   nome: string;
   preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}

const livro = new Produto('A Guerra dos Clones', 100);

console.log(livro.precoReal()) // retorna o valor de R$ 100.
console.log(livro instanceof Produto); // Retorna True, já que livro é uma instância da função construtora "Produto".

class Publisher {
  Publisher: string;
  constructor(Publisher: string) {
    this.Publisher = Publisher;
  }
}

class Ativos {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'Assassins Creed IV: Black Flag') {
    return new Publisher('Ubisoft Montreal')
  } else if (busca === 'Rainbow Six Siege') {
    return new Ativos(20000);
  } else {
    return null
  }
}

const AC4 = buscarProduto('Assassins Creed IV: Black Flag');
const R6 = buscarProduto('Rainbow Six Siege')

if (AC4 instanceof Publisher) {
  console.log(AC4.Publisher)
} // retorna 'Ubisoft Montreal' já que AC4 é uma instância de Publisher.

if (R6 instanceof Ativos) {
  console.log(R6.jogadores)
} // retorna '20000' já que R6 é uma instância de Ativos.

// Exercicios:

const link =  document.getElementById('origamid');

if(link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
} // alterou o http para https.

// link é uma instância da coleção HTML, sendo assim, é possível acessar os seus métodos, como o href.