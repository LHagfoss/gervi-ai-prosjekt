import { FiBook, FiGlobe, FiCpu, FiUsers, FiLayers,} from 'react-icons/fi';
import Link from 'next/link';

export default function DocumentationPage() {
  const sections = [
    {
      title: "Studio Quality Features",
      icon: <FiCpu className="w-6 h-6" />,
      description: "Professional-grade content generation capabilities",
      link: "/studio-quality",
      features: [
        "24-bit audio quality with natural voice synthesis",
        "4K video resolution with 60 FPS capability",
        "Frame-perfect lip synchronization",
        "Professional AI-powered lighting"
      ]
    },
    {
      title: "Multiple Language Support",
      icon: <FiGlobe className="w-6 h-6" />,
      description: "Create content in 140+ languages with native quality",
      link: "/multiple-languages",
      features: [
        "Native accent support",
        "Cultural adaptation",
        "Regional dialect options",
        "Real-time translation"
      ]
    },
    {
      title: "Easy Content Creation",
      icon: <FiLayers className="w-6 h-6" />,
      description: "Simple step-by-step content generation process",
      link: "/easy-creation",
      features: [
        "Intuitive content type selection",
        "Natural language instructions",
        "Real-time preview and editing",
        "Multiple export options"
      ]
    },
    {
      title: "AI Avatars",
      icon: <FiUsers className="w-6 h-6" />,
      description: "Advanced AI-powered avatar customization",
      link: "/ai-avatars",
      features: [
        "Multiple avatar styles",
        "Voice customization",
        "Gesture controls",
        "Expression range"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive guide to OmniGen's features and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <Link 
              href={section.link} 
              key={idx}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {section.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 mb-6">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.features.map((feature, featureIdx) => (
                    <li 
                      key={featureIdx} 
                      className="flex items-start text-sm text-slate-700"
                    >
                      <FiBook className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Need more help? Contact our support team for detailed assistance.
          </p>
        </div>
      </div>
    </div>
  );
}