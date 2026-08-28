import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import { Tag } from "@/components/ui";
import { postBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-[760px] px-6 py-12">
      <Link href="/archive" className="font-semibold text-med-700 no-underline hover:underline">
        ← All posts
      </Link>
      <div className="mt-4">
        <Tag tone={post.tag === "Portals" ? "med" : "brand"}>{post.tag}</Tag>
      </div>
      <h1 className="mt-4 mb-4 font-heading text-[clamp(2rem,6vw,3rem)] leading-[1.08] text-n900 text-pretty">{post.title}</h1>

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-n600">
        <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-brand-200 font-heading text-base text-brand-800">
          {post.author.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "A"}
        </span>
        <span className="font-semibold text-n800">{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      <ImageSlot
        src={post.image}
        alt={post.title}
        placeholder={`Lead image (public/posts/${post.slug}.jpg)`}
        className="mb-6 aspect-video w-full"
        sizes="(max-width: 800px) 100vw, 760px"
        priority
      />

      <p className="mb-6 text-[18px] font-semibold leading-relaxed text-n800 sm:text-[20px]">
        [Standfirst — one or two sentences setting up the post, a little larger than the body.]
      </p>
      <p className="mb-4 text-[17px] leading-[1.75] text-n800">
        [Body paragraph. Keep the voice like a senior student talking to a first year — plain, specific, no
        lecturing.]
      </p>
      <p className="mb-6 text-[17px] leading-[1.75] text-n800">[Body paragraph.]</p>

      <h2 className="mt-12 mb-3 font-heading text-[clamp(1.45rem,3.4vw,1.75rem)] text-n900">[Section heading]</h2>
      <p className="mb-4 text-[17px] leading-[1.75] text-n800">[Body paragraph.]</p>
      <ul className="mb-6 list-disc pl-5 text-[17px] leading-[1.75] text-n800">
        <li>[List item.]</li>
        <li>[List item.]</li>
        <li>[List item.]</li>
      </ul>

      <blockquote className="my-12 rounded-2xl bg-med-200 p-6 font-heading text-[20px] leading-tight text-med-900 sm:text-[23px]">
        [A pull quote — something a student actually said.]
      </blockquote>

      <h2 className="mt-12 mb-3 font-heading text-[clamp(1.45rem,3.4vw,1.75rem)] text-n900">[Section heading]</h2>
      <p className="mb-12 text-[17px] leading-[1.75] text-n800">[Body paragraph.]</p>

      <div className="flex flex-wrap items-center gap-2 border-t border-divider pt-6">
        <span className="mr-2 text-[13px] text-n600">Tagged</span>
        {post.tags.map((t) => (
          <Tag key={t} tone="outline">
            {t}
          </Tag>
        ))}
      </div>
    </main>
  );
}
