import { AppView, ChecklistKey, Locale, SalahKey } from "@/types/planner";

type Dictionary = {
  appTitle: string;
  appSubtitle: string;
  hijriLabel: string;
  todayProgress: string;
  totalProgress: string;
  streak: string;
  days: string;
  day: string;
  page: string;
  dashboardOverview: string;
  dashboardHint: string;
  bookStructure: string;
  dailyPlanner: string;
  dailyReference: string;
  dayTask: string;
  dayTaskDone: string;
  autoDayMode: string;
  manualDayMode: string;
  quranPlanTitle: string;
  hadithPlanTitle: string;
  verses: string;
  markQuranDone: string;
  markHadithDone: string;
  arabicText: string;
  transliteration: string;
  banglaMeaning: string;
  englishMeaning: string;
  reference: string;
  ayahNote: string;
  hadithNote: string;
  duaNote: string;
  reflection: string;
  extraNote: string;
  notesPlaceholder: string;
  saveStatus: string;
  salahTracker: string;
  quranTracker: string;
  dailyChecklist: string;
  allahNames: string;
  ayat: string;
  pages: string;
  para: string;
  farz: string;
  sunnah: string;
  calendarView: string;
  goals: string;
  beforeRamadan: string;
  duringRamadan: string;
  addGoalPlaceholder: string;
  add: string;
  review: string;
  gains: string;
  shortcomings: string;
  nextYearPlan: string;
  specialNights: string;
  laylatulQadrGuide: string;
  itikaf: string;
  qadrDua: string;
  eidPrep: string;
  eidPrepChecklist: string;
  resources: string;
  originalBook: string;
  exportPdf: string;
  theme: string;
  themeLight: string;
  themeDark: string;
  language: string;
  ramadanStartDate: string;
  setToday: string;
  complete: string;
  incomplete: string;
  progressByDay: string;
  openDay: string;
  noReflectionYet: string;
  reflectionTimeline: string;
  printHint: string;
  greeting: string;
  donationsInfo: string;
  bookIntro: string;
  resetDay: string;
  loading: string;
};

