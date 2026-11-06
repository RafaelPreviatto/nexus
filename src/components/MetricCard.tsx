import { ArrowDownRight, ArrowUpRight, AlertCircle } from "lucide-react";
import type { Metric } from "../types";

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const trendStyles = {
    positive: "text-success",
    negative: "text-danger",
    warning: "text-amber-700"
  };

  const TrendIcon = metric.trend === "positive"
    ? ArrowUpRight
    : metric.trend === "negative"
      ? ArrowDownRight
      : AlertCircle;

  return (
    <article className="flex min-h-[148px] min-w-0 flex-col items-start gap-[14px] rounded-[10px] border border-neutral-200 bg-white p-[18px] shadow-subtle">
      <h2 className="text-[13px] font-medium text-neutral-600">{metric.label}</h2>
      <p className="text-[25px] font-bold leading-tight tracking-[-0.03em] text-neutral-900">
        {metric.value}
      </p>
      <p className={`flex items-center gap-1 text-xs font-medium ${trendStyles[metric.trend]}`}>
        <TrendIcon size={14} strokeWidth={2.2} />
        {metric.variation.replace(/^[↑↓]\s*/, "")}
      </p>
    </article>
  );
}
