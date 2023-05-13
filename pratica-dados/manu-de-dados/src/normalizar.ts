import moedaNumero from "./moedaNumero.js";

export default function normalizar(transacao: Dados) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: transacao.Data,
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: moedaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
}
