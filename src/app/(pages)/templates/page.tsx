import { FiVideo, FiImage, FiMusic, FiMessageCircle } from 'react-icons/fi';

export default function TemplatesPage() {
  const categories = [
    {
      title: "Video Templates",
      icon: <FiVideo className="w-6 h-6" />,
      templates: [
        {
          name: "Product Showcase",
          description: "Perfect for product demonstrations and reviews",
          duration: "1-3 minutes",
          useCase: "E-commerce, Product Marketing"
        },
        {
          name: "Educational Tutorial",
          description: "Step-by-step instructional content",
          duration: "5-10 minutes",
          useCase: "Training, Education"
        },
        {
          name: "Company Presentation",
          description: "Professional business presentations",
          duration: "2-5 minutes",
          useCase: "Corporate Communications"
        }
      ]
    },
    {
      title: "Image Generation",
      icon: <FiImage className="w-6 h-6" />,
      templates: [
        {
          name: "Social Media Post",
          description: "Engaging visuals for social platforms",
          duration: "Instant",
          useCase: "Social Media Marketing"
        },
        {
          name: "Brand Assets",
          description: "Consistent brand imagery generation",
          duration: "Instant",
          useCase: "Brand Marketing"
        },
        {
          name: "Product Visualization",
          description: "3D product renders and mockups",
          duration: "2-5 minutes",
          useCase: "Product Design"
        }
      ]
    },
    {
      title: "Audio Generation",
      icon: <FiMusic className="w-6 h-6" />,
      templates: [
        {
          name: "Podcast Intro",
          description: "Professional podcast openings",
          duration: "30 seconds",
          useCase: "Podcast Production"
        },
        {
          name: "Background Music",
          description: "Custom music for your content",
          duration: "1-3 minutes",
          useCase: "Content Creation"
        },
        {
          name: "Voice Over",
          description: "Professional voice narration",
          duration: "Variable",
          useCase: "Narration, Advertising"
        }
      ]
    },
    {
      title: "Text Generation",
      icon: <FiMessageCircle className="w-6 h-6" />,
      templates: [
        {
          name: "Blog Post",
          description: "SEO-optimized article writing",
          duration: "Instant",
          useCase: "Content Marketing"
        },
        {
          name: "Script Writing",
          description: "Video and presentation scripts",
          duration: "Instant",
          useCase: "Content Creation"
        },
        {
          name: "Product Description",
          description: "Compelling product descriptions",
          duration: "Instant",
          useCase: "E-commerce"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Content Generation Templates
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Choose from our pre-built templates to quickly create professional content
        </p>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {template.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="text-slate-500 w-24">Duration:</span>
                        <span className="text-slate-700">{template.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-slate-500 w-24">Best for:</span>
                        <span className="text-slate-700">{template.useCase}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}