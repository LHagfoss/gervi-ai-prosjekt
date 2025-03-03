import { FiCheck } from 'react-icons/fi';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "99",
      period: "month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 AI video generations per month",
        "720p video quality",
        "Basic avatar customization",
        "5 languages supported",
        "Email support",
        "Basic templates",
        "Standard rendering speed",
        "2GB storage"
      ],
      highlighted: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "199",
      period: "month",
      description: "Ideal for professionals and growing businesses",
      features: [
        "25 AI video generations per month",
        "1080p video quality",
        "Advanced avatar customization",
        "20 languages supported",
        "Priority email & chat support",
        "Premium templates",
        "Fast rendering speed",
        "10GB storage",
        "Custom branding",
        "Analytics dashboard"
      ],
      highlighted: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "499",
      period: "month",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited AI video generations",
        "4K video quality",
        "Full avatar customization",
        "All languages supported",
        "24/7 dedicated support",
        "Custom templates",
        "Priority rendering",
        "100GB storage",
        "Advanced branding options",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      highlighted: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect plan for your content creation needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl p-8 
                ${plan.highlighted 
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2' 
                  : 'bg-white text-slate-900'
                }
              `}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className={`mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className="text-xl ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className={`w-5 h-5 mr-2 mt-0.5 ${
                      plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-colors
                  ${plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}