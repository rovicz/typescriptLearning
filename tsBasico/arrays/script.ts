const numeros = [2, 4, 8, 16, 32, 64, 128] // numeros: number, já que só possui número(s) na array.
const numerosWrong = [5, 10, 100, '1000'] // numerosWrongs: number | string, já QUE possui número(s) e string(s) na array.

function maiorQue20(data:number[]) {
  return data.filter((n) => n > 20);
}

function filtrarValores(data: (string | number)[]) {
  return data.filter(item => typeof item === 'number')
}

console.log(maiorQue20(numeros)); // filtrou os números maior que 20 da array "numeros".
console.log(filtrarValores(numerosWrong)); // filtrou os números da array "numerosWrong" que haviam strings juntas.

// Exercicio(s):

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  tags: string[];
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach(curso => {
    let color;

    if(curso.nivel === 'iniciante') {
      color = 'blue';
    } else if (curso.nivel === 'avancado') {
      color = 'red'
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Quantidade de Aulas: ${curso.aulas}</p>
        <p>Disponibilidade: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Grade: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `
  })
}