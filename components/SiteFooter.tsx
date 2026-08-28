import Link from "next/link";
import { site } from "@/data/site";

const quickLinks = [
  { href: site.links.mnu, label: "MNU main site" },
  { href: site.links.schoolOfMedicine, label: "School of Medicine" },
  { href: site.links.studentPortal, label: "MNU student portal" },
  { href: site.links.mohePortal, label: "Kuri — MoHE portal" },
];

const social = [
  { href: "https://www.facebook.com/MaldivesNationalUniversity/", label: "Facebook" },
  { href: "https://www.instagram.com/maldivesnationaluniversity/", label: "Instagram" },
  { href: "https://twitter.com/MNUedu", label: "X" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-18 bg-n900 text-n200 dark:bg-[#141110]">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-heading text-2xl text-n100 dark:text-n900">{site.name}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.06em] text-n500">{site.school}</div>
          <p className="mt-4 max-w-[26em] text-sm leading-relaxed text-n500">
            Student-run. Not an official publication of the university. A Dhivehi version is on the way.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.06em] text-n500">Quick links</div>
          <div className="mt-4 grid gap-2 text-[15px]">
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="text-med-400 hover:text-med-300"
              >
                {l.label}
              </a>
            ))}
            <Link href="/about" className="text-med-400 hover:text-med-300">
              About this blog
            </Link>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.06em] text-n500">Follow</div>
          <div className="mt-4 grid gap-2 text-[15px]">
            {social.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" className="text-med-400 hover:text-med-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-n800 dark:border-n400">
        <div className="mx-auto max-w-[1120px] px-6 py-4 text-[13px] text-n500">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
