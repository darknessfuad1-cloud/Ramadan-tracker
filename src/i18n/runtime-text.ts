import { Locale } from "@/types/planner";

type RuntimeKey =
  | "authTitle"
  | "authSubtitle"
  | "continueWithGoogle"
  | "signingIn"
  | "logout"
  | "account"
  | "division"
  | "divisionSetupTitle"
  | "divisionSetupSubtitle"
  | "saveDivision"
  | "saving"
  | "missingConfigTitle"
  | "missingConfigHint"
  | "syncErrorTitle"
  | "syncErrorHint"
  | "currentRamadanDay"
  | "ramadanCountdown"
  | "ramadanEnded"
  | "bangladeshTimezone"
  | "prayerTimes"
  | "sehriEnd"
  | "iftar"
  | "tahajjud"
  | "prayerScheduleSource";

const runtimeDictionary: Record<Locale, Record<RuntimeKey, string>> = {
  en: {
    authTitle: "Continue with Google",
    authSubtitle: "Sign in to sync your Ramadan progress across all devices.",
    continueWithGoogle: "Continue with Google",
    signingIn: "Redirecting to Google...",
    logout: "Logout",
    account: "Account",
    division: "Division",
    divisionSetupTitle: "Select Your Division",
    divisionSetupSubtitle: "Choose your Bangladesh division for accurate Sehri and Iftar time.",
    saveDivision: "Save Division",
    saving: "Saving...",
    missingConfigTitle: "Supabase is not configured",
    missingConfigHint: "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.",
    syncErrorTitle: "Database setup required",
    syncErrorHint: "Run the Supabase migration to create profiles, ramadan_progress, and prayer_times tables.",
    currentRamadanDay: "Current Ramadan Day",
    ramadanCountdown: "Ramadan 2026 starts in {days} day(s).",
    ramadanEnded: "Ramadan 2026 has ended.",
    bangladeshTimezone: "Bangladesh Time (Asia/Dhaka)",
    prayerTimes: "Prayer Times",
    sehriEnd: "Sehri End",
    iftar: "Iftar",
    tahajjud: "Tahajjud (Recommended)",
    prayerScheduleSource: "Bangladesh Islamic Foundation Ramadan 2026 schedule"
  },
  bn: {
    authTitle: "গুগল দিয়ে লগইন",
    authSubtitle: "সব ডিভাইসে রমাদান অগ্রগতি সিঙ্ক করতে লগইন করুন।",
    continueWithGoogle: "গুগল দিয়ে চালিয়ে যান",
    signingIn: "গুগলে পাঠানো হচ্ছে...",
    logout: "লগআউট",
    account: "অ্যাকাউন্ট",
    division: "বিভাগ",
    divisionSetupTitle: "আপনার বিভাগ নির্বাচন করুন",
    divisionSetupSubtitle: "সঠিক সেহরি ও ইফতারের সময়ের জন্য আপনার বিভাগ নির্বাচন করুন।",
    saveDivision: "বিভাগ সংরক্ষণ করুন",
    saving: "সংরক্ষণ হচ্ছে...",
    missingConfigTitle: "Supabase কনফিগার করা নেই",
    missingConfigHint: ".env.local ফাইলে NEXT_PUBLIC_SUPABASE_URL এবং NEXT_PUBLIC_SUPABASE_ANON_KEY যোগ করুন।",
    syncErrorTitle: "ডেটাবেস সেটআপ প্রয়োজন",
    syncErrorHint: "Supabase migration চালিয়ে profiles, ramadan_progress এবং prayer_times টেবিল তৈরি করুন।",
    currentRamadanDay: "বর্তমান রমাদান দিবস",
    ramadanCountdown: "রমাদান ২০২৬ শুরু হতে বাকি {days} দিন।",
    ramadanEnded: "রমাদান ২০২৬ সমাপ্ত হয়েছে।",
    bangladeshTimezone: "বাংলাদেশ সময় (Asia/Dhaka)",
    prayerTimes: "নামাজের সময়",
    sehriEnd: "সেহরি শেষ",
    iftar: "ইফতার",
    tahajjud: "তাহাজ্জুদ (প্রস্তাবিত)",
    prayerScheduleSource: "বাংলাদেশ ইসলামিক ফাউন্ডেশন রমাদান ২০২৬ সময়সূচি"
  },
  ar: {
    authTitle: "المتابعة عبر Google",
    authSubtitle: "سجّل الدخول لمزامنة تقدم رمضان عبر كل الأجهزة.",
    continueWithGoogle: "المتابعة عبر Google",
    signingIn: "جار التحويل إلى Google...",
    logout: "تسجيل الخروج",
    account: "الحساب",
    division: "القسم",
    divisionSetupTitle: "اختر القسم",
    divisionSetupSubtitle: "اختر قسمك في بنغلاديش لعرض مواقيت السحور والإفطار بدقة.",
    saveDivision: "حفظ القسم",
    saving: "جار الحفظ...",
    missingConfigTitle: "Supabase غير مهيأ",
    missingConfigHint: "أضف NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY في ملف .env.local.",
    syncErrorTitle: "إعداد قاعدة البيانات مطلوب",
    syncErrorHint: "نفذ ترحيل Supabase لإنشاء جداول profiles و ramadan_progress و prayer_times.",
    currentRamadanDay: "يوم رمضان الحالي",
    ramadanCountdown: "يبدأ رمضان 2026 بعد {days} يوم/أيام.",
    ramadanEnded: "انتهى رمضان 2026.",
    bangladeshTimezone: "توقيت بنغلاديش (Asia/Dhaka)",
    prayerTimes: "مواقيت اليوم",
    sehriEnd: "انتهاء السحور",
    iftar: "الإفطار",
    tahajjud: "التهجد (مستحب)",
    prayerScheduleSource: "جدول رمضان 2026 لمؤسسة بنغلاديش الإسلامية"
  }
};

export function rt(locale: Locale, key: RuntimeKey, params?: Record<string, string | number>): string {
  const template = runtimeDictionary[locale][key];
  if (!params) {
    return template;
  }

  return Object.entries(params).reduce((acc, [name, value]) => acc.replace(`{${name}}`, String(value)), template);
}
