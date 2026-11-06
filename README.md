# Nexus ERP Dashboard

Dashboard React + TypeScript + Tailwind CSS baseada no frame `ERP - Overview Dashboard` do Figma.

## Requisitos

- Node.js 18.18+ (recomendado Node.js 20 LTS)
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente http://localhost:5173).

## Build de produção

```bash
npm run build
npm run preview
```

## Componentes

- `src/components/Sidebar.tsx`: navegação lateral com estado ativo e menu responsivo.
- `src/components/Header.tsx`: título, data dinâmica e filtro de período.
- `src/components/MetricCard.tsx`: cards de indicadores com variações coloridas.
- `src/components/RecentOrdersTable.tsx`: tabela, busca em tempo real, filtro por status e exportação CSV.
- `src/App.tsx`: composição da página e estado geral.
- `src/data/mockData.ts`: dados demonstrativos.

## Design tokens aplicados

| Token | Valor |
|---|---|
| neutral-900 | `#0F172A` |
| neutral-600 | `#475569` |
| neutral-200 | `#E2E8F0` |
| neutral-100 | `#F1F5F9` |
| neutral-50 | `#F8FAFC` |
| brand-primary | `#2563EB` |
| brand-primary-light | `#EFF6FF` |
| success | `#16A34A` |
| danger | `#DC2626` |
| Fonte | Inter |
| Sidebar | 260 px |
| Padding do conteúdo | 32 px em desktop |
| Gap principal | 24 px |
| Gap dos KPIs | 16 px |
| Padding dos KPIs | 18 px |
