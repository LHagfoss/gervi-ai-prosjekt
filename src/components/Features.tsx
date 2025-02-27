import Link from 'next/link';

const features = [
  {
    title: "AI Avatars",
    description: "Choose from over 140+ diverse AI avatars for your videos",
    icon: "👤"
  },
  {
    title: "Multiple Languages",
    description: "Create videos in 140+ languages with natural voiceovers",
    icon: "🌍"
  },
  {
    title: "Easy Creation",
    description: "Simple slide-deck like interface for video creation",
    icon: "✨"
  },
  {
    title: "Studio Quality",
    description: "Professional-grade video output with perfect syncing",
    icon: "🎥"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
          Features that make video creation simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}