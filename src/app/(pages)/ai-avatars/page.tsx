
export default function AIAvatarsPage() {
  const capabilities = [
    {
      title: "Image Generation",
      description: "Create stunning visuals using Midjourney and DreamMachine AI",
      icon: "🎨",
      aiTools: ["DreamMachine", "LumaLabs"],
      examples: ["3D Renders", "Photorealistic Images", "Product Designs", "Architectural Visualization"]
    },
    {
      title: "Video Creation",
      description: "Generate professional videos with Hedera and Luma AI technology",
      icon: "🎥",
      aiTools: ["Hedera", "Luma"],
      examples: ["3D Animations", "Virtual Presentations", "Product Demos", "Character Animation"]
    },
    {
      title: "Music Production",
      description: "Compose original music and audio using Suno AI",
      icon: "🎵",
      aiTools: ["Suno"],
      examples: ["Original Tracks", "Background Music", "Sound Effects", "Voice Synthesis"]
    },
    {
      title: "Text to Speech",
      description: "Convert text to natural voice using ElevenLabs and ChatGPT",
      icon: "🗣️",
      aiTools: ["ElevenLabs", "ChatGPT"],
      examples: ["Natural Narration", "Multi-language Voice", "Character Voices", "Real-time Speech"]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-slate-900 text-center mb-8">
          Advanced AI Integration
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Powered by industry-leading AI technologies to deliver exceptional content generation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {capability.title}
              </h2>
              <p className="text-slate-600 mb-4">
                {capability.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium text-slate-500 mb-2">Powered by:</div>
                <div className="flex flex-wrap gap-2">
                  {capability.aiTools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
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
            Experience Next-Gen AI Creation
          </h3>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}