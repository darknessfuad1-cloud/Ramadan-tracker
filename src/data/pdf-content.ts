import rawPages from "@/data/pdf-extracted-text.json";

export interface PdfPageText {
  page: number;
  text: string;
}

export const PDF_TEXT_PAGES = rawPages as PdfPageText[];

function sanitizeOcrText(text: string): string {
  return text
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getPdfPageText(page: number): string {
  const found = PDF_TEXT_PAGES.find((item) => item.page === page);
  return found ? sanitizeOcrText(found.text) : "";
}

export interface PlannerSection {
  id: string;
  title: {
    en: string;
    bn: string;
    ar: string;
  };
  pages: number[];
}

export const PLANNER_SECTIONS: PlannerSection[] = [
  {
    id: "front",
    title: {
      en: "Cover & Publication Information",
      bn: "কভার ও প্রকাশনা তথ্য",
      ar: "الغلاف ومعلومات النشر"
    },
    pages: [1, 2, 3]
  },
  {
    id: "instructions",
    title: {
      en: "Planner Instructions",
      bn: "প্ল্যানার নির্দেশিকা",
      ar: "إرشادات المخطط"
    },
    pages: [4, 5]
  },
  {
    id: "daily",
    title: {
      en: "Daily Planner Pages",
      bn: "দৈনিক প্ল্যানার পৃষ্ঠা",
      ar: "صفحات المخطط اليومي"
    },
    pages: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34,
      35, 36
    ]
  },
  {
    id: "qadr",
    title: {
      en: "Laylatul Qadr & I'tikaf",
      bn: "লাইলাতুল কদর ও ইতিকাফ",
      ar: "ليلة القدر والاعتكاف"
    },
    pages: [26]
  },
  {
    id: "eid",
    title: {
      en: "Eid Preparation",
      bn: "ঈদের প্রস্তুতি",
      ar: "الاستعداد للعيد"
    },
    pages: [37]
  },
  {
    id: "review",
    title: {
      en: "Ramadan Review",
      bn: "রমাদান পর্যালোচনা",
      ar: "مراجعة رمضان"
    },
    pages: [38]
  },
  {
    id: "foundation",
    title: {
      en: "Foundation & Donation Information",
      bn: "ফাউন্ডেশন ও অনুদান তথ্য",
      ar: "معلومات المؤسسة والتبرع"
    },
    pages: [39, 40, 41]
  },
  {
    id: "closing",
    title: {
      en: "Closing Pages",
      bn: "সমাপনী পৃষ্ঠা",
      ar: "صفحات ختامية"
    },
    pages: [42, 43]
  }
];
