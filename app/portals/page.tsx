import type { Metadata } from "next";
import Link from "next/link";
import { Lede, PageTitle, Tag } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Two portals, two jobs",
  description:
    "The MNU student portal handles registration, results and timetables. The Ministry of Higher Education portal handles loans, scholarships and recognition.",
};

const portals = [
  {
    kicker: "The Maldives National University",
    title: "MNU student portal",
    body: "Module registration, semester results, fee statements, timetable and your student email. You will use this every week.",
    tags: ["Registration", "Results", "Timetable"],
    guide: "/portals/mnu",
    external: site.links.studentPortal,
    externalLabel: "selfservice.mnu.edu.mv ↗",
  },
  {
    kicker: "Ministry of Higher Education",
    title: "Kuri — MoHE student portal",
    body: "Student loan and scholarship applications, course approval and recognition, and your national student record.",
    tags: ["Loans", "Scholarships", "Recognition"],
    guide: "/portals/mohe",
    external: site.links.mohePortal,
    externalLabel: "kuri.gov.mv ↗",
  },
];

export default function PortalsPage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-12">
      <Tag tone="brand">Logins</Tag>
      <PageTitle>Two portals, two jobs</PageTitle>
      <Lede>
        The university portal is for your studies — registration, results, timetables. The Ministry portal is
        for the national side — scholarships, loans and recognition of your qualification.
      </Lede>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {portals.map((p) => (
          <div key={p.title} className="rounded-2xl bg-surface p-6">
            <div className="text-xs uppercase tracking-[0.06em] text-n600">{p.kicker}</div>
            <h2 className="mt-2 font-heading text-[clamp(1.4rem,3.2vw,1.7rem)] text-n900">{p.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-n700">{p.body}</p>
            <div className="my-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t} tone="neutral">
                  {t}
                </Tag>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={p.guide}
                className="rounded-full bg-brand px-5 py-3 font-semibold text-n100 no-underline transition-colors hover:bg-brand-600 hover:text-n100 hover:no-underline dark:text-n900"
              >
                6-step login guide
              </Link>
              <a
                href={p.external}
                target="_blank"
                rel="noopener"
                className="rounded-full px-5 py-3 font-semibold text-med-700 no-underline hover:bg-med-200 hover:no-underline"
              >
                {p.externalLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
