import type { Metadata } from "next";
import { GlanceList, Lede, PageTitle, Tag } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The university, the school, and this blog",
  description:
    "About The Maldives National University, its School of Medicine, and why this student-run guide exists.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-12">
      <Tag tone="med">About</Tag>
      <PageTitle>The university, the school, and this blog</PageTitle>
      <Lede>Unofficial, student-run, and written by people who have already sat the exams.</Lede>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div>
          <h2 className="mb-3 font-heading text-[clamp(1.4rem,3.2vw,1.7rem)] text-n900">The Maldives National University</h2>
          <p className="mb-10 text-[17px] leading-[1.7] text-n800">
            [A short paragraph on MNU — campuses, size, where the School of Medicine sits within it.] The
            university&apos;s main site is{" "}
            <a href={site.links.mnu} target="_blank" rel="noopener">
              mnu.edu.mv
            </a>
            .
          </p>

          <h2 className="mb-3 font-heading text-[clamp(1.4rem,3.2vw,1.7rem)] text-n900">School of Medicine</h2>
          <p className="mb-10 text-[17px] leading-[1.7] text-n800">
            The school runs the five-year Doctor of Medicine (MD) — MNQF Level 7, 847 credit points, full-time
            at the Male&apos; campus, with intakes advertised on the university&apos;s course pages. [Add a
            line on teaching hospitals and intake size.] The school&apos;s pages are at{" "}
            <a href={site.links.schoolOfMedicine} target="_blank" rel="noopener">
              mnu.edu.mv/sm
            </a>
            .
          </p>

          <h2 className="mb-3 font-heading text-[clamp(1.4rem,3.2vw,1.7rem)] text-n900">Why this blog exists</h2>
          <p className="mb-4 text-[17px] leading-[1.7] text-n800">
            Official pages tell you the rules. This one tells you what it is like — written by students who
            have already sat the exams and filled in the forms.
          </p>
          <p className="text-[15px] leading-[1.7] text-n600">
            Unofficial and student-run. Always check anything time-sensitive against the university&apos;s own
            pages.
          </p>
        </div>

        <div className="rounded-2xl bg-surface p-6">
          <div className="text-xs uppercase tracking-[0.06em] text-n600">Quick facts</div>
          <GlanceList
            rows={[
              { label: "Programme", value: "MD" },
              { label: "MNQF level", value: "7" },
              { label: "Length", value: "5 years · 10 semesters" },
              { label: "Credit points", value: "847" },
              { label: "Preclinical", value: "Years 1–2" },
              { label: "Clinical", value: "Years 3–5" },
              { label: "Campus", value: "Male'" },
              { label: "Language", value: "English" },
            ]}
          />
          <p className="mt-6 text-[13px] leading-relaxed text-n600">
            A Dhivehi version of this blog is on the way.
          </p>
        </div>
      </div>
    </main>
  );
}
