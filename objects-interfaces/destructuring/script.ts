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
