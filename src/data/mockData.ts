import type { Metric, Order } from "../types";

export const metrics: Metric[] = [
  {
    label: "Faturamento Mensal",
    value: "R$ 128.450,00",
    variation: "↑ 12% em relação ao mês anterior",
    trend: "positive"
  },
  {
    label: "Novos Pedidos",
    value: "1.284",
    variation: "↑ 8% em relação ao mês anterior",
    trend: "positive"
  },
  {
    label: "Ticket Médio",
    value: "R$ 100,04",
    variation: "↓ 2% em relação ao mês anterior",
    trend: "negative"
  },
  {
    label: "Contas a Receber",
    value: "R$ 18.620,00",
    variation: "6 títulos vencidos",
    trend: "warning"
  }
];

export const orders: Order[] = [
  { id: "#PED-2048", customer: "Mariana Costa", date: "05 nov. 2026", amount: 2450, status: "Pago" },
  { id: "#PED-2047", customer: "Lucas Almeida", date: "05 nov. 2026", amount: 890, status: "Pendente" },
  { id: "#PED-2046", customer: "Camila Oliveira", date: "04 nov. 2026", amount: 1320, status: "Pago" },
  { id: "#PED-2045", customer: "Pedro Santos", date: "04 nov. 2026", amount: 560, status: "Cancelado" },
  { id: "#PED-2044", customer: "Fernanda Lima", date: "03 nov. 2026", amount: 3100, status: "Pago" },
  { id: "#PED-2043", customer: "Gabriel Rocha", date: "03 nov. 2026", amount: 780, status: "Pendente" },
  { id: "#PED-2042", customer: "Isabela Martins", date: "02 nov. 2026", amount: 1890, status: "Pago" },
  { id: "#PED-2041", customer: "Thiago Ribeiro", date: "01 nov. 2026", amount: 430, status: "Cancelado" }
];
