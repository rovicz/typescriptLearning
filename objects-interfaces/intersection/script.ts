type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProCar(dados: Produto & Carro) {
  // a intersection funciona em parte como o extends para interfaces, porém também pode ser utilizado em Types.
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProCar({ rodas: 4, portas: 4, preco: 20000 }); // funciona corretamente.

// Exemplo 02 com Types:

type interCar = {
  rodas: number;
  portas: number;
};

type interCarCPreco = interCar & {
  preco: number;
}; // dessa forma eu extendi o 'interCar' adicionando o 'preco' a partir de outro type.

// é possível adicionar uma propiedade a uma interface/type já definida.

interface InterCarro {
  rodas: number;
  portas: number;
}

interface InterCarro {
  preco: number;
} // no caso da interface, pode-se sobrepor uma interface de mesmo nome com funcionalidade de adicionar uma propiedade a ela.
// neste caso, é recomendado quando o dev não tem acesso a interface original, caso haja necessidade e interesse de adicionar uma propiedade nova.

// Window:

interface Window {
  userId: number;
}

window.userId = 200; // se definimos uma propiedade global, podemos extender a interface de Window, apenas redeclarando a interface.
