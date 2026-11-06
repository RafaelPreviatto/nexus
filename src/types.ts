export type Period = "7" | "30" | "90";

export type OrderStatus = "Pago" | "Pendente" | "Cancelado";

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: OrderStatus;
}

export interface Metric {
  label: string;
  value: string;
  variation: string;
  trend: "positive" | "negative" | "warning";
}
