import { FiPlay, FiEdit, FiShare2 } from 'react-icons/fi';

export default function EasyCreationPage() {
  const steps = [
    {
      title: "1. Choose Your Content Type",
      description: "Select whether you want to create a video, generate images, compose music, or convert text to speech.",
      icon: <FiEdit className="w-6 h-6" />,
      tips: [
        "Consider your target audience",
        "Decide on content duration",
        "Choose appropriate style and tone"
      ]
    },
    {
      title: "2. Input Your Requirements",
      description: "Describe what you want to create using natural language. Our AI understands detailed instructions and creative directions.",
      icon: <FiPlay className="w-6 h-6" />,
      tips: [
        "Be specific with your instructions",
        "Include style references if needed",
        "Specify any brand guidelines"
      ]
    },
    {
      title: "3. Review and Refine",
      description: "Preview your generated content and make adjustments using our intuitive editing tools.",
      icon: <FiEdit className="w-6 h-6" />,
      tips: [
        "Check for accuracy and quality",
        "Make necessary adjustments",
        "Test with target audience if possible"
      ]
    },
    {
      title: "4. Export and Share",
      description: "Download your content in various formats or share directly to your preferred platforms.",
      icon: <FiShare2 className="w-6 h-6" />,
      tips: [
        "Choose appropriate export format",
        "Optimize for target platform",
        "Save project for future edits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Getting Started with Our AI Platform
          </h1>
          <p className="text-lg text-slate-600">
            Create professional content in minutes with our intuitive AI-powered platform. 
            Follow this simple guide to get started with your content creation journey.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-slate-600 mb-6">
                    {step.description}
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-medium text-slate-900 mb-3">Pro Tips:</h3>
                    <ul className="space-y-2">
                      {step.tips.map((tip, idx) => (
                        <li key={idx} className="text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Create Your First Project?
          </h3>
          <p className="mb-6 text-blue-100">
            Start creating amazing content with our AI platform today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}