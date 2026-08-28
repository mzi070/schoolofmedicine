export type Post = {
  slug: string;
  title: string;
  tag: string;
  tags: string[];
  summary: string;
  author: string;
  date: string;
  readingMinutes: number;
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "your-first-eight-weeks",
    title: "Your first eight weeks, honestly",
    tag: "Year 1",
    tags: ["Year 1", "Orientation", "Study"],
    summary: "[Short summary — what orientation week covers and what to bring on day one.]",
    author: "[Author]",
    date: "[Date]",
    readingMinutes: 6,
  },
  {
    slug: "locked-out-of-the-student-portal",
    title: "Locked out of the student portal?",
    tag: "Portals",
    tags: ["Portals", "Logins"],
    summary: "[Short summary — the three reasons a login usually fails and who to contact.]",
    author: "[Author]",
    date: "[Date]",
    readingMinutes: 4,
  },
  {
    slug: "lecture-hall-to-ward",
    title: "Moving from lecture hall to ward",
    tag: "Clinical years",
    tags: ["Clinical", "Year 3", "Placements"],
    summary: "[Short summary — what changes when Year 3 starts and how to prepare for it.]",
    author: "[Author]",
    date: "[Date]",
    readingMinutes: 7,
  },
];

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
