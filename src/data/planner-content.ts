import { AppView, ChecklistKey, SalahKey } from "@/types/planner";

export const RAMADAN_DAYS = 30;

export const NAV_VIEWS: AppView[] = [
  "dashboard",
  "daily",
  "calendar",
  "goals",
  "reflections",
  "review",
  "special",
  "resources"
];

export const SALAH_ROWS: { key: SalahKey; hasFarz: boolean }[] = [
  { key: "fajr", hasFarz: true },
  { key: "dhuhr", hasFarz: true },
  { key: "asr", hasFarz: true },
  { key: "maghrib", hasFarz: true },
  { key: "isha", hasFarz: true },
  { key: "taraweeh", hasFarz: false },
  { key: "tahajjud", hasFarz: false },
  { key: "duha", hasFarz: false },
  { key: "tahiyyatulWudu", hasFarz: false }
];

export const CHECKLIST_ITEMS: ChecklistKey[] = [
  "morningDhikr",
  "eveningDhikr",
  "charity",
  "dailyWork",
  "jamaahPrayer",
  "istighfar70",
  "quranRecitation",
  "allahNameMemorize",
  "duaMemorize",
  "miswak",
  "callRelative",
  "learnSomethingNew"
];

export const DEFAULT_BEFORE_GOALS = [
  "Set sincere Ramadan intention",
  "Prepare fasting & prayer routine",
  "Organize iftar + charity budget",
  "Plan Quran reading schedule"
];

export const DEFAULT_DURING_GOALS = [
  "Complete daily checklist consistently",
  "Read and reflect on Quran daily",
  "Improve concentration in salah",
  "Increase charity and service"
];

