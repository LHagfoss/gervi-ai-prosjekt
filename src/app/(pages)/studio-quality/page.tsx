
export default function StudioQualityPage() {
  const features = [
    {
      title: "Professional Voice Synthesis",
      description: "Studio-grade voice generation with perfect pronunciation, natural intonation, and emotional expression",
      metrics: [
        "24-bit audio quality",
        "Natural breathing patterns",
        "Emotional range control",
        "Custom voice cloning"
      ],
      icon: "🎙️"
    },
    {
      title: "High-Definition Video",
      description: "Crystal clear video output with professional-grade resolution and smooth motion",
      metrics: [
        "Up to 4K resolution",
        "60 FPS capability",
        "HDR support",
        "Cinema-grade color grading"
      ],
      icon: "🎥"
    },
    {
      title: "Perfect Lip Sync",
      description: "Precise synchronization between audio and visual elements for a natural viewing experience",
      metrics: [
        "Frame-perfect accuracy",
        "Multi-language support",
        "Natural mouth movements",
        "Expression matching"
      ],
      icon: "👄"
    },
    {
      title: "Professional Lighting",
      description: "AI-powered lighting optimization that matches professional studio setups",
      metrics: [
        "Dynamic lighting adjustment",
        "Shadow optimization",
        "Color temperature control",
        "Ambient light simulation"
      ],
      icon: "💡"
    }
  ];

  return (
    <div className="min-h-screen mt-16 bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-8">
          Studio-Quality Output
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Experience professional-grade content generation that matches traditional studio production quality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-slate-600 mb-6">
                {feature.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {feature.metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className="bg-blue-50 px-4 py-2 rounded-lg text-sm text-slate-700"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold text-slate-900">
            Ready to Create Studio-Quality Content?
          </h3>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}