const dictionary: Record<Locale, Dictionary> = {
  en: {
    appTitle: "Ramadan Planner 2026",
    appSubtitle: "Digital Ibadah Growth System",
    hijriLabel: "Ramadan 1447 AH",
    todayProgress: "Today Progress",
    totalProgress: "Total Ramadan Completion",
    streak: "Current Streak",
    days: "days",
    day: "Day",
    page: "Page",
    dashboardOverview: "Dashboard Overview",
    dashboardHint: "Track your worship, habits, and goals consistently across all 30 days.",
    bookStructure: "Planner Structure",
    dailyPlanner: "Daily Planner",
    dailyReference: "Original Daily Page",
    dayTask: "Day Focus Task",
    dayTaskDone: "Mark today task complete",
    autoDayMode: "Day is synced automatically by Bangladesh time (Asia/Dhaka).",
    manualDayMode: "Outside Ramadan period by Bangladesh time: manual day selection is active.",
    quranPlanTitle: "30 Days Quran Plan",
    hadithPlanTitle: "30 Days Hadith Plan",
    verses: "verses",
    markQuranDone: "Mark today's Surah as completed",
    markHadithDone: "Mark today's Hadith as completed",
    arabicText: "Arabic Text",
    transliteration: "Transliteration",
    banglaMeaning: "Bangla Meaning",
    englishMeaning: "English Meaning",
    reference: "Reference",
    ayahNote: "Ayah Reflection",
    hadithNote: "Hadith Reflection",
    duaNote: "Dua Focus",
    reflection: "Daily Reflection Notes",
    extraNote: "Special Note",
    notesPlaceholder: "Write your thoughts, lessons, and intentions...",
    saveStatus: "Saved locally",
    salahTracker: "Salah Tracker",
    quranTracker: "Quran Tracker",
    dailyChecklist: "Daily Checklist",
    allahNames: "Allah Names",
    ayat: "Ayat",
    pages: "Pages",
    para: "Para",
    farz: "Farz",
    sunnah: "Sunnah",
    calendarView: "30-Day Calendar View",
    goals: "Goal Setting",
    beforeRamadan: "Before Ramadan Goals",
    duringRamadan: "During Ramadan Goals",
    addGoalPlaceholder: "Add a new goal...",
    add: "Add",
    review: "End of Ramadan Review",
    gains: "Achievements",
    shortcomings: "Shortcomings",
    nextYearPlan: "Plan for Next Ramadan",
    specialNights: "Laylatul Qadr & Last 10 Nights",
    laylatulQadrGuide: "Laylatul Qadr and I'tikaf Guidance",
    itikaf: "I'tikaf Night Tracker",
    qadrDua: "Qadr Dua Practice",
    eidPrep: "Eid Preparation Sunnah",
    eidPrepChecklist: "Eid Sunnah Checklist",
    resources: "Foundation & Resource Pages",
    originalBook: "Full Planner Text Archive",
    exportPdf: "Export as PDF",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    language: "Language",
    ramadanStartDate: "Ramadan Start Date",
    setToday: "Jump to Today",
    complete: "Complete",
    incomplete: "Incomplete",
    progressByDay: "Progress by Day",
    openDay: "Open day",
    noReflectionYet: "No reflections written yet.",
    reflectionTimeline: "Reflection Timeline",
    printHint: "Use browser print dialog and choose Save as PDF.",
    greeting: "May Allah accept your fasting and worship.",
    donationsInfo: "Text extracted from the original planner pages is included below.",
    bookIntro: "All extracted text from the 43-page PDF is organized below as structured content.",
    resetDay: "Reset Day",
    loading: "Loading Ramadan Planner..."
  },
  bn: {
    appTitle: "রমাদান প্ল্যানার ২০২৬",
    appSubtitle: "মাসব্যাপী আত্মশুদ্ধির ডিজিটাল সিস্টেম",
    hijriLabel: "রমাদান ১৪৪৭ হিজরি",
    todayProgress: "আজকের অগ্রগতি",
    totalProgress: "মোট রমাদান সম্পন্ন",
    streak: "চলমান ধারাবাহিকতা",
    days: "দিন",
    day: "দিন",
    page: "পৃষ্ঠা",
    dashboardOverview: "ড্যাশবোর্ড সারাংশ",
    dashboardHint: "৩০ দিনের ইবাদত, অভ্যাস ও লক্ষ্য ধারাবাহিকভাবে ট্র্যাক করুন।",
    bookStructure: "প্ল্যানারের কাঠামো",
    dailyPlanner: "দৈনিক প্ল্যানার",
    dailyReference: "মূল দৈনিক পেজ",
    dayTask: "দিনের কাজ",
    dayTaskDone: "আজকের কাজ সম্পন্ন হয়েছে",
    autoDayMode: "বাংলাদেশ সময় (Asia/Dhaka) অনুযায়ী দিন স্বয়ংক্রিয়ভাবে নির্বাচন করা হয়েছে।",
    manualDayMode: "বাংলাদেশ সময় অনুযায়ী রমাদানের বাইরে: দিন ম্যানুয়ালি নির্বাচন করুন।",
    quranPlanTitle: "৩০ দিনের কুরআন প্ল্যান",
    hadithPlanTitle: "৩০ দিনের হাদীস প্ল্যান",
    verses: "আয়াত",
    markQuranDone: "আজকের সূরা সম্পন্ন হয়েছে",
    markHadithDone: "আজকের হাদীস পড়া সম্পন্ন হয়েছে",
    arabicText: "আরবি পাঠ",
    transliteration: "উচ্চারণ (Transliteration)",
    banglaMeaning: "বাংলা অর্থ",
    englishMeaning: "ইংরেজি অর্থ",
    reference: "সূত্র",
    ayahNote: "দিনের আয়াত ভাবনা",
    hadithNote: "দিনের হাদীস ভাবনা",
    duaNote: "দিনের দুআ অনুশীলন",
    reflection: "দৈনিক আত্ম-সমালোচনা",
    extraNote: "বিশেষ অর্জন",
    notesPlaceholder: "আজকের শিক্ষা, অনুভূতি ও পরিকল্পনা লিখুন...",
    saveStatus: "লোকাল স্টোরেজে সংরক্ষিত",
    salahTracker: "সালাত ট্র্যাকার",
    quranTracker: "কুরআন ট্র্যাকার",
    dailyChecklist: "দৈনিক চেকলিস্ট",
    allahNames: "আল্লাহর নাম",
    ayat: "আয়াত",
    pages: "পৃষ্ঠা",
    para: "পারা",
    farz: "ফরজ",
    sunnah: "সুন্নত",
    calendarView: "৩০ দিনের ক্যালেন্ডার ভিউ",
    goals: "লক্ষ্য নির্ধারণ",
    beforeRamadan: "রমাদানের আগে লক্ষ্য",
    duringRamadan: "রমাদান চলাকালীন লক্ষ্য",
    addGoalPlaceholder: "নতুন লক্ষ্য লিখুন...",
    add: "যোগ করুন",
    review: "রমাদান পর্যালোচনা",
    gains: "প্রাপ্তি",
    shortcomings: "অপ্রাপ্তি",
    nextYearPlan: "পরবর্তী বছরের পরিকল্পনা",
    specialNights: "লাইলাতুল কদর ও শেষ দশক",
    laylatulQadrGuide: "লাইলাতুল কদর ও ইতিকাফ নির্দেশনা",
    itikaf: "ইতিকাফ রাত ট্র্যাকার",
    qadrDua: "কদরের দুআ অনুশীলন",
    eidPrep: "ঈদের প্রস্তুতির সুন্নাহ",
    eidPrepChecklist: "ঈদের সুন্নাহ চেকলিস্ট",
    resources: "ফাউন্ডেশন ও রিসোর্স পেজ",
    originalBook: "সম্পূর্ণ প্ল্যানার টেক্সট আর্কাইভ",
    exportPdf: "PDF এক্সপোর্ট",
    theme: "থিম",
    themeLight: "লাইট",
    themeDark: "ডার্ক",
    language: "ভাষা",
    ramadanStartDate: "রমাদান শুরুর তারিখ",
    setToday: "আজকের দিনে যান",
    complete: "সম্পন্ন",
    incomplete: "অসম্পন্ন",
    progressByDay: "দিনভিত্তিক অগ্রগতি",
    openDay: "দিন খুলুন",
    noReflectionYet: "এখনও কোনো রিফ্লেকশন লেখা হয়নি।",
    reflectionTimeline: "রিফ্লেকশন টাইমলাইন",
    printHint: "ব্রাউজারের প্রিন্ট অপশন থেকে Save as PDF নির্বাচন করুন।",
    greeting: "আল্লাহ আপনার সিয়াম ও ইবাদত কবুল করুন।",
    donationsInfo: "মূল প্ল্যানার থেকে এক্সট্র্যাক্ট করা টেক্সট এখানে সংযুক্ত আছে।",
    bookIntro: "৪৩ পৃষ্ঠার PDF থেকে এক্সট্র্যাক্ট করা সব টেক্সট নিচে গঠিতভাবে সাজানো হয়েছে।",
    resetDay: "দিন রিসেট",
    loading: "রমাদান প্ল্যানার লোড হচ্ছে..."
  },
  ar: {
    appTitle: "مخطط رمضان 2026",
    appSubtitle: "منظومة رقمية للنمو الإيماني",
    hijriLabel: "رمضان 1447 هـ",
    todayProgress: "إنجاز اليوم",
    totalProgress: "نسبة إتمام رمضان",
    streak: "الاستمرارية الحالية",
    days: "أيام",
    day: "اليوم",
    page: "الصفحة",
    dashboardOverview: "لوحة المتابعة",
    dashboardHint: "تابع عبادتك وعاداتك وأهدافك خلال 30 يوما بشكل منتظم.",
    bookStructure: "هيكل المخطط",
    dailyPlanner: "المخطط اليومي",
    dailyReference: "صفحة اليوم الأصلية",
    dayTask: "مهمة اليوم",
    dayTaskDone: "تم إنجاز مهمة اليوم",
    autoDayMode: "تمت مزامنة اليوم تلقائيا حسب توقيت بنغلاديش (Asia/Dhaka).",
    manualDayMode: "أنت خارج فترة رمضان حسب توقيت بنغلاديش: اختيار اليوم يدوي.",
    quranPlanTitle: "خطة القرآن لـ 30 يوما",
    hadithPlanTitle: "خطة الحديث لـ 30 يوما",
    verses: "آيات",
    markQuranDone: "تم إنجاز سورة اليوم",
    markHadithDone: "تم إنجاز حديث اليوم",
    arabicText: "النص العربي",
    transliteration: "النطق اللاتيني",
    banglaMeaning: "المعنى البنغالي",
    englishMeaning: "المعنى الإنجليزي",
    reference: "المصدر",
    ayahNote: "تدبر الآية",
    hadithNote: "تأمل الحديث",
    duaNote: "دعاء اليوم",
    reflection: "ملاحظات التأمل اليومي",
    extraNote: "ملاحظة خاصة",
    notesPlaceholder: "اكتب خواطرك ودروسك ونواياك...",
    saveStatus: "محفوظ محليا",
    salahTracker: "متابعة الصلوات",
    quranTracker: "متابعة القرآن",
    dailyChecklist: "قائمة الإنجاز اليومية",
    allahNames: "أسماء الله",
    ayat: "آيات",
    pages: "صفحات",
    para: "جزء",
    farz: "فرض",
    sunnah: "سنة",
    calendarView: "تقويم رمضان 30 يوما",
    goals: "ضبط الأهداف",
    beforeRamadan: "أهداف قبل رمضان",
    duringRamadan: "أهداف أثناء رمضان",
    addGoalPlaceholder: "أضف هدفا جديدا...",
    add: "إضافة",
    review: "مراجعة نهاية رمضان",
    gains: "المكتسبات",
    shortcomings: "نقاط التقصير",
    nextYearPlan: "خطة رمضان القادم",
    specialNights: "ليلة القدر والعشر الأواخر",
    laylatulQadrGuide: "إرشادات ليلة القدر والاعتكاف",
    itikaf: "متابعة ليالي الاعتكاف",
    qadrDua: "مداومة دعاء القدر",
    eidPrep: "سنن الاستعداد للعيد",
    eidPrepChecklist: "قائمة سنن العيد",
    resources: "صفحات المؤسسة والموارد",
    originalBook: "أرشيف نص المخطط الكامل",
    exportPdf: "تصدير PDF",
    theme: "السمة",
    themeLight: "فاتح",
    themeDark: "داكن",
    language: "اللغة",
    ramadanStartDate: "تاريخ بداية رمضان",
    setToday: "الانتقال إلى اليوم الحالي",
    complete: "مكتمل",
    incomplete: "غير مكتمل",
    progressByDay: "نسبة الإنجاز لكل يوم",
    openDay: "فتح اليوم",
    noReflectionYet: "لا توجد ملاحظات بعد.",
    reflectionTimeline: "سجل التأملات",
    printHint: "استخدم طباعة المتصفح ثم اختر حفظ كـ PDF.",
    greeting: "تقبل الله صيامكم وقيامكم.",
    donationsInfo: "تم تضمين النص المستخرج من صفحات النسخة الأصلية أدناه.",
    bookIntro: "تم تنظيم كل النص المستخرج من صفحات PDF الـ43 أدناه بشكل هيكلي.",
    resetDay: "إعادة ضبط اليوم",
    loading: "جار تحميل مخطط رمضان..."
  }
};

