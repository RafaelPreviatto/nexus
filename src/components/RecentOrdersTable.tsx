import { useMemo, useState } from "react";
import { Download, Search, X } from "lucide-react";
import type { Order, OrderStatus } from "../types";

interface RecentOrdersTableProps {
  orders: Order[];
}

const statusStyles: Record<OrderStatus, string> = {
  Pago: "bg-green-50 text-green-700",
  Pendente: "bg-amber-50 text-amber-700",
  Cancelado: "bg-red-50 text-red-700"
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

export default function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"Todos" | OrderStatus>("Todos");

  const filteredOrders = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    return orders.filter((order) => {
      const matchesSearch = !term || [order.id, order.customer, order.date, order.status]
        .some((field) => field.toLocaleLowerCase("pt-BR").includes(term));
      const matchesStatus = statusFilter === "Todos" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const exportCsv = () => {
    const header = ["ID do Pedido", "Cliente", "Data", "Valor", "Status"];
    const lines = filteredOrders.map((order) => [
      order.id, order.customer, order.date, order.amount.toFixed(2).replace(".", ","), order.status
    ]);
    const csv = [header, ...lines].map((row) => row.map((value) => `"${value}"`).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ultimas-vendas.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="rounded-[10px] border border-neutral-200 bg-white px-4 py-[22px] shadow-subtle sm:px-[22px]">
      <div className="mb-[18px] flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">Últimas Vendas</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="relative flex h-[38px] min-w-0 items-center sm:w-[250px]">
            <Search size={15} className="absolute left-3 text-neutral-600" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar pedido ou cliente..."
              className="h-full w-full rounded-md border border-neutral-200 bg-white pl-9 pr-8 text-xs text-neutral-900 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
              aria-label="Buscar vendas"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")} className="absolute right-2 text-neutral-600" aria-label="Limpar busca">
                <X size={14} />
              </button>
            )}
          </label>
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as "Todos" | OrderStatus)}
            className="h-[38px] rounded-md border border-neutral-200 bg-white px-3 text-xs text-neutral-600 outline-none focus:border-brand-primary"
            aria-label="Filtrar por status"
          >
            <option value="Todos">Todos os status</option>
            <option value="Pago">Pago</option>
            <option value="Pendente">Pendente</option>
            <option value="Cancelado">Cancelado</option>
          </select>
          <button
            type="button"
            onClick={exportCsv}
            className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[7px] border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            <Download size={14} />
            Exportar Relatório
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="h-[52px] border-y border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-600">
              <th className="w-[140px] px-2">ID do Pedido</th>
              <th className="w-[29%] px-2">Cliente</th>
              <th className="w-[18%] px-2">Data</th>
              <th className="w-[17%] px-2">Valor</th>
              <th className="px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="h-[52px] border-b border-neutral-200 text-xs text-neutral-900 last:border-b-0 hover:bg-neutral-50/70">
                <td className="whitespace-nowrap px-2 font-medium">{order.id}</td>
                <td className="px-2">{order.customer}</td>
                <td className="whitespace-nowrap px-2 text-neutral-600">{order.date}</td>
                <td className="whitespace-nowrap px-2 font-medium">{currency.format(order.amount)}</td>
                <td className="px-2">
                  <span className={`inline-flex min-w-[88px] items-center justify-center rounded-md px-3 py-[6px] text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="py-12 text-center text-sm text-neutral-600">
            Nenhuma venda encontrada para os filtros selecionados.
          </div>
        )}
      </div>
      <p className="mt-4 text-xs text-neutral-600">
        Exibindo {filteredOrders.length} de {orders.length} vendas
      </p>
    </section>
  );
}
