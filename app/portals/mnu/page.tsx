import type { Metadata } from "next";
import Link from "next/link";
import PortalSteps, { StuckBox, type Step } from "@/components/PortalSteps";
import { Tag } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Logging in to the MNU student portal",
  description:
    "Six steps from your admission letter to a working MNU student portal account — student ID, first sign in, password, module registration and results.",
};

const steps: Step[] = [
  {
    n: 1,
    title: "Find your student ID",
    body: "[Where the ID appears on your admission letter or registration slip, and the format it takes.]",
    screenshot: "admission letter / ID",
  },
  {
    n: 2,
    title: "Open the portal",
    body: (
      <>
        The portal lives at{" "}
        <a href={site.links.studentPortal} target="_blank" rel="noopener">
          selfservice.mnu.edu.mv
        </a>
        . [Note anything about browsers, or being on or off campus.]
      </>
    ),
    screenshot: "portal home",
  },
  {
    n: 3,
    title: "First-time sign in",
    body: "[What the default username and password are, and where they were sent to you.]",
    screenshot: "login form",
  },
  {
    n: 4,
    title: "Set your own password",
    body: "[Password rules and how often it must be changed. Add the recovery email or phone at the same time.]",
    screenshot: "change password",
  },
  {
    n: 5,
    title: "Register your modules",
    body: "[Where module registration sits in the menu, the deadline each semester, and what happens if you miss it.]",
    screenshot: "module registration",
  },
  {
    n: 6,
    title: "Check email and results",
    body: "[How the student email links to the portal, and where results and fee statements appear.]",
    screenshot: "dashboard",
  },
];

export default function MnuPortalPage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-12">
      <Link href="/portals" className="font-semibold text-med-700 no-underline hover:underline">
        ← Portals
      </Link>
      <div className="mt-4">
        <Tag tone="brand">MNU · Step by step</Tag>
      </div>
      <h1 className="mt-4 mb-3 font-heading text-[clamp(1.9rem,5.4vw,2.75rem)] leading-[1.08] text-n900 text-pretty">
        Logging in to the MNU student portal
      </h1>
      <p className="mb-12 text-[17px] leading-relaxed text-n700">
        Six steps from your admission letter to a working account. Screenshots are placeholders — drop the real
        ones into <code className="rounded bg-surface px-1.5 py-0.5 text-[15px]">public/portals/</code>.
      </p>

      <PortalSteps steps={steps} tone="brand" slug="mnu" />

      <StuckBox tone="med">
        <p className="mb-4 text-[16px] leading-relaxed text-med-800">
          [Who to contact — IT helpdesk name, email, phone and opening hours.]
        </p>
        <Link
          href="/portals/mohe"
          className="inline-block rounded-full border border-med-400 px-5 py-3 font-semibold text-med-900 no-underline transition-colors hover:bg-med-300 hover:no-underline"
        >
          Next: the Ministry portal →
        </Link>
      </StuckBox>
    </main>
  );
}
