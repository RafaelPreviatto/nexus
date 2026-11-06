import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MetricCard from "./components/MetricCard";
import RecentOrdersTable from "./components/RecentOrdersTable";
import { metrics, orders } from "./data/mockData";
import type { Period } from "./types";

export default function App() {
  const [activeItem, setActiveItem] = useState("Visão Geral");
  const [period, setPeriod] = useState<Period>("30");

  const periodMetrics = useMemo(() => {
    if (period === "7") {
      return metrics.map((metric, index) => ({
        ...metric,
        value: ["R$ 32.180,00", "326", "R$ 98,71", "R$ 5.420,00"][index]
      }));
    }
    if (period === "90") {
      return metrics.map((metric, index) => ({
        ...metric,
        value: ["R$ 382.760,00", "3.842", "R$ 99,62", "R$ 54.890,00"][index]
      }));
    }
    return metrics;
  }, [period]);

  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <Sidebar activeItem={activeItem} onNavigate={setActiveItem} />

      <main className="min-w-0 flex-1 px-5 pb-8 pt-20 sm:px-8 sm:pt-8">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
          <Header period={period} onPeriodChange={setPeriod} activeSection={activeItem} />

          {activeItem === "Visão Geral" ? (
            <>
              <section aria-label="Indicadores principais" className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                {periodMetrics.map((metric) => (
                  <MetricCard key={metric.label} metric={metric} />
                ))}
              </section>
              <RecentOrdersTable orders={orders} />
            </>
          ) : (
            <section className="rounded-[10px] border border-neutral-200 bg-white p-8 shadow-subtle">
              <h2 className="text-lg font-semibold text-neutral-900">{activeItem}</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
                A seção {activeItem.toLocaleLowerCase("pt-BR")} está pronta para receber seus módulos.
                Esta navegação demonstra o estado ativo e pode ser conectada às rotas reais do sistema.
              </p>
              <button
                type="button"
                onClick={() => setActiveItem("Visão Geral")}
                className="mt-5 rounded-md bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Voltar à visão geral
              </button>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
