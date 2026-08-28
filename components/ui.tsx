import type { ReactNode } from "react";

export function Tag({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "med" | "neutral" | "outline";
}) {
  const tones = {
    brand: "bg-brand-200 text-brand-800",
    med: "bg-med-200 text-med-800",
    neutral: "bg-surface text-n700",
    outline: "border border-n400 text-n700",
  } as const;
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mt-4 mb-3 font-heading text-[clamp(1.95rem,5.6vw,2.875rem)] leading-[1.08] text-n900 text-pretty">{children}</h1>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-4 font-heading text-[clamp(1.3rem,2.8vw,1.5rem)] text-n900">{children}</h3>;
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="max-w-[42em] text-[16px] sm:text-[17px] leading-relaxed text-n700">{children}</p>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-surface p-6 ${className}`}>{children}</div>
  );
}

export function DataTable({
  head,
  rows,
}: {
  head: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-[15px]">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-n400 pb-3 pr-4 text-xs uppercase tracking-[0.06em] text-n600"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j} className="border-b border-divider py-3 pr-4 text-n800">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GlanceList({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-4 grid gap-3 text-[15px]">
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between gap-3">
          <span className="text-n600">{r.label}</span>
          <span className="text-right font-bold text-n900">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
