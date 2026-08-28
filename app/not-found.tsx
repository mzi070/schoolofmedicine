import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-24 text-center">
      <h1 className="font-heading text-[clamp(1.95rem,5.6vw,2.875rem)] leading-tight text-n900">Nothing here</h1>
      <p className="mx-auto mt-4 max-w-[32em] text-[17px] leading-relaxed text-n700">
        That page does not exist. It may have moved, or the link may be out of date.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand px-5 py-3 font-semibold text-white no-underline hover:bg-brand-600 hover:text-white hover:no-underline"
      >
        Back to the blog
      </Link>
    </main>
  );
}
