interface Dados {
  Nome: string;
  ID: number;
  Data: string;
  Status:
    | "Paga"
    | "Aguardando pagamento"
    | "`Recusada pela operadora de cartão"
    | "Estornada";
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: "Cartão de Crédito" | "Boleto";
  ["Cliente Novo"]: 0 | 1;
}
