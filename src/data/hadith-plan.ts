export interface HadithPlanItem {
  day: number;
  title: string;
  arabic: string;
  bangla: string;
  english: string;
  reference: string;
}

export const HADITH_PLAN: HadithPlanItem[] = [
  {
    day: 1,
    title: "Intentions",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    bangla: "নিশ্চয়ই সব কাজ নিয়তের উপর নির্ভরশীল।",
    english: "Actions are judged by intentions.",
    reference: "Sahih al-Bukhari 1, Sahih Muslim 1907"
  },
  {
    day: 2,
    title: "Sincere Advice",
    arabic: "الدِّينُ النَّصِيحَةُ",
    bangla: "দ্বীন হলো আন্তরিক নসীহাহ (কল্যাণকামিতা)।",
    english: "Religion is sincere advice.",
    reference: "Sahih Muslim 55"
  },
  {
    day: 3,
    title: "Leaving What Does Not Benefit",
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    bangla: "মানুষের ইসলামের সৌন্দর্য হলো অপ্রয়োজনীয় বিষয় পরিত্যাগ করা।",
    english: "Part of a person’s excellence in Islam is leaving what does not concern him.",
    reference: "Jami' at-Tirmidhi 2317 (Hasan)"
  },
  {
    day: 4,
    title: "Love for Your Brother",
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    bangla: "তোমাদের কেউ ততক্ষণ মুমিন হতে পারবে না, যতক্ষণ সে নিজের জন্য যা পছন্দ করে তা ভাইয়ের জন্যও পছন্দ না করবে।",
    english: "None of you truly believes until he loves for his brother what he loves for himself.",
    reference: "Sahih al-Bukhari 13, Sahih Muslim 45"
  },
  {
    day: 5,
    title: "Safety from Tongue and Hand",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    bangla: "মুসলিম সে, যার জিহ্বা ও হাত থেকে অন্য মুসলিম নিরাপদ থাকে।",
    english: "A Muslim is one from whose tongue and hand other Muslims are safe.",
    reference: "Sahih al-Bukhari 10, Sahih Muslim 40"
  },
  {
    day: 6,
    title: "Control Anger",
    arabic: "لَا تَغْضَبْ",
    bangla: "রাগ করো না।",
    english: "Do not become angry.",
    reference: "Sahih al-Bukhari 6116"
  },
  {
    day: 7,
    title: "Hearts Matter",
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَىٰ صُوَرِكُمْ وَلَا إِلَىٰ أَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَىٰ قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    bangla: "আল্লাহ তোমাদের চেহারা বা সম্পদ দেখেন না; তিনি দেখেন তোমাদের অন্তর ও আমল।",
    english: "Allah does not look at your forms or wealth, but He looks at your hearts and deeds.",
    reference: "Sahih Muslim 2564"
  },
  {
    day: 8,
    title: "Purification",
    arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
    bangla: "পবিত্রতা ঈমানের অর্ধেক।",
    english: "Purification is half of faith.",
    reference: "Sahih Muslim 223"
  },
  {
    day: 9,
    title: "Good Word is Charity",
    arabic: "وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    bangla: "উত্তম কথা সদকা।",
    english: "A good word is charity.",
    reference: "Sahih al-Bukhari 2989, Sahih Muslim 1009"
  },
  {
    day: 10,
    title: "Smile is Charity",
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    bangla: "তোমার ভাইয়ের দিকে হাসিমুখে তাকানোও সদকা।",
    english: "Your smile to your brother is charity.",
    reference: "Jami' at-Tirmidhi 1956 (Hasan)"
  },
  {
    day: 11,
    title: "Speak Good or Stay Silent",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    bangla: "যে আল্লাহ ও আখিরাতে বিশ্বাস করে, সে যেন ভালো কথা বলে অথবা নীরব থাকে।",
    english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    reference: "Sahih al-Bukhari 6018, Sahih Muslim 47"
  },
  {
    day: 12,
    title: "Make Things Easy",
    arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا",
    bangla: "সহজ করো, কঠিন করো না; সুসংবাদ দাও, বিতৃষ্ণা সৃষ্টি করো না।",
    english: "Make things easy and do not make them difficult; give glad tidings and do not drive people away.",
    reference: "Sahih al-Bukhari 69, Sahih Muslim 1734"
  },
  {
    day: 13,
    title: "Mercy",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ",
    bangla: "যারা দয়া করে, রহমান তাদের প্রতি দয়া করেন।",
    english: "The merciful are shown mercy by the Most Merciful.",
    reference: "Jami' at-Tirmidhi 1924 (Sahih)"
  },
  {
    day: 14,
    title: "No Mercy, No Mercy",
    arabic: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ",
    bangla: "যে দয়া করে না, তার ওপর দয়া করা হয় না।",
    english: "Whoever does not show mercy will not be shown mercy.",
    reference: "Sahih al-Bukhari 6013, Sahih Muslim 2318"
  },
  {
    day: 15,
    title: "Allah Loves Beauty",
    arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    bangla: "নিশ্চয় আল্লাহ সুন্দর; তিনি সৌন্দর্যকে ভালোবাসেন।",
    english: "Allah is beautiful and loves beauty.",
    reference: "Sahih Muslim 91"
  },
  {
    day: 16,
    title: "No Harm",
    arabic: "لَا ضَرَرَ وَلَا ضِرَارَ",
    bangla: "ক্ষতি করা নেই, প্রতিশোধমূলক ক্ষতিও নেই।",
    english: "There should be neither harming nor reciprocating harm.",
    reference: "Sunan Ibn Majah 2340 (Hasan)"
  },
  {
    day: 17,
    title: "Path of Knowledge",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    bangla: "যে ব্যক্তি ইলমের পথে চলে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করেন।",
    english: "Whoever follows a path to seek knowledge, Allah will make a path to Paradise easy for him.",
    reference: "Sahih Muslim 2699"
  },
  {
    day: 18,
    title: "Consistency",
    arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    bangla: "আল্লাহর কাছে সবচেয়ে প্রিয় আমল হলো যা নিয়মিত, যদিও তা অল্প হয়।",
    english: "The most beloved deeds to Allah are those done regularly, even if small.",
    reference: "Sahih al-Bukhari 6464, Sahih Muslim 783"
  },
  {
    day: 19,
    title: "Fear Allah Everywhere",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ",
    bangla: "তুমি যেখানেই থাক, আল্লাহকে ভয় কর।",
    english: "Fear Allah wherever you are.",
    reference: "Jami' at-Tirmidhi 1987 (Hasan Sahih)"
  },
  {
    day: 20,
    title: "Help Your Brother",
    arabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
    bangla: "বান্দা তার ভাইয়ের সাহায্যে থাকলে আল্লাহও তার সাহায্যে থাকেন।",
    english: "Allah is helping the servant as long as the servant is helping his brother.",
    reference: "Sahih Muslim 2699"
  },
  {
    day: 21,
    title: "Fulfill Needs of Others",
    arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
    bangla: "যে তার ভাইয়ের প্রয়োজনে থাকে, আল্লাহ তার প্রয়োজনে থাকেন।",
    english: "Whoever fulfills the need of his brother, Allah fulfills his need.",
    reference: "Sahih al-Bukhari 2442, Sahih Muslim 2580"
  },
  {
    day: 22,
    title: "Conceal Faults",
    arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ",
    bangla: "যে মুসলিমের দোষ গোপন রাখে, আল্লাহ দুনিয়া ও আখিরাতে তার দোষ গোপন রাখেন।",
    english: "Whoever conceals a Muslim, Allah will conceal him in this world and the Hereafter.",
    reference: "Sahih Muslim 2699"
  },
  {
    day: 23,
    title: "Do Not Hate One Another",
    arabic: "لَا تَحَاسَدُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا",
    bangla: "পরস্পরে হিংসা, বিদ্বেষ ও সম্পর্কচ্ছেদ করো না; আল্লাহর বান্দা হিসেবে ভাই ভাই হও।",
    english: "Do not envy, hate, or turn away from one another; be brothers, O servants of Allah.",
    reference: "Sahih Muslim 2563"
  },
  {
    day: 24,
    title: "Excellence in All Matters",
    arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
    bangla: "আল্লাহ সব বিষয়ে উৎকর্ষতা (ইহসান) নির্ধারণ করেছেন।",
    english: "Allah has prescribed excellence in all things.",
    reference: "Sahih Muslim 1955"
  },
  {
    day: 25,
    title: "Learn and Teach Quran",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    bangla: "তোমাদের মধ্যে সর্বোত্তম সে, যে কুরআন শেখে এবং শেখায়।",
    english: "The best among you are those who learn the Quran and teach it.",
    reference: "Sahih al-Bukhari 5027"
  },
  {
    day: 26,
    title: "Convey Even One Verse",
    arabic: "بَلِّغُوا عَنِّي وَلَوْ آيَةً",
    bangla: "আমার পক্ষ থেকে একটি আয়াত হলেও পৌঁছে দাও।",
    english: "Convey from me, even if it is one verse.",
    reference: "Sahih al-Bukhari 3461"
  },
  {
    day: 27,
    title: "Reward for Quran Recitation",
    arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ",
    bangla: "যে আল্লাহর কিতাবের একটি অক্ষর পড়ে, তার জন্য একটি নেকি।",
    english: "Whoever recites one letter from the Book of Allah will receive one good deed.",
    reference: "Jami' at-Tirmidhi 2910 (Hasan)"
  },
  {
    day: 28,
    title: "Fasting is a Shield",
    arabic: "الصِّيَامُ جُنَّةٌ",
    bangla: "সিয়াম ঢালস্বরূপ।",
    english: "Fasting is a shield.",
    reference: "Sahih al-Bukhari 1904, Sahih Muslim 1151"
  },
  {
    day: 29,
    title: "Reward of Feeding a Fasting Person",
    arabic: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ",
    bangla: "যে রোজাদারকে ইফতার করায়, সে তার সমপরিমাণ সওয়াব পায়।",
    english: "Whoever gives iftar to a fasting person will have a reward like his.",
    reference: "Jami' at-Tirmidhi 807 (Sahih)"
  },
  {
    day: 30,
    title: "Night Prayer in Ramadan",
    arabic: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    bangla: "যে ব্যক্তি ঈমান ও সওয়াবের আশায় রমাদানে কিয়ামুল-লাইল করে, তার পূর্বের গুনাহ মাফ করা হয়।",
    english: "Whoever stands in prayer in Ramadan out of faith and hoping for reward will have his previous sins forgiven.",
    reference: "Sahih al-Bukhari 37, Sahih Muslim 759"
  }
];

export function getHadithPlanByDay(day: number): HadithPlanItem {
  const found = HADITH_PLAN.find((item) => item.day === day);
  if (!found) {
    return HADITH_PLAN[0];
  }
  return found;
}