export const DAILY_FOCUS: { en: string; bn: string; ar: string }[] = [
  { en: "Renew intention and begin with discipline.", bn: "নিয়ত নবায়ন করে শৃঙ্খলায় শুরু করুন।", ar: "جدّد النية وابدأ بانضباط." },
  { en: "Guard every salah in its earliest time.", bn: "প্রতিটি সালাত শুরুতেই আদায় করুন।", ar: "حافظ على الصلاة في أول وقتها." },
  { en: "Recite Quran slowly with meaning.", bn: "অর্থসহ ধীরে কুরআন তিলাওয়াত করুন।", ar: "اقرأ القرآن بتدبر وهدوء." },
  { en: "Strengthen morning and evening adhkar.", bn: "সকাল-সন্ধ্যার যিকর শক্তভাবে ধরে রাখুন।", ar: "ثبّت أذكار الصباح والمساء." },
  { en: "Give charity even if small, but daily.", bn: "অল্প হলেও প্রতিদিন সদকা দিন।", ar: "تصدق يوميا ولو بالقليل." },
  { en: "Control tongue and avoid argument.", bn: "জিহ্বা সংযত রাখুন, তর্ক এড়িয়ে চলুন।", ar: "احفظ لسانك واترك الجدل." },
  { en: "Memorize today's dua and use it often.", bn: "আজকের দুআ মুখস্থ করে বারবার পড়ুন।", ar: "احفظ دعاء اليوم وأكثر منه." },
  { en: "Build consistency over intensity.", bn: "অতিরিক্তের চেয়ে ধারাবাহিকতাকে অগ্রাধিকার দিন।", ar: "قدّم الاستمرار على الكثرة." },
  { en: "Serve family with patience and mercy.", bn: "ধৈর্য ও দয়ার সাথে পরিবারকে সেবা করুন।", ar: "اخدم أهلك بصبر ورحمة." },
  { en: "Track progress honestly before sleep.", bn: "ঘুমের আগে সৎভাবে অগ্রগতি লিখুন।", ar: "قيّم تقدمك بصدق قبل النوم." },
  { en: "Increase istighfar throughout the day.", bn: "দিনজুড়ে বেশি বেশি ইস্তিগফার করুন।", ar: "أكثر من الاستغفار طوال اليوم." },
  { en: "Protect your fast from sins of eyes/ears.", bn: "চোখ-কানকে গুনাহ থেকে রোজা রক্ষা করুন।", ar: "صن صومك عن معاصي العين والأذن." },
  { en: "Keep a soft heart through dhikr.", bn: "যিকরের মাধ্যমে হৃদয় কোমল রাখুন।", ar: "حافظ على رقة القلب بالذكر." },
  { en: "Pray in congregation whenever possible.", bn: "যতটা সম্ভব জামাআতে সালাত আদায় করুন।", ar: "صلِّ مع الجماعة ما استطعت." },
  { en: "Give time for Quran translation/tafsir.", bn: "কুরআনের অনুবাদ/তাফসিরে সময় দিন।", ar: "خصص وقتا للترجمة والتفسير." },
  { en: "Reach out to relatives and mend ties.", bn: "আত্মীয়তার সম্পর্ক মজবুত করুন।", ar: "صل رحمك وأصلح ما انقطع." },
  { en: "Practice gratitude in every blessing.", bn: "প্রতিটি নেয়ামতে কৃতজ্ঞতা অনুশীলন করুন।", ar: "تدرّب على الشكر في كل نعمة." },
  { en: "Prepare spiritually for last ten nights.", bn: "শেষ দশ রাতের জন্য আধ্যাত্মিক প্রস্তুতি নিন।", ar: "استعد روحيا للعشر الأواخر." },
  { en: "Simplify routine; prioritize worship.", bn: "রুটিন সহজ করে ইবাদতকে অগ্রাধিকার দিন।", ar: "بسّط يومك وقدّم العبادة." },
  { en: "Guard night prayer, even two rakah.", bn: "দুই রাকাত হলেও রাতের সালাত ছাড়বেন না।", ar: "لا تترك قيام الليل ولو ركعتين." },
  { en: "Enter last ten nights with urgency.", bn: "শেষ দশকে জরুরি ইবাদতি মনোভাব নিন।", ar: "ادخل العشر الأواخر بعزيمة." },
  { en: "Search for Laylatul Qadr actively.", bn: "লাইলাতুল কদর আন্তরিকভাবে অনুসন্ধান করুন।", ar: "التمس ليلة القدر بجد." },
  { en: "Lengthen dua in sujood and tahajjud.", bn: "সিজদা ও তাহাজ্জুদে দীর্ঘ দুআ করুন।", ar: "أطل الدعاء في السجود والتهجد." },
  { en: "Avoid distractions after iftar.", bn: "ইফতারের পর মনোযোগভঙ্গকারী বিষয় কমান।", ar: "قلل الملهيات بعد الإفطار." },
  { en: "Focus on acceptance, not only quantity.", bn: "পরিমাণের চেয়ে কবুলিয়াতের দিকে মন দিন।", ar: "اهتم بالقبول لا بالكم فقط." },
  { en: "Review mistakes and repair quickly.", bn: "ভুলগুলো পর্যালোচনা করে দ্রুত সংশোধন করুন।", ar: "راجع أخطاءك وأصلحها سريعا." },
  { en: "Make heartfelt dua for the Ummah.", bn: "উম্মাহর জন্য অন্তর থেকে দুআ করুন।", ar: "ادعُ للأمة بإخلاص." },
  { en: "Finish strong with sincerity and hope.", bn: "ইখলাস ও আশায় শেষটা শক্তভাবে করুন।", ar: "اختم بقوة مع الإخلاص والرجاء." },
  { en: "Prepare Eid with gratitude, not excess.", bn: "অতিরিক্ত নয়, কৃতজ্ঞতার সাথে ঈদ প্রস্তুতি নিন।", ar: "استعد للعيد بالشكر دون إسراف." },
  { en: "Write lessons and plan after Ramadan.", bn: "রমাদান-পরবর্তী পরিকল্পনা লিখে ফেলুন।", ar: "دوّن الدروس وخطة ما بعد رمضان." }
];

export interface AllahNameEntry {
  arabic: string;
  en: string;
  bn: string;
  ar: string;
}