export function t(locale: Locale, key: keyof Dictionary): string {
  return dictionary[locale][key];
}

const navLabels: Record<Locale, Record<AppView, string>> = {
  en: {
    dashboard: "Dashboard",
    daily: "Daily",
    calendar: "Calendar",
    goals: "Goals",
    reflections: "Reflections",
    review: "Review",
    special: "Special",
    resources: "Resources",
  },
  bn: {
    dashboard: "ড্যাশবোর্ড",
    daily: "দৈনিক",
    calendar: "ক্যালেন্ডার",
    goals: "লক্ষ্য",
    reflections: "রিফ্লেকশন",
    review: "পর্যালোচনা",
    special: "বিশেষ",
    resources: "রিসোর্স",
  },
  ar: {
    dashboard: "لوحة",
    daily: "يومي",
    calendar: "التقويم",
    goals: "الأهداف",
    reflections: "تأملات",
    review: "مراجعة",
    special: "ليال خاصة",
    resources: "موارد",
  }
};

export function navLabel(locale: Locale, view: AppView): string {
  return navLabels[locale][view];
}

const salahLabels: Record<Locale, Record<SalahKey, string>> = {
  en: {
    fajr: "Fajr",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    taraweeh: "Taraweeh",
    tahajjud: "Tahajjud",
    duha: "Duha",
    tahiyyatulWudu: "Tahiyyatul Wudu"
  },
  bn: {
    fajr: "ফজর",
    dhuhr: "যুহর",
    asr: "আসর",
    maghrib: "মাগরিব",
    isha: "ইশা",
    taraweeh: "তারাবীহ",
    tahajjud: "তাহাজ্জুদ",
    duha: "দুহা",
    tahiyyatulWudu: "তাহিয়্যাতুল ওযু"
  },
  ar: {
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
    taraweeh: "التراويح",
    tahajjud: "التهجد",
    duha: "الضحى",
    tahiyyatulWudu: "تحية الوضوء"
  }
};

