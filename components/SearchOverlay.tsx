"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { modules } from "@/data/modules";
import { posts } from "@/data/posts";

type Result =
  | { kind: "post"; href: string; title: string; meta: string }
  | { kind: "module"; href: string; title: string; meta: string };

/** Matches post titles, post tags, and module names and codes. */
function search(query: string): Result[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const postHits: Result[] = posts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    )
    .map((p) => ({ kind: "post", href: `/posts/${p.slug}`, title: p.title, meta: p.tags.join(" · ") }));

  const moduleHits: Result[] = modules
    .filter((m) => m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q))
    .map((m) => ({
      kind: "module",
      href: `/years/${m.year}`,
      title: m.name,
      meta: `${m.code} · Year ${m.year} · ${m.cp} CP`,
    }));

  return [...postHits, ...moduleHits].slice(0, 12);
}

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery("");
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the blog"
        className="grid h-[38px] w-[38px] place-items-center rounded-full border border-n400 text-n800 transition-colors hover:border-med hover:bg-med-200"
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-n900/45 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="mx-auto max-w-[620px] overflow-hidden rounded-2xl bg-bg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-divider px-5 py-4">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" className="text-n600">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, tags, modules…"
                className="w-full bg-transparent text-[17px] text-ink outline-none placeholder:text-n500"
              />
              <kbd className="rounded border border-n400 px-2 py-1 text-[11px] text-n600">Esc</kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto">
              {query.trim().length < 2 && (
                <p className="px-5 py-6 text-sm text-n600">
                  Type at least two characters. Search covers post titles and tags, and module names and codes.
                </p>
              )}
              {query.trim().length >= 2 && results.length === 0 && (
                <p className="px-5 py-6 text-sm text-n600">Nothing matched “{query}”.</p>
              )}
              {results.map((r) => (
                <Link
                  key={`${r.kind}-${r.title}-${r.meta}`}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-4 border-b border-divider px-5 py-4 no-underline transition-colors last:border-0 hover:bg-med-200"
                >
                  <span>
                    <span className="block text-[15px] font-bold text-n900">{r.title}</span>
                    <span className="mt-0.5 block text-[13px] text-n600">{r.meta}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[11px] uppercase tracking-wide text-n600">
                    {r.kind}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
