export default async function fetchDados<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url);

    if (!r.ok) throw new Error("Erro: " + r.status);

    const json = await r.json();
    return json;
  } catch (error) {
    if (error instanceof Error) console.error("fetchData: " + error.message);
    return null;
  }
}

function handleDados() {}