const ALLAH_NAMES: AllahNameEntry[] = [
  { arabic: "الله", en: "Allah", bn: "আল্লাহ", ar: "الله" },
  { arabic: "الرَّحْمٰن", en: "The Most Compassionate", bn: "পরম দয়ালু", ar: "الرحمن" },
  { arabic: "الرَّحِيْم", en: "The Most Merciful", bn: "অতি মেহেরবান", ar: "الرحيم" },
  { arabic: "الْمَلِك", en: "The King", bn: "সর্বময় অধিপতি", ar: "الملك" },
  { arabic: "الْقُدُّوس", en: "The Holy", bn: "অতি পবিত্র", ar: "القدوس" },
  { arabic: "السَّلَام", en: "The Source of Peace", bn: "শান্তিদাতা", ar: "السلام" },
  { arabic: "الْمُؤْمِن", en: "The Giver of Security", bn: "নিরাপত্তাদাতা", ar: "المؤمن" },
  { arabic: "الْمُهَيْمِن", en: "The Guardian", bn: "পর্যবেক্ষক রক্ষক", ar: "المهيمن" },
  { arabic: "الْعَزِيز", en: "The Almighty", bn: "পরাক্রমশালী", ar: "العزيز" },
  { arabic: "الْجَبَّار", en: "The Compeller", bn: "মহাপরাক্রমশালী", ar: "الجبار" },
  { arabic: "الْمُتَكَبِّر", en: "The Supreme", bn: "মহিমাময়", ar: "المتكبر" },
  { arabic: "الْخَالِق", en: "The Creator", bn: "সৃষ্টিকর্তা", ar: "الخالق" },
  { arabic: "الْبَارِئ", en: "The Originator", bn: "সৃষ্টির পরিকল্পনাকারী", ar: "البارئ" },
  { arabic: "الْمُصَوِّر", en: "The Fashioner", bn: "আকৃতি দানকারী", ar: "المصور" },
  { arabic: "الْغَفَّار", en: "The Great Forgiver", bn: "অত্যন্ত ক্ষমাশীল", ar: "الغفار" },
  { arabic: "الْقَهَّار", en: "The All-Dominant", bn: "প্রবল ক্ষমতাধর", ar: "القهار" },
  { arabic: "الْوَهَّاب", en: "The Giver", bn: "অশেষ দানকারী", ar: "الوهاب" },
  { arabic: "الرَّزَّاق", en: "The Provider", bn: "রিযিকদাতা", ar: "الرزاق" },
  { arabic: "الْفَتَّاح", en: "The Opener", bn: "উন্মুক্তকারী", ar: "الفتاح" },
  { arabic: "الْعَلِيْم", en: "The All-Knowing", bn: "সর্বজ্ঞ", ar: "العليم" },
  { arabic: "الْقَابِض", en: "The Withholder", bn: "সংকোচকারী", ar: "القابض" },
  { arabic: "الْبَاسِط", en: "The Extender", bn: "প্রসারণকারী", ar: "الباسط" },
  { arabic: "الْخَافِض", en: "The Reducer", bn: "অবনমিতকারী", ar: "الخافض" },
  { arabic: "الرَّافِع", en: "The Elevating One", bn: "উন্নতকারী", ar: "الرافع" },
  { arabic: "الْمُعِزّ", en: "The Honourer", bn: "সম্মানদাতা", ar: "المعز" },
  { arabic: "الْمُذِلّ", en: "The Humiliator", bn: "অপমানকারী", ar: "المذل" },
  { arabic: "السَّمِيْع", en: "The All-Hearing", bn: "সর্বশ্রোতা", ar: "السميع" },
  { arabic: "الْبَصِيْر", en: "The All-Seeing", bn: "সর্বদ্রষ্টা", ar: "البصير" },
  { arabic: "الْحَكَم", en: "The Judge", bn: "বিচারক", ar: "الحكم" },
  { arabic: "الْعَدْل", en: "The Utterly Just", bn: "পরম ন্যায়পরায়ণ", ar: "العدل" },
  { arabic: "اللَّطِيْف", en: "The Subtle One", bn: "সূক্ষ্মদর্শী অনুগ্রহশীল", ar: "اللطيف" },
  { arabic: "الْخَبِيْر", en: "The All-Aware", bn: "সর্বজ্ঞাত", ar: "الخبير" },
  { arabic: "الْحَلِيْم", en: "The Forbearing", bn: "অপরিসীম সহনশীল", ar: "الحليم" },
  { arabic: "الْعَظِيْم", en: "The Magnificent", bn: "মহিমান্বিত", ar: "العظيم" },
  { arabic: "الْغَفُوْر", en: "The Most Forgiving", bn: "পরম ক্ষমাশীল", ar: "الغفور" },
  { arabic: "الشَّكُوْر", en: "The Most Appreciative", bn: "গুণগ্রাহী", ar: "الشكور" },
  { arabic: "الْعَلِيّ", en: "The Most High", bn: "সর্বোচ্চ", ar: "العلي" },
  { arabic: "الْكَبِيْر", en: "The Most Great", bn: "সর্বমহান", ar: "الكبير" },
  { arabic: "الْحَفِيْظ", en: "The Preserver", bn: "সংরক্ষণকারী", ar: "الحفيظ" },
  { arabic: "الْمُقِيْت", en: "The Sustainer", bn: "জীবনধারণের যোগানদাতা", ar: "المقيت" },
  { arabic: "الْحَسِيْب", en: "The Reckoner", bn: "হিসাব গ্রহণকারী", ar: "الحسيب" },
  { arabic: "الْجَلِيْل", en: "The Majestic", bn: "মর্যাদাবান", ar: "الجليل" },
  { arabic: "الْكَرِيْم", en: "The Most Generous", bn: "অতিশয় দানশীল", ar: "الكريم" },
  { arabic: "الرَّقِيْب", en: "The Watchful", bn: "নজরদার", ar: "الرقيب" },
  { arabic: "الْمُجِيْب", en: "The Responsive", bn: "দুআ কবুলকারী", ar: "المجيب" },
  { arabic: "الْوَاسِع", en: "The All-Encompassing", bn: "অসীম ব্যাপক", ar: "الواسع" },
  { arabic: "الْحَكِيْم", en: "The All-Wise", bn: "প্রজ্ঞাময়", ar: "الحكيم" },
  { arabic: "الْوَدُوْد", en: "The Most Loving", bn: "পরম স্নেহশীল", ar: "الودود" },
  { arabic: "الْمَجِيْد", en: "The Glorious", bn: "মহিমান্বিত সম্মানিত", ar: "المجيد" },
  { arabic: "الْبَاعِث", en: "The Resurrector", bn: "পুনরুত্থানকারী", ar: "الباعث" },
  { arabic: "الشَّهِيْد", en: "The Witness", bn: "সাক্ষী", ar: "الشهيد" },
  { arabic: "الْحَقّ", en: "The Truth", bn: "সত্য", ar: "الحق" },
  { arabic: "الْوَكِيْل", en: "The Trustee", bn: "অভিভাবক/কর্মবিধায়ক", ar: "الوكيل" },
  { arabic: "الْقَوِيّ", en: "The Most Strong", bn: "অত্যন্ত শক্তিশালী", ar: "القوي" },
  { arabic: "الْمَتِيْن", en: "The Firm", bn: "দৃঢ়-অটল", ar: "المتين" },
  { arabic: "الْوَلِيّ", en: "The Protecting Friend", bn: "সহায়/অভিভাবক", ar: "الولي" },
  { arabic: "الْحَمِيْد", en: "The Praiseworthy", bn: "প্রশংসিত", ar: "الحميد" },
  { arabic: "الْمُحْصِي", en: "The Counter", bn: "গণনাকারী", ar: "المحصي" },
  { arabic: "الْمُبْدِئ", en: "The Originator", bn: "প্রথম সৃষ্টিকারী", ar: "المبدئ" },
  { arabic: "الْمُعِيْد", en: "The Restorer", bn: "পুনরাবর্তনকারী", ar: "المعيد" },
  { arabic: "الْمُحْيِي", en: "The Giver of Life", bn: "জীবনদাতা", ar: "المحيي" },
  { arabic: "اَلْمُمِيْت", en: "The Bringer of Death", bn: "মৃত্যুদাতা", ar: "المميت" },
  { arabic: "الْحَيّ", en: "The Ever-Living", bn: "চিরঞ্জীব", ar: "الحي" },
  { arabic: "الْقَيُّوْم", en: "The Self-Subsisting", bn: "স্বয়ং প্রতিষ্ঠিত", ar: "القيوم" },
  { arabic: "الْوَاجِد", en: "The Finder", bn: "যা চান তা প্রাপ্তকারী", ar: "الواجد" },
  { arabic: "الْمَاجِد", en: "The Noble", bn: "মহিমান্বিত মহৎ", ar: "الماجد" },
  { arabic: "الْوَاحِد", en: "The One", bn: "একক", ar: "الواحد" },
  { arabic: "اَلاَحَد", en: "The Unique", bn: "অদ্বিতীয়", ar: "الاحد" },
  { arabic: "الصَّمَد", en: "The Eternal Refuge", bn: "অমুখাপেক্ষী আশ্রয়", ar: "الصمد" },
  { arabic: "الْقَادِر", en: "The Able", bn: "ক্ষমতাবান", ar: "القادر" },
  { arabic: "الْمُقْتَدِر", en: "The Powerful", bn: "পরম ক্ষমতার অধিকারী", ar: "المقتدر" },
  { arabic: "الْمُقَدِّم", en: "The Expediter", bn: "অগ্রসরকারী", ar: "المقدم" },
  { arabic: "الْمُؤَخِّر", en: "The Delayer", bn: "পশ্চাৎপদকারী", ar: "المؤخر" },
  { arabic: "الأوّل", en: "The First", bn: "প্রথম", ar: "الأول" },
  { arabic: "الآخِر", en: "The Last", bn: "শেষ", ar: "الآخر" },
  { arabic: "الظَّاهِر", en: "The Manifest", bn: "প্রকাশ্য", ar: "الظاهر" },
  { arabic: "الْبَاطِن", en: "The Hidden", bn: "অপ্রকাশ্য", ar: "الباطن" },
  { arabic: "الْوَالِي", en: "The Governor", bn: "পরিচালনাকারী", ar: "الوالي" },
  { arabic: "الْمُتَعَالِي", en: "The Most Exalted", bn: "সর্বোচ্চ মহান", ar: "المتعالي" },
  { arabic: "الْبَرّ", en: "The Source of Goodness", bn: "পরম কল্যাণময়", ar: "البر" },
  { arabic: "التَّوَّاب", en: "The Acceptor of Repentance", bn: "তাওবা কবুলকারী", ar: "التواب" },
  { arabic: "الْمُنْتَقِم", en: "The Avenger", bn: "প্রতিশোধ গ্রহণকারী", ar: "المنتقم" },
  { arabic: "العَفُوّ", en: "The Pardoner", bn: "অপরাধ মার্জনাকারী", ar: "العفو" },
  { arabic: "الرَّؤُوف", en: "The Most Kind", bn: "অতি সদয়", ar: "الرؤوف" },
  { arabic: "مَالِكُ ٱلْمُلْك", en: "Master of the Kingdom", bn: "সার্বভৌম ক্ষমতার মালিক", ar: "مالك الملك" },
  { arabic: "ذُوالْجَلَالِ وَالإكْرَام", en: "Lord of Majesty and Honor", bn: "মহিমা ও সম্মানের অধিপতি", ar: "ذو الجلال والإكرام" },
  { arabic: "الْمُقْسِط", en: "The Equitable", bn: "ন্যায়বিচারক", ar: "المقسط" },
  { arabic: "الْجَامِع", en: "The Gatherer", bn: "সমবেতকারী", ar: "الجامع" },
  { arabic: "الْغَنِيّ", en: "The Self-Sufficient", bn: "অমুখাপেক্ষী", ar: "الغني" },
  { arabic: "الْمُغْنِي", en: "The Enricher", bn: "সমৃদ্ধকারী", ar: "المغني" },
  { arabic: "الْمَانِع", en: "The Withholder", bn: "নিবারণকারী", ar: "المانع" },
  { arabic: "الضَّار", en: "The Distresser", bn: "ক্ষতিদানকারী", ar: "الضار" },
  { arabic: "النَّافِع", en: "The Propitious", bn: "উপকারকারী", ar: "النافع" },
  { arabic: "النُّور", en: "The Light", bn: "আলো", ar: "النور" },
  { arabic: "الْهَادِي", en: "The Guide", bn: "পথপ্রদর্শক", ar: "الهادي" },
  { arabic: "الْبَدِيع", en: "The Incomparable Originator", bn: "অনুপম স্রষ্টা", ar: "البديع" },
  { arabic: "الْبَاقِي", en: "The Everlasting", bn: "চিরস্থায়ী", ar: "الباقي" },
  { arabic: "الْوَارِث", en: "The Inheritor", bn: "চূড়ান্ত উত্তরাধিকারী", ar: "الوارث" },
  { arabic: "الرَّشِيد", en: "The Guide to Right Path", bn: "সঠিক পথনির্দেশক", ar: "الرشيد" },
  { arabic: "الصَّبُور", en: "The Most Patient", bn: "অতিশয় ধৈর্যশীল", ar: "الصبور" }
];

export const ALLAH_NAMES_BY_DAY: AllahNameEntry[][] = Array.from({ length: RAMADAN_DAYS }, (_, index) => [
  ALLAH_NAMES[index * 3],
  ALLAH_NAMES[index * 3 + 1],
  ALLAH_NAMES[index * 3 + 2]
]);

export const EID_SUNNAH_KEYS = [
  "eatBeforeEidPrayer",
  "ghuslAndCleanClothes",
  "takbirOnWay",
  "differentRoute",
  "congratulateBelievers",
  "charityAndVisitRelatives"
] as const;

export const IFTIKAF_CHECK_DAYS = Array.from({ length: 10 }, (_, index) => 21 + index);
