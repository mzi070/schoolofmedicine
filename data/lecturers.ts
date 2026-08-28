export type Lecturer = {
  slug: string;
  name: string;
  title: string;
  department: string;
  teaches: string;
  email: string;
  /** Path under /public. Drop a real file here and it appears. */
  photo?: string;
};

/** Placeholder faculty. Replace names, titles and emails with the real directory. */
export const lecturers: Lecturer[] = [
  { slug: "lecturer-1", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-2", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-3", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-4", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-5", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-6", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-7", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
  { slug: "lecturer-8", name: "[Lecturer name]", title: "[Title]", department: "[Department]", teaches: "[Module name]", email: "name@mnu.edu.mv" },
];
