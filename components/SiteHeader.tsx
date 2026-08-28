"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import SearchOverlay from "./SearchOverlay";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const pathname = usePathname();

  function active(item: (typeof nav)[number]) {
    const base = item.match ?? item.href;
    if (base === "/") return pathname === "/";
    if (base === "/portals") return pathname.startsWith("/portals");
    return pathname.startsWith(base);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-divider bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-6 gap-y-3 px-6 py-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand font-heading text-[17px] text-n100 dark:text-n900">
            DFD
          </span>
          <span>
            <span className="block font-heading text-[19px] leading-tight sm:text-[21px] text-n900">{site.name}</span>
            <span className="mt-[3px] block text-xs uppercase tracking-[0.06em] text-n600">{site.school}</span>
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-2.5 py-2 text-[14px] font-semibold sm:px-3 sm:text-[15px] text-n800 no-underline transition-colors hover:bg-med-200 hover:text-n800 hover:no-underline"
            >
              {item.label}
              {active(item) && (
                <span className="absolute -bottom-0.5 left-1/2 h-[3px] w-[18px] -translate-x-1/2 rounded-full bg-brand" />
              )}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <SearchOverlay />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
