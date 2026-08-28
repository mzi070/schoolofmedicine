import type { Metadata } from "next";
import Link from "next/link";
import PortalSteps, { StuckBox, type Step } from "@/components/PortalSteps";
import { Tag } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Logging in to the Ministry of Higher Education portal",
  description:
    "Six steps for Kuri, the Ministry of Higher Education portal — documents, account creation, verification, loan and scholarship applications and tracking.",
};

const steps: Step[] = [
  {
    n: 1,
    title: "Get your documents together",
    body: "[ID card, certificates, transcripts — the list and accepted file formats.]",
    screenshot: "document checklist",
  },
  {
    n: 2,
    title: "Open the Ministry portal",
    body: (
      <>
        The Ministry&apos;s portal is Kuri —{" "}
        <a href={site.links.mohePortal} target="_blank" rel="noopener">
          kuri.gov.mv
        </a>
        . [Note where to find it from the Ministry&apos;s main site.]
      </>
    ),
    screenshot: "portal home",
  },
  {
    n: 3,
    title: "Create your account",
    body: "[Which national ID or verification method the portal uses to register you.]",
    screenshot: "sign up",
  },
  {
    n: 4,
    title: "Verify and sign in",
    body: "[How verification arrives — SMS or email — and how long the code lasts.]",
    screenshot: "verification",
  },
  {
    n: 5,
    title: "Apply for a loan or scholarship",
    body: "[Where applications live, the annual deadlines, and what medicine students specifically need to attach.]",
    screenshot: "application form",
  },
  {
    n: 6,
    title: "Track your application",
    body: "[What each status means, how long decisions take, and how to appeal or resubmit.]",
    screenshot: "status page",
  },
];

export default function MohePortalPage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-12">
      <Link href="/portals" className="font-semibold text-med-700 no-underline hover:underline">
        ← Portals
      </Link>
      <div className="mt-4">
        <Tag tone="med">Ministry · Step by step</Tag>
      </div>
      <h1 className="mt-4 mb-3 font-heading text-[clamp(1.9rem,5.4vw,2.75rem)] leading-[1.08] text-n900 text-pretty">
        Logging in to the Ministry of Higher Education portal
      </h1>
      <p className="mb-12 text-[17px] leading-relaxed text-n700">
        This is the national portal — loans, scholarships and course recognition. Different account from the
        MNU one.
      </p>

      <PortalSteps steps={steps} tone="med" slug="mohe" />

      <StuckBox tone="brand">
        <p className="mb-4 text-[16px] leading-relaxed text-brand-800">
          [Ministry contact — office, email, phone and hours.]
        </p>
        <Link
          href="/portals/mnu"
          className="inline-block rounded-full border border-brand-400 px-5 py-3 font-semibold text-brand-900 no-underline transition-colors hover:bg-brand-300 hover:no-underline"
        >
          ← Back to the MNU portal guide
        </Link>
      </StuckBox>
    </main>
  );
}
