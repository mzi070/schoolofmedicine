import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { Tag } from "@/components/ui";
import { posts } from "@/data/posts";
import { years } from "@/data/years";

const startHere = [
  {
    kicker: "Years 1–5",
    title: "What each year expects",
    body: "Modules, credit points, fees, assessments and the things seniors wish they had known — split into preclinical and clinical.",
    cta: "Open the year guide →",
    href: "/years/1",
    tone: "brand" as const,
    icon: (
      <>
        <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z" />
        <path d="M8 7h6" />
      </>
    ),
  },
  {
    kicker: "Who teaches you",
    title: "The lecturer directory",
    body: "Names, departments, the modules they run and where to email them when you are stuck.",
    cta: "Meet the faculty →",
    href: "/lecturers",
    tone: "med" as const,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),
  },
  {
    kicker: "Logins",
    title: "Both student portals",
    body: "Step-by-step for the MNU student portal and the Ministry of Higher Education portal.",
    cta: "Get logged in →",
    href: "/portals",
    tone: "brand" as const,
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 pt-10 pb-12 sm:pt-16 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Tag tone="med">For new Year 1s</Tag>
          <h1 className="mt-4 font-heading text-[clamp(2.25rem,7vw,3.875rem)] leading-[1.05] text-n900 text-pretty">
            Made by students,
            <br />
            for students.
          </h1>
          <p className="mt-4 max-w-[34em] text-[17px] leading-relaxed text-n700 sm:text-[19px]">
            Everything nobody tells you before you start medicine at MNU — what each year actually asks of
            you, who teaches it, and how to get into the portals you will live in for the next five years.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/years/1"
              className="rounded-full bg-brand px-5 py-3 font-semibold text-n100 no-underline transition-colors hover:bg-brand-600 hover:text-n100 hover:no-underline dark:text-n900"
            >
              Start with Year 1
            </Link>
            <Link
              href="/portals"
              className="rounded-full border border-n400 px-5 py-3 font-semibold text-n800 no-underline transition-colors hover:border-med hover:bg-med-200 hover:text-n800 hover:no-underline"
            >
              Portal logins
            </Link>
          </div>
        </div>
        <ImageSlot
          src="/hero.jpg"
          alt="MEDiCOS — Consortium of Medical Students"
          placeholder="Hero photo (public/hero.jpg)"
          rounded="circle"
          fit="contain"
          background="bg-white"
          className="mx-auto aspect-square w-full max-w-[420px]"
          sizes="(max-width: 768px) 90vw, 420px"
          priority
        />
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-12">
        <h2 className="mb-6 font-heading text-[clamp(1.5rem,3.6vw,1.875rem)] text-n900">Start here</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {startHere.map((c) => (
            <div key={c.title} className="rounded-2xl bg-surface p-6">
              <div
                className={`mb-4 grid h-[46px] w-[46px] place-items-center rounded-full ${
                  c.tone === "brand" ? "bg-brand-200 text-brand-700" : "bg-med-200 text-med-700"
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  {c.icon}
                </svg>
              </div>
              <div className="text-xs uppercase tracking-[0.06em] text-n600">{c.kicker}</div>
              <h3 className="mt-2 font-heading text-[21px] text-n900">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-n700">{c.body}</p>
              <Link href={c.href} className="mt-4 inline-block font-semibold text-med-700 no-underline hover:underline">
                {c.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-12">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-heading text-[clamp(1.5rem,3.6vw,1.875rem)] text-n900">Latest posts</h2>
          <Link href="/archive" className="font-semibold text-med-700 no-underline hover:underline">
            All posts
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug}>
              <ImageSlot
                src={p.image}
                alt={p.title}
                placeholder={`Post image (public/posts/${p.slug}.jpg)`}
                className="aspect-[4/3] w-full"
              />
              <div className="mt-4">
                <Tag tone={p.tag === "Portals" ? "med" : p.tag === "Year 1" ? "brand" : "neutral"}>{p.tag}</Tag>
                <h3 className="mt-3 mb-2 font-heading text-[21px] sm:text-[23px] leading-tight text-n900">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-n700">{p.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-n600">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readingMinutes} min read</span>
                </div>
                <Link href={`/posts/${p.slug}`} className="mt-2 inline-block font-semibold text-med-700 no-underline hover:underline">
                  Read post →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-med-200">
        <div className="mx-auto max-w-[1120px] px-6 py-10 sm:py-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.6vw,1.875rem)] text-med-900">Five years, two halves</h2>
          <p className="mt-3 mb-6 max-w-[42em] text-[16px] leading-relaxed text-med-800">
            Years 1 and 2 are preclinical, taught in semesters — the science, from biomolecules to whole body
            systems. Years 3 to 5 are clinical and organised by year — you are in hospital, on posting,
            learning on real patients.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {years.map((y) => (
              <Link
                key={y.year}
                href={`/years/${y.year}`}
                className="rounded-2xl bg-n100 p-4 no-underline transition-colors hover:bg-bg hover:no-underline"
              >
                <div className={`font-heading text-[26px] ${y.stage === "Preclinical" ? "text-brand-800" : "text-med-800"}`}>
                  {String(y.year).padStart(2, "0")}
                </div>
                <div className="mt-2 text-[15px] font-bold text-n900">{y.short}</div>
                <div className="mt-0.5 text-[13px] text-n600">{y.stage}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
