const { body } = document;

interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 4000,
});

// um CurrentTarget pode ser um EventTarget | null:

function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick);

// uso de '...rest':

function comparar(tipo: "menor" | "maior", ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
} // o operador '...rest' sempre retorna uma array, seja de números, string ou ambos.

console.log(comparar("menor", 2, 4, 8, 16, 32, 64, 128, 256)); // 2.
console.log(comparar("maior", 2, 4, 8, 16, 32, 64, 128, 256)); // 256.
