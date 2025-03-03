
import * as Flags from 'country-flag-icons/react/3x2'
import { FiInfo } from 'react-icons/fi'

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
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Multiple Language Support
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Our AI platform supports content creation in multiple languages, enabling global reach for your videos.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg inline-block">
            <div className="flex items-start gap-2 text-sm text-slate-700">
              <FiInfo className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-left">
                <p className="font-medium mb-2">Pro Tips:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Choose the language that best matches your target audience</li>
                  <li>Consider regional variations for broader reach</li>
                  <li>Test your content with native speakers when possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-shadow group relative"
            >
              <div className="absolute -top-2 -right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Click to preview voice
              </div>
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
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 flex gap-2">
                  <span>✓ Native accent</span>
                  <span>✓ Natural intonation</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-xs max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Go Global?
            </h3>
            <p className="text-slate-600 mb-6">
              Start with one language and expand your reach gradually. Our AI handles all the heavy lifting of translation and voice synthesis.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Try Multi-language Generation
            </button>
          </div>
          
          <div className="text-sm text-slate-500">
            Note: All translations are verified by our AI for accuracy and cultural sensitivity
          </div>
        </div>
      </div>
    </div>
  );
}