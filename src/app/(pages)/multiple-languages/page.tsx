
import Flags from 'country-flag-icons/react/3x2'

export default function MultipleLanguagesPage() {
  const translations = [
    {
      language: "English",
      text: "Create amazing videos with AI",
      direction: "ltr",
      nativeName: "English",
      flag: <Flags.GB className="w-6 h-4" />
    },
    {
      language: "Norwegian",
      text: "Lag fantastiske videoer med AI",
      direction: "ltr",
      nativeName: "Norsk",
      flag: <Flags.NO className="w-6 h-4" />
    },
    {
      language: "Chinese",
      text: "使用人工智能创建精彩视频",
      direction: "ltr",
      nativeName: "中文",
      flag: <Flags.CN className="w-6 h-4" />
    },
    {
      language: "Arabic",
      text: "إنشاء مقاطع فيديو مذهلة باستخدام الذكاء الاصطناعي",
      direction: "rtl",
      nativeName: "العربية",
      flag: <Flags.SA className="w-6 h-4" />
    },
    {
      language: "Hebrew",
      text: "צור סרטונים מדהימים עם בינה מלאכותית",
      direction: "rtl",
      nativeName: "עברית",
      flag: <Flags.IL className="w-6 h-4" />
    },
    {
      language: "Russian",
      text: "Создавайте потрясающие видео с помощью ИИ",
      direction: "ltr",
      nativeName: "Русский",
      flag: <Flags.RU className="w-6 h-4" />
    },
    {
      language: "Japanese",
      text: "AIで素晴らしい動画を作成",
      direction: "ltr",
      nativeName: "日本語",
      flag: <Flags.JP className="w-6 h-4" />
    },
    {
      language: "Korean",
      text: "AI로 놀라운 비디오 제작",
      direction: "ltr",
      nativeName: "한국어",
      flag: <Flags.KR className="w-6 h-4" />
    },
    {
      language: "Hindi",
      text: "एआई के साथ अद्भुत वीडियो बनाएं",
      direction: "ltr",
      nativeName: "हिन्दी",
      flag: <Flags.IN className="w-6 h-4" />
    },
    {
      language: "Thai",
      text: "สร้างวิดีโอที่น่าทึ่งด้วย AI",
      direction: "ltr",
      nativeName: "ไทย",
      flag: <Flags.TH className="w-6 h-4" />
    },
    {
      language: "German",
      text: "Erstellen Sie erstaunliche Videos mit KI",
      direction: "ltr",
      nativeName: "Deutsch",
      flag: <Flags.DE className="w-6 h-4" />
    },
    {
      language: "Spanish",
      text: "Crea videos increíbles con IA",
      direction: "ltr",
      nativeName: "Español",
      flag: <Flags.ES className="w-6 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-8">
          Multiple Language Support
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Our AI platform supports content creation in multiple languages, enabling global reach for your videos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-4 inline-block">{item.flag}</span>
                  {item.language}
                </h2>
                <span className="text-sm text-slate-500">
                  {item.nativeName}
                </span>
              </div>
              <p 
                className={`text-lg text-slate-700 ${
                  item.direction === 'rtl' ? 'text-right' : 'text-left'
                }`}
                dir={item.direction}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Try Multi-language Generation
          </button>
        </div>
      </div>
    </div>
  );
}

// Add this helper function at the top of the file, after the imports
function getGovernmentUrl(language: string): string {
  const urls = {
    "English": "https://www.gov.uk",
    "Norwegian": "https://www.regjeringen.no",
    "Chinese": "http://www.gov.cn",
    "Arabic": "https://www.saudi.gov.sa",
    "Hebrew": "https://www.gov.il",
    "Russian": "http://government.ru",
    "Japanese": "https://www.japan.go.jp",
    "Korean": "https://www.korea.net",
    "Hindi": "https://www.india.gov.in",
    "Thai": "https://www.thaigov.go.th",
    "German": "https://www.bundesregierung.de",
    "Spanish": "https://www.lamoncloa.gob.es"
  };
  return urls[language as keyof typeof urls] || "#";
}