export function salahLabel(locale: Locale, key: SalahKey): string {
  return salahLabels[locale][key];
}

const checklistLabels: Record<Locale, Record<ChecklistKey, string>> = {
  en: {
    morningDhikr: "Morning dhikr",
    eveningDhikr: "Evening dhikr",
    charity: "Charity / Sadaqah",
    dailyWork: "Complete key daily task",
    jamaahPrayer: "Congregational prayer",
    istighfar70: "At least 70 istighfar",
    quranRecitation: "Quran recitation and reflection",
    allahNameMemorize: "Memorize Allah names",
    duaMemorize: "Memorize daily dua",
    miswak: "Use miswak",
    callRelative: "Call a relative",
    learnSomethingNew: "Learn something new"
  },
  bn: {
    morningDhikr: "সকালের যিকর",
    eveningDhikr: "সন্ধ্যার যিকর",
    charity: "দান-সদাকা",
    dailyWork: "দিনের কাজ",
    jamaahPrayer: "জামাআতে সালাত আদায়",
    istighfar70: "কমপক্ষে ৭০ বার ইস্তিগফার",
    quranRecitation: "কুরআন তিলাওয়াত ও অনুধাবন",
    allahNameMemorize: "আল্লাহর নাম মুখস্থ",
    duaMemorize: "দিনের দুআ মুখস্থ",
    miswak: "মিসওয়াক করা",
    callRelative: "একজন আত্মীয়কে কল করা",
    learnSomethingNew: "নতুন কিছু শেখা"
  },
  ar: {
    morningDhikr: "أذكار الصباح",
    eveningDhikr: "أذكار المساء",
    charity: "الصدقة",
    dailyWork: "إنجاز مهمة اليوم",
    jamaahPrayer: "الصلاة مع الجماعة",
    istighfar70: "70 استغفارا على الأقل",
    quranRecitation: "تلاوة القرآن بتدبر",
    allahNameMemorize: "حفظ أسماء الله",
    duaMemorize: "حفظ دعاء اليوم",
    miswak: "استخدام السواك",
    callRelative: "الاتصال بأحد الأقارب",
    learnSomethingNew: "تعلم شيء جديد"
  }
};

