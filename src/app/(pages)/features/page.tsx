import { FiVideo, FiGlobe, FiCpu, FiUsers, FiLayers, FiClock, FiEdit, FiMusic, FiMessageCircle, FiShield } from 'react-icons/fi';

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Video Generation",
      description: "Create professional videos with AI-powered avatars and scenes",
      icon: <FiVideo className="w-8 h-8" />,
      details: [
        "Multiple avatar styles",
        "Custom backgrounds",
        "Scene transitions",
        "Motion effects"
      ]
    },
    {
      title: "Multilingual Support",
      description: "Generate content in over 140 languages with natural pronunciation",
      icon: <FiGlobe className="w-8 h-8" />,
      details: [
        "Native accents",
        "Regional dialects",
        "Cultural adaptation",
        "Real-time translation"
      ]
    },
    {
      title: "Advanced AI Processing",
      description: "State-of-the-art AI models for content generation",
      icon: <FiCpu className="w-8 h-8" />,
      details: [
        "Neural networks",
        "Deep learning",
        "Real-time processing",
        "Continuous learning"
      ]
    },
    {
      title: "Avatar Customization",
      description: "Personalize AI avatars to match your brand",
      icon: <FiUsers className="w-8 h-8" />,
      details: [
        "Appearance editing",
        "Voice customization",
        "Gesture control",
        "Expression range"
      ]
    },
    {
      title: "Content Templates",
      description: "Ready-to-use templates for quick content creation",
      icon: <FiLayers className="w-8 h-8" />,
      details: [
        "Business presentations",
        "Educational content",
        "Marketing videos",
        "Social media posts"
      ]
    },
    {
      title: "Real-time Generation",
      description: "Quick processing and rendering of content",
      icon: <FiClock className="w-8 h-8" />,
      details: [
        "Fast rendering",
        "Live preview",
        "Batch processing",
        "Queue management"
      ]
    },
    {
      title: "Script Generation",
      description: "AI-powered script writing and optimization",
      icon: <FiEdit className="w-8 h-8" />,
      details: [
        "Content suggestions",
        "Style adaptation",
        "Tone adjustment",
        "Length optimization"
      ]
    },
    {
      title: "Audio Generation",
      description: "Create professional audio content and music",
      icon: <FiMusic className="w-8 h-8" />,
      details: [
        "Voice synthesis",
        "Background music",
        "Sound effects",
        "Audio mixing"
      ]
    },
    {
      title: "Interactive Responses",
      description: "Natural language processing for dynamic interactions",
      icon: <FiMessageCircle className="w-8 h-8" />,
      details: [
        "Context awareness",
        "Natural responses",
        "Memory retention",
        "Personality matching"
      ]
    },
    {
      title: "Content Safety",
      description: "Advanced content filtering and safety measures",
      icon: <FiShield className="w-8 h-8" />,
      details: [
        "Content moderation",
        "Brand safety",
        "Age appropriate",
        "Ethical guidelines"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-8">
          Our Features
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Discover the powerful capabilities of our AI content generation platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xs hover:shadow-md transition-all"
            >
              <div className="text-blue-600 mb-6">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-slate-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}