
export default function AIAvatarsPage() {
  const capabilities = [
    {
      title: "Image Generation",
      description: "Create stunning visuals and artwork using advanced AI algorithms",
      icon: "🎨",
      examples: ["Portraits", "Landscapes", "Abstract Art", "Product Visualization"]
    },
    {
      title: "Video Creation",
      description: "Generate dynamic video content with AI-powered avatars and animations",
      icon: "🎥",
      examples: ["Presentations", "Educational Content", "Marketing Videos", "Story Narratives"]
    },
    {
      title: "Music Production",
      description: "Compose and generate original music tracks and sound effects",
      icon: "🎵",
      examples: ["Background Music", "Sound Effects", "Original Compositions", "Audio Mixing"]
    },
    {
      title: "Text to Speech",
      description: "Convert text into natural-sounding voice with multiple language support",
      icon: "🗣️",
      examples: ["Voice Overs", "Narration", "Audio Books", "Language Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-slate-900 text-center mb-8">
          AI Avatars & Content Generation
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Harness the power of artificial intelligence to create stunning content across multiple mediums
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {capability.title}
              </h2>
              <p className="text-slate-600 mb-6">
                {capability.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {capability.examples.map((example, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Ready to Create?
          </h3>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Generating Content
          </button>
        </div>
      </div>
    </div>
  );
}