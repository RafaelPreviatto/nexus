import { useState } from "react";
import {
  BarChart3,
  Boxes,
  CircleDollarSign,
  LayoutDashboard,
  Settings,
  Users,
  ShoppingCart,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const navigation = [
  { label: "Visão Geral", icon: LayoutDashboard },
  { label: "Vendas", icon: ShoppingCart },
  { label: "Estoque", icon: Boxes },
  { label: "Financeiro", icon: CircleDollarSign },
  { label: "Clientes", icon: Users },
  { label: "Configurações", icon: Settings }
];

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectItem = (label: string) => {
    onNavigate(label);
    setMobileOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 rounded-lg border border-neutral-200 bg-white p-2 text-neutral-900 shadow-subtle lg:hidden"
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[260px] shrink-0 flex-col border-r border-neutral-200 bg-white px-[22px] pb-6 pt-7 transition-transform lg:static lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-11 w-[216px] items-center gap-[10px]">
          <span className="text-[26px] font-bold leading-none text-brand-primary">N</span>
          <span className="text-[19px] font-bold text-neutral-900">Nexus ERP</span>
        </div>

        <nav className="mt-[34px] flex flex-col gap-[7px]" aria-label="Navegação principal">
          {navigation.map(({ label, icon: Icon }) => {
            const active = activeItem === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => selectItem(label)}
                className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-primary-light text-brand-primary"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto flex min-h-[58px] items-center gap-[10px]">
          <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-brand-primary-light text-xs font-semibold text-brand-primary">
            RP
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-neutral-900">Rafael Previatto</p>
            <p className="mt-[3px] text-[11px] text-neutral-600">Administrador</p>
          </div>
          <ChevronDown className="ml-auto text-neutral-600" size={15} />
        </div>
      </aside>
    </>
  );
}
