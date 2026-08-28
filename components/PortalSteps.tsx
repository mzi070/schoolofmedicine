import ImageSlot from "@/components/ImageSlot";
import { SectionHeading } from "@/components/ui";

export type Step = {
  n: number;
  title: string;
  body: React.ReactNode;
  screenshot: string;
};

export default function PortalSteps({
  steps,
  tone,
  slug,
}: {
  steps: Step[];
  tone: "brand" | "med";
  slug: string;
}) {
  const bubble = tone === "brand" ? "bg-brand text-n100 dark:text-n900" : "bg-med-600 text-n100 dark:text-n900";

  return (
    <div className="grid gap-12">
      {steps.map((s) => (
        <div key={s.n} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 sm:grid-cols-[56px_minmax(0,1fr)]">
          <div className={`grid h-11 w-11 place-items-center rounded-full font-heading text-xl sm:h-14 sm:w-14 sm:text-2xl ${bubble}`}>
            {s.n}
          </div>
          <div>
            <h2 className="mt-1.5 mb-3 font-heading text-[21px] sm:text-[25px] text-n900">{s.title}</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-n700">{s.body}</p>
            <ImageSlot
              alt={s.title}
              placeholder={`Screenshot — ${s.screenshot} (public/portals/${slug}-${s.n}.png)`}
              className="aspect-video w-full"
              sizes="(max-width: 900px) 100vw, 760px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function StuckBox({
  tone,
  children,
}: {
  tone: "brand" | "med";
  children: React.ReactNode;
}) {
  const box = tone === "brand" ? "bg-brand-200" : "bg-med-200";
  const heading = tone === "brand" ? "text-brand-900" : "text-med-900";
  return (
    <div className={`mt-12 rounded-2xl p-6 ${box}`}>
      <div className={heading}>
        <SectionHeading>Stuck?</SectionHeading>
      </div>
      {children}
    </div>
  );
}
