import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable, GlanceList, Lede, SectionHeading, Tag } from "@/components/ui";
import { moduleGroupsForYear } from "@/data/modules";
import { yearMeta, years } from "@/data/years";

export function generateStaticParams() {
  return years.map((y) => ({ year: String(y.year) }));
}

type Params = { params: Promise<{ year: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { year } = await params;
  const meta = yearMeta(Number(year));
  if (!meta) return { title: "Year not found" };
  return {
    title: meta.label,
    description: meta.blurb.slice(0, 155),
  };
}

export default async function YearPage({ params }: Params) {
  const { year } = await params;
  const n = Number(year);
  const meta = yearMeta(n);
  if (!meta) notFound();

  const groups = moduleGroupsForYear(n);

  return (
    <main className="mx-auto max-w-[1120px] px-6 py-12">
      <Tag tone="brand">Doctor of Medicine · Years 1–5</Tag>
      <h1 className="mt-4 mb-3 font-heading text-[clamp(1.95rem,5.6vw,2.875rem)] leading-[1.08] text-n900 text-pretty">
        What to expect, year by year
      </h1>
      <Lede>
        The MD is five years, ten semesters, 847 credit points, full-time at the Male&apos; campus. Every
        module below is core — there are no optional subjects except the elective posting in Year 3.
      </Lede>

      <div className="mt-8 flex flex-wrap gap-2 border-b border-divider pb-3">
        {years.map((y) => (
          <Link
            key={y.year}
            href={`/years/${y.year}`}
            className="relative rounded-full px-3 py-2.5 text-[15px] font-bold text-n800 no-underline transition-colors hover:bg-med-200 hover:text-n800 hover:no-underline sm:px-4 sm:py-3 sm:text-[16px]"
          >
            Year {y.year}
            {y.year === n && (
              <span className="absolute -bottom-4 left-1/2 h-[4px] w-3/5 -translate-x-1/2 rounded-full bg-brand" />
            )}
          </Link>
        ))}
      </div>

      <div className="grid items-start gap-10 pt-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <Tag tone={meta.stage === "Preclinical" ? "med" : "brand"}>{meta.stage}</Tag>
          <h2 className="mt-3 mb-3 font-heading text-[clamp(1.6rem,4.2vw,2.125rem)] text-n900">{meta.label}</h2>
          <p className="mb-12 max-w-[38em] text-[16px] leading-relaxed text-n700 sm:text-[17px]">{meta.blurb}</p>

          {groups.map((g) => (
            <section key={g.title} className="mb-8">
              <SectionHeading>{g.title}</SectionHeading>
              <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2">
                {g.items.map((m) => (
                  <div key={m.code} className="rounded-xl bg-surface p-4">
                    <div className="text-xs font-bold tracking-[0.04em] text-med-700">{m.code}</div>
                    <div className="mt-1 text-[15px] font-bold text-n900">{m.name}</div>
                    <div className="mt-1 text-[13px] text-n600">{m.cp} credit points</div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-12">
            <SectionHeading>What it costs</SectionHeading>
            <DataTable
              head={["Item", "Amount (MVR)"]}
              rows={meta.costRows.map((r) => [r.item, r.amount])}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-n600">
              Local student fees. Covered by the Free First Degree Scheme — international fees are twice the
              stated amount.
            </p>
          </section>

          <section className="mb-12">
            <SectionHeading>Assessment and exams</SectionHeading>
            <DataTable
              head={["Assessment", "Weighting", "When"]}
              rows={meta.assessment.map((a) => [a.name, a.weighting, a.when])}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-n600">
              Weightings are not published on the course page — they come from each module handbook, given out
              in the first week.
            </p>
          </section>

          <section className="mb-12">
            <SectionHeading>Tips from students</SectionHeading>
            <div className="rounded-2xl bg-med-200 p-6">
              <ul className="list-disc pl-5 text-[16px] leading-loose text-med-900">
                {meta.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </section>

          {meta.afterGraduation && (
            <section>
              <SectionHeading>After you graduate</SectionHeading>
              <p className="max-w-[38em] text-[17px] leading-relaxed text-n800">{meta.afterGraduation}</p>
            </section>
          )}
        </div>

        <aside className="grid gap-4 self-start lg:sticky lg:top-26">
          <div className="rounded-2xl bg-surface p-6">
            <div className="text-xs uppercase tracking-[0.06em] text-n600">
              {n === 1 ? "The programme" : `Year ${n} at a glance`}
            </div>
            <GlanceList
              rows={
                n === 1
                  ? [
                      { label: "Award", value: "MD" },
                      { label: "MNQF level", value: "7" },
                      { label: "Length", value: "5 yrs · 10 sem" },
                      { label: "Credit points", value: "847" },
                      { label: "Mode", value: "Full-time" },
                      { label: "Campus", value: "Male'" },
                      { label: "Selection", value: "Merit based" },
                      ...meta.glance,
                    ]
                  : meta.glance
              }
            />
            <Link
              href="/portals/mnu"
              className="mt-6 block rounded-full border border-n400 px-5 py-3 text-center font-semibold text-n800 no-underline transition-colors hover:border-med hover:bg-med-200 hover:text-n800 hover:no-underline"
            >
              Register on the portal
            </Link>
          </div>

          {n === 1 && (
            <div className="rounded-2xl bg-med-200 p-6">
              <div className="text-xs uppercase tracking-[0.06em] text-med-800">How you got in</div>
              <p className="mt-3 text-sm leading-relaxed text-med-900">
                General entry is BBB, ABC or AAC at A&apos; Level in Biology, Chemistry and Maths or Physics,
                plus five O&apos; Level passes including those subjects, plus O&apos; Level English above C or
                IELTS 6.5. Everyone also sits an interview and a medical examination.
              </p>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
