"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Tag } from "@/components/ui";
import { modules } from "@/data/modules";
import { posts } from "@/data/posts";

const tagFilters = ["Year 1", "Year 2", "Clinical", "Portals", "Exams", "Placements"];

export default function ArchiveClient() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const q = query.trim().toLowerCase();

  const visiblePosts = useMemo(
    () =>
      posts.filter((p) => {
        const matchesTag = !tag || p.tags.includes(tag);
        const matchesQuery =
          q.length === 0 ||
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        return matchesTag && matchesQuery;
      }),
    [q, tag],
  );

  const visibleModules = useMemo(() => {
    if (q.length < 2) return [];
    return modules
      .filter((m) => m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q))
      .slice(0, 8);
  }, [q]);

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts, tags, modules…"
          className="w-full max-w-[420px] rounded-full border border-n400 bg-bg px-5 py-3 text-[15px] text-ink outline-none placeholder:text-n500 focus:border-med"
        />
        <div className="flex flex-wrap gap-2">
          {tagFilters.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? null : t)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                tag === t ? "bg-brand-200 text-brand-800" : "border border-n400 text-n700 hover:bg-med-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {visiblePosts.map((p) => (
          <Link
            key={p.slug}
            href={`/posts/${p.slug}`}
            className="grid items-center gap-6 border-t border-divider px-3 py-6 no-underline transition-colors last:border-b hover:bg-med-200 hover:no-underline sm:grid-cols-[minmax(90px,130px)_minmax(0,1fr)_auto]"
          >
            <span className="text-[13px] text-n600">{p.date}</span>
            <span>
              <span className="block font-heading text-[19px] sm:text-[21px] text-n900">{p.title}</span>
              <span className="mt-1 block text-sm text-n700">{p.summary}</span>
            </span>
            <Tag tone="neutral">{p.tag}</Tag>
          </Link>
        ))}
        {visiblePosts.length === 0 && (
          <p className="border-t border-divider py-6 text-[15px] text-n600">
            No posts match that. Clear the filter or try another word.
          </p>
        )}
      </div>

      {visibleModules.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 font-heading text-2xl text-n900">Modules matching “{query}”</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleModules.map((m) => (
              <Link key={m.code} href={`/years/${m.year}`} className="rounded-xl bg-surface p-4 no-underline hover:no-underline">
                <div className="text-xs font-bold tracking-[0.04em] text-med-700">{m.code}</div>
                <div className="mt-1 text-[15px] font-bold text-n900">{m.name}</div>
                <div className="mt-1 text-[13px] text-n600">
                  Year {m.year} · {m.cp} credit points
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
