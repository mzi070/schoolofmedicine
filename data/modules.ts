export type Module = {
  code: string;
  name: string;
  cp: number;
  year: 1 | 2 | 3 | 4 | 5;
  /** Heading the module sits under on its year page. */
  group: string;
};

export const modules: Module[] = [
  // Year 1 — Semester 1
  { code: "FFFF1113", name: "Cellular Biomolecules", cp: 12, year: 1, group: "Semester 1 modules" },
  { code: "FFFF1213", name: "Tissues of Body", cp: 12, year: 1, group: "Semester 1 modules" },
  { code: "FFFF1333", name: "Membranes & Receptor", cp: 12, year: 1, group: "Semester 1 modules" },
  { code: "FFFF1412", name: "Metabolism", cp: 8, year: 1, group: "Semester 1 modules" },
  { code: "FFFF1813", name: "Personal & Professional Advancement IA", cp: 12, year: 1, group: "Semester 1 modules" },
  { code: "DHI113", name: "Dhivehi for Professionals", cp: 15, year: 1, group: "Semester 1 modules" },
  // Year 1 — Semester 2
  { code: "FFFF1312", name: "Human Genetics", cp: 8, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1244", name: "Infection & Immunity", cp: 16, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1223", name: "Mechanisms of Diseases", cp: 12, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1424", name: "Musculoskeletal System", cp: 16, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1521", name: "Clinical Science IB", cp: 4, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1622", name: "Medicine & Society I", cp: 8, year: 1, group: "Semester 2 modules" },
  { code: "FFFF1822", name: "Personal & Professional Advancement IB", cp: 8, year: 1, group: "Semester 2 modules" },

  // Year 2 — Semester 3
  { code: "FFFF2113", name: "Blood & Lymph", cp: 12, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2214", name: "Cardiovascular System", cp: 16, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2313", name: "Respiratory System", cp: 12, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2433", name: "Urinary System", cp: 12, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2511", name: "Clinical Science IIA", cp: 4, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2613", name: "Medicine & Society II", cp: 12, year: 2, group: "Semester 3 modules" },
  { code: "FFFF2812", name: "Personal & Professional Advancement IIA", cp: 8, year: 2, group: "Semester 3 modules" },
  // Year 2 — Semester 4
  { code: "FFFF2125", name: "Gastrointestinal & Hepatobiliary System", cp: 20, year: 2, group: "Semester 4 modules" },
  { code: "FFFF2242", name: "Endocrine System", cp: 8, year: 2, group: "Semester 4 modules" },
  { code: "FFFF2325", name: "Neuro Sciences", cp: 20, year: 2, group: "Semester 4 modules" },
  { code: "FFFF2443", name: "Reproductive System", cp: 12, year: 2, group: "Semester 4 modules" },
  { code: "FFFF2522", name: "Clinical Science IIB", cp: 8, year: 2, group: "Semester 4 modules" },
  { code: "FFFF2822", name: "Personal & Professional Advancement IIB", cp: 8, year: 2, group: "Semester 4 modules" },

  // Year 3
  { code: "FFFF3119", name: "Internal Medicine I", cp: 36, year: 3, group: "Postings and modules" },
  { code: "FFFF3129", name: "Surgery I", cp: 36, year: 3, group: "Postings and modules" },
  { code: "FFFF3115", name: "Family Medicine", cp: 20, year: 3, group: "Postings and modules" },
  { code: "FFFF3618", name: "Medicine & Society III", cp: 32, year: 3, group: "Postings and modules" },
  { code: "FFFF3512", name: "Radiology I", cp: 8, year: 3, group: "Postings and modules" },
  { code: "FFFF3922", name: "Elective Posting", cp: 8, year: 3, group: "Postings and modules" },
  { code: "FFFF3816", name: "Personal & Professional Advancement III", cp: 24, year: 3, group: "Postings and modules" },

  // Year 4 — specialty postings
  { code: "FFFF4118", name: "Psychiatry", cp: 32, year: 4, group: "Specialty postings" },
  { code: "FFFF4127", name: "Paediatrics I", cp: 28, year: 4, group: "Specialty postings" },
  { code: "FFFF4229", name: "Orthopaedics", cp: 36, year: 4, group: "Specialty postings" },
  { code: "FFFF4618", name: "Obstetrics & Gynaecology I", cp: 32, year: 4, group: "Specialty postings" },
  { code: "FFFF4212", name: "ORL-HNS", cp: 8, year: 4, group: "Specialty postings" },
  { code: "FFFF4322", name: "Ophthalmology", cp: 8, year: 4, group: "Specialty postings" },
  { code: "FFFF4422", name: "Anaesthesiology", cp: 8, year: 4, group: "Specialty postings" },
  { code: "FFFF4622", name: "Radiology II", cp: 8, year: 4, group: "Specialty postings" },
  { code: "FFFF4823", name: "Personal & Professional Advancement IV", cp: 12, year: 4, group: "Specialty postings" },
  // Year 4 — semesters 7 and 8
  { code: "FFFF4812", name: "Special Study Module I", cp: 8, year: 4, group: "Also in semesters 7 and 8" },
  { code: "FFFF4911", name: "Forensic Pathology I", cp: 4, year: 4, group: "Also in semesters 7 and 8" },
  { code: "FFFF4822", name: "Special Study Module II", cp: 8, year: 4, group: "Also in semesters 7 and 8" },
  { code: "FFFF4921", name: "Forensic Pathology II", cp: 4, year: 4, group: "Also in semesters 7 and 8" },

  // Year 5
  { code: "FFFF5329", name: "Internal Medicine II", cp: 36, year: 5, group: "Final year modules" },
  { code: "FFFF5119", name: "Surgery II", cp: 36, year: 5, group: "Final year modules" },
  { code: "FFFF5227", name: "Paediatrics II", cp: 28, year: 5, group: "Final year modules" },
  { code: "FFFF5419", name: "Obstetrics & Gynaecology II", cp: 36, year: 5, group: "Final year modules" },
  { code: "FFFF5212", name: "Emergency Medicine", cp: 8, year: 5, group: "Final year modules" },
  { code: "FFFF5522", name: "Family Medicine", cp: 8, year: 5, group: "Final year modules" },
  { code: "FFFF5816", name: "Special Study Module III — data collection, analysis & report writing", cp: 24, year: 5, group: "Final year modules" },
  { code: "FFFF5911", name: "Forensic Pathology III", cp: 4, year: 5, group: "Final year modules" },
  { code: "FFFF5823", name: "Personal & Professional Advancement V", cp: 12, year: 5, group: "Final year modules" },
];

export function modulesForYear(year: number) {
  return modules.filter((m) => m.year === year);
}

export function moduleGroupsForYear(year: number) {
  const list = modulesForYear(year);
  const groups: { title: string; items: Module[] }[] = [];
  for (const m of list) {
    const last = groups[groups.length - 1];
    if (last && last.title === m.group) last.items.push(m);
    else groups.push({ title: m.group, items: [m] });
  }
  return groups;
}
