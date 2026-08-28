import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import { Lede, PageTitle, Tag } from "@/components/ui";
import { lecturers } from "@/data/lecturers";

export const metadata: Metadata = {
  title: "Who teaches you",
  description:
    "Lecturers at the MNU School of Medicine — names, departments, the modules they run and how to reach them.",
};

export default function LecturersPage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-12">
      <Tag tone="med">Faculty</Tag>
      <PageTitle>Who teaches you</PageTitle>
      <Lede>
        Names, departments and the modules each lecturer runs. Email them — they answer, and asking early is
        normal.
      </Lede>

      <div className="mt-12 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lecturers.map((l) => (
          <div key={l.slug} className="rounded-2xl bg-surface p-6 text-center">
            <ImageSlot
              src={l.photo}
              alt={l.name}
              placeholder={`Photo (public/lecturers/${l.slug}.jpg)`}
              rounded="circle"
              className="mx-auto mb-4 h-[108px] w-[108px]"
              sizes="108px"
            />
            <div className="text-[17px] font-bold text-n900">{l.name}</div>
            <div className="mt-0.5 text-sm text-n600">{l.title}</div>
            <div className="mt-3">
              <Tag tone="outline">{l.department}</Tag>
            </div>
            <div className="mt-3 text-[13px] text-n700">Teaches {l.teaches}</div>
            <a href={`mailto:${l.email}`} className="mt-3 inline-block text-[13px] font-semibold">
              {l.email}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
