import type { Metadata } from "next";
import ArchiveClient from "./ArchiveClient";

export const metadata: Metadata = {
  title: "Everything on the blog",
  description: "Search and filter every post, plus the 55 modules of the MD programme by name or code.",
};

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-12">
      <h1 className="mb-6 font-heading text-[clamp(1.95rem,5.6vw,2.875rem)] leading-[1.08] text-n900">Everything on the blog</h1>
      <ArchiveClient />
    </main>
  );
}
