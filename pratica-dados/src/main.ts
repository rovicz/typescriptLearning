import fetchDados from "./fetchDados.js";
import normalizar from "./normalizar.js";

async function handleData() {
  const data = await fetchDados<Dados[]>(
    "https://api.origamid.dev/json/transacoes.json?",
  );
  if (!data) return;

  const transacoes = data.map(normalizar);
  preencherTabela(transacoes);
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
