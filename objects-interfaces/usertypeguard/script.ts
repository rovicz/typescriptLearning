async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if(data instanceof Array) {
    console.log('É uma Array.') // retorna a string, já que é true.
  } 
  if(Array.isArray(data)) {
    console.log('É uma Array, porém com método diferente.') // também retorna a string, porém utilizando uma função.
  }
}

// is:

function isNumber(value: unknown): value is number { // com o Type Predicate 'arg is type' podemos indicar qual o tipo de argumento uma função booleana recebeu para ser verdadeira.
  return typeof value === 'number';
}

function handleData(data: unknown) {
  if(isNumber(data)) {
    data.toFixed();
  }
}

handleData(200.50); // 201.

// Objetos

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}

// Exercicio:

async function fetchAtividade() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleAtividade(json);
}

fetchAtividade();

interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCurso(value: unknown): value is Curso {
  if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
    return true;
  } else {
    return false;
  }
}

function handleAtividade(data: unknown) {
  if (data instanceof Array) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div class='itens'>
          <h2>Nome: ${item.nome}</h2>
          <p>Horas: ${item.horas}</p>
          <p>Tags: ${item.tags}</p>
        </div>
      `
    })
  }
}