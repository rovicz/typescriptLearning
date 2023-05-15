import Stats from "./Stats.js";
import fetchDados from "./fetchDados.js";
import normalizar from "./normalizar.js";

async function handleData() {
  const data = await fetchDados<Dados[]>(
    "https://api.origamid.dev/json/transacoes.json?",
  );
  if (!data) return;

  const transacoes = data.map(normalizar);
  preencherTabela(transacoes);
  preencherStats(transacoes);
}

function preencherLista(lista: countList, containerID: string): void {
  const containerElement = document.getElementById(containerID);

  if (containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `
      <p>${key}: ${lista[key]}</p>
      `;
    });
  }
}

function preencherStats(transacoes: Transacao[]): void {
  const data = new Stats(transacoes);

  preencherLista(data.pagamento, "pagamento");
  preencherLista(data.status, "status");

  const diaElement = document.querySelector<HTMLElement>("#dia span");
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
  });
}

handleData();