export function checklistLabel(locale: Locale, key: ChecklistKey): string {
  return checklistLabels[locale][key];
}

const eidSunnah: Record<Locale, string[]> = {
  en: [
    "Eat before Eid prayer (for Eid al-Fitr).",
    "Perform ghusl and wear clean clothing.",
    "Recite takbir on the way to prayer.",
    "Go and return by different routes.",
    "Congratulate fellow believers.",
    "Give charity and visit relatives."
  ],
  bn: [
    "ঈদুল ফিতরে সালাতে যাওয়ার আগে খেজুর/খাবার গ্রহণ।",
    "গোসল করে পরিষ্কার পোশাক পরা।",
    "ঈদগাহে যাওয়ার পথে তাকবির পড়া।",
    "যাওয়া-আসায় আলাদা রাস্তা ব্যবহার।",
    "মুসলিমদের শুভেচ্ছা জানানো।",
    "দান-সদাকা ও আত্মীয়-স্বজনের খোঁজ নেওয়া।"
  ],
  ar: [
    "الأكل قبل صلاة عيد الفطر.",
    "الغسل ولبس الثياب النظيفة.",
    "التكبير في الطريق إلى المصلى.",
    "الذهاب والعودة من طريقين مختلفين.",
    "تهنئة المسلمين بالعيد.",
    "الصدقة وصلة الرحم."
  ]
};

export function eidSunnahList(locale: Locale): string[] {
  return eidSunnah[locale];
}

