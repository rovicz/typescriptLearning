import fetchDados from "./fetchDados";

async function handleData() {
  const data = await fetchDados<Dados[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );

  if (data) {
  }
}
