export type YearMeta = {
  year: 1 | 2 | 3 | 4 | 5;
  label: string;
  short: string;
  stage: "Preclinical" | "Clinical";
  blurb: string;
  moduleCount: number;
  creditPoints: number;
  semesters: string;
  costRows: { item: string; amount: string }[];
  assessment: { name: string; weighting: string; when: string }[];
  tips: string[];
  glance: { label: string; value: string }[];
  afterGraduation?: string;
};

const PROGRAMME_ROW = { item: "Whole programme — 847 credit points", amount: "616,800" };

export const years: YearMeta[] = [
  {
    year: 1,
    label: "Year 1 — Foundations",
    short: "Foundations",
    stage: "Preclinical",
    blurb:
      "Two semesters of basic science, taught as integrated blocks rather than separate anatomy and physiology courses. You start at the level of the cell and work outward — biomolecules, tissues, membranes, metabolism — then move into genetics, infection, disease mechanisms and your first body system. Clinical Science IB and Medicine & Society I begin the professional strand you carry through all five years.",
    moduleCount: 13,
    creditPoints: 143,
    semesters: "1 and 2",
    costRows: [
      { item: "Semester 1 — 71 credit points", amount: "61,680" },
      { item: "Semester 2 — 72 credit points", amount: "61,680" },
      { item: "Year 1 total — 143 credit points", amount: "123,360" },
      PROGRAMME_ROW,
    ],
    assessment: [
      { name: "EoM — end of module", weighting: "[%]", when: "After each module" },
      { name: "OSCE — objective structured clinical examination", weighting: "[%]", when: "[Month]" },
      { name: "EoS — end of semester", weighting: "[%]", when: "End of each semester" },
    ],
    tips: [
      "[Tip — study habit that worked in first year.]",
      "[Tip — a mistake most first years make.]",
      "[Tip — what to sort out in the first month.]",
    ],
    glance: [
      { label: "Semesters", value: "1 and 2" },
      { label: "Modules", value: "13" },
      { label: "Credit points", value: "143" },
      { label: "Year fee", value: "123,360" },
      { label: "Stage", value: "Preclinical" },
    ],
  },
  {
    year: 2,
    label: "Year 2 — Systems",
    short: "Systems",
    stage: "Preclinical",
    blurb:
      "The whole body, system by system. Semester 3 covers blood, heart, lungs and kidneys; semester 4 covers gut and liver, endocrine, brain and reproduction. Neuro Sciences and the Gastrointestinal block are the two largest modules of the preclinical years, at 20 credit points each. Clinical Science IIA and IIB run alongside, building the examination skills you need before Year 3.",
    moduleCount: 13,
    creditPoints: 152,
    semesters: "3 and 4",
    costRows: [
      { item: "Semester 3 — 76 credit points", amount: "61,680" },
      { item: "Semester 4 — 76 credit points", amount: "61,680" },
      { item: "Year 2 total — 152 credit points", amount: "123,360" },
      PROGRAMME_ROW,
    ],
    assessment: [
      { name: "EoM — end of module", weighting: "[%]", when: "After each module" },
      { name: "OSCE — objective structured clinical examination", weighting: "[%]", when: "[Month]" },
      { name: "EoS — end of semester", weighting: "[%]", when: "End of each semester" },
    ],
    tips: [
      "[Tip — how to keep up when the content doubles.]",
      "[Tip — group study or solo?]",
      "[Tip — resource that carried the year.]",
    ],
    glance: [
      { label: "Semesters", value: "3 and 4" },
      { label: "Modules", value: "13" },
      { label: "Credit points", value: "152" },
      { label: "Biggest blocks", value: "GI · Neuro (20 each)" },
      { label: "Year fee", value: "123,360" },
      { label: "Stage", value: "Preclinical" },
    ],
  },
  {
    year: 3,
    label: "Year 3 — First postings",
    short: "First postings",
    stage: "Clinical",
    blurb:
      "The first clinical year, and the first one organised as a single year rather than two semesters. Internal Medicine I and Surgery I are the two big postings at 36 credit points each; Family Medicine takes you into community practice, Radiology I starts image interpretation, and the Elective Posting is the one place in the whole degree where you choose where you go.",
    moduleCount: 7,
    creditPoints: 164,
    semesters: "5 and 6",
    costRows: [
      { item: "Semester 5", amount: "61,680" },
      { item: "Semester 6", amount: "61,680" },
      { item: "Year 3 total — 164 credit points", amount: "123,360" },
      PROGRAMME_ROW,
    ],
    assessment: [
      { name: "[Logbook / portfolio]", weighting: "[%]", when: "Each posting" },
      { name: "[OSCE]", weighting: "[%]", when: "[Month]" },
      { name: "[Written paper]", weighting: "[%]", when: "[Month]" },
    ],
    tips: [
      "[Tip — what to carry on the ward.]",
      "[Tip — how to be useful on rounds.]",
      "[Tip — keeping the logbook from piling up.]",
    ],
    glance: [
      { label: "Semesters", value: "5 and 6" },
      { label: "Modules", value: "7" },
      { label: "Credit points", value: "164" },
      { label: "Big postings", value: "Medicine · Surgery (36 each)" },
      { label: "Elective", value: "Yes" },
      { label: "Year fee", value: "123,360" },
      { label: "Stage", value: "Clinical" },
    ],
  },
  {
    year: 4,
    label: "Year 4 — Specialties",
    short: "Specialties",
    stage: "Clinical",
    blurb:
      "The specialty year — nine modules, from Psychiatry and Paediatrics through Orthopaedics, ENT, Ophthalmology, Anaesthesiology and Obstetrics & Gynaecology. Semesters 7 and 8 also carry the Special Study Modules and Forensic Pathology, which are where your research work begins.",
    moduleCount: 13,
    creditPoints: 196,
    semesters: "7 and 8",
    costRows: [
      { item: "Semester 7", amount: "61,680" },
      { item: "Semester 8", amount: "61,680" },
      { item: "Year 4 total — 196 credit points", amount: "123,360" },
      PROGRAMME_ROW,
    ],
    assessment: [
      { name: "[Case presentations]", weighting: "[%]", when: "Each block" },
      { name: "[OSCE]", weighting: "[%]", when: "[Month]" },
      { name: "[Written papers]", weighting: "[%]", when: "[Month]" },
    ],
    tips: [
      "[Tip — balancing exam revision with placement hours.]",
      "[Tip — choosing an elective.]",
      "[Tip — asking for feedback early.]",
    ],
    glance: [
      { label: "Semesters", value: "7 and 8" },
      { label: "Specialties", value: "9 modules" },
      { label: "Credit points", value: "196" },
      { label: "Research", value: "SSM I & II" },
      { label: "Year fee", value: "123,360" },
      { label: "Stage", value: "Clinical" },
    ],
  },
  {
    year: 5,
    label: "Year 5 — Final year",
    short: "Final year",
    stage: "Clinical",
    blurb:
      "The second pass through the major disciplines, at a higher level: Internal Medicine II, Surgery II, Paediatrics II and Obstetrics & Gynaecology II, plus Emergency Medicine and a return to Family Medicine. Special Study Module III is the data collection, analysis and report writing project.",
    moduleCount: 9,
    creditPoints: 192,
    semesters: "9 and 10",
    costRows: [
      { item: "Semester 9", amount: "61,680" },
      { item: "Semester 10", amount: "61,680" },
      { item: "Year 5 total — 192 credit points", amount: "123,360" },
      PROGRAMME_ROW,
    ],
    assessment: [
      { name: "[Final written]", weighting: "[%]", when: "[Month]" },
      { name: "[Final OSCE / clinical]", weighting: "[%]", when: "[Month]" },
      { name: "[SSM III report]", weighting: "[%]", when: "[Month]" },
    ],
    tips: [
      "[Tip — planning finals revision around placement.]",
      "[Tip — internship applications and deadlines.]",
      "[Tip — documents to have ready before graduation.]",
    ],
    glance: [
      { label: "Semesters", value: "9 and 10" },
      { label: "Modules", value: "9" },
      { label: "Credit points", value: "192" },
      { label: "Project", value: "SSM III (24 CP)" },
      { label: "Year fee", value: "123,360" },
      { label: "Then", value: "1 yr internship" },
    ],
    afterGraduation:
      "Complete one year of internship and you can work as a Medical Officer in government hospitals and health centres, or in private hospitals and clinics. From there you can specialise, or join a medical college as teaching faculty or a research officer.",
  },
];

export function yearMeta(year: number) {
  return years.find((y) => y.year === year);
}
