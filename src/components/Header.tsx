import { CalendarDays, ChevronDown } from "lucide-react";
import type { Period } from "../types";

interface HeaderProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  activeSection: string;
}

const periodLabels: Record<Period, string> = {
  "7": "Últimos 7 dias",
  "30": "Últimos 30 dias",
  "90": "Últimos 90 dias"
};

export default function Header({ period, onPeriodChange, activeSection }: HeaderProps) {
  const today = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());

  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div>
        <p className="mb-1 text-xs font-medium capitalize text-neutral-600">{today}</p>
        <h1 className="text-2xl font-bold tracking-[-0.03em] text-neutral-900">
          {activeSection === "Visão Geral" ? "Visão Geral Operacional" : activeSection}
        </h1>
        <p className="mt-[5px] text-[13px] text-neutral-600">
          Acompanhe os principais indicadores do seu negócio.
        </p>
      </div>

      <label className="relative flex h-[42px] w-full items-center gap-2 self-start rounded-lg border border-neutral-200 bg-white px-3 text-[13px] font-medium text-neutral-900 sm:w-[170px] sm:self-auto">
        <CalendarDays size={15} className="shrink-0 text-neutral-600 sm:hidden" />
        <select
          value={period}
          onChange={(event) => onPeriodChange(event.target.value as Period)}
          className="w-full cursor-pointer appearance-none bg-transparent pr-5 outline-none"
          aria-label="Filtrar período"
        >
          {Object.entries(periodLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 text-neutral-600" />
      </label>
    </header>
  );
}
