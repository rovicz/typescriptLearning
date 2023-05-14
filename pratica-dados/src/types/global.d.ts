type TransacaoPagamento = "Cartão de Crédito" | "Boleto";
type TransacaoStatus =
  | "Paga"
  | "Aguardando pagamento"
  | "`Recusada pela operadora de cartão"
  | "Estornada";

interface Dados {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}

interface Transacao {
  nome: string;
  id: number;
  data: Date;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}
