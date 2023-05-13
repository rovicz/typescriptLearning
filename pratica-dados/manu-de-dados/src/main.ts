import fetchDados from "./fetchDados.js";
import normalizar from "./normalizar.js";

async function handleData() {
  const data = await fetchDados<Dados[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (!data) return;

  const transacoes = data.map(normalizar);
}
