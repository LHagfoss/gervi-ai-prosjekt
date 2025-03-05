import { FiCheck, FiHeart } from 'react-icons/fi';

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "5 AI video generations/month",
        "720p video quality",
        "Basic avatar customization",
        "5 languages supported",
        "Community support",
        "Basic templates",
        "Standard rendering speed",
        "2GB storage",
        "Basic analytics"
      ]
    },
    {
      name: "Pro",
      price: "29",
      description: "For professional creators",
      features: [
        "Unlimited AI video generations",
        "4K video quality",
        "Advanced avatar customization",
        "All languages supported",
        "Priority support",
        "All templates included",
        "Fast rendering speed",
        "50GB storage",
        "Advanced analytics",
        "API access",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom AI model training",
        "Unlimited storage",
        "Team collaboration",
        "SSO integration",
        "Custom API limits",
        "SLA guarantee",
        "Security features",
        "Custom features"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b mt-16 from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Choose the plan that best fits your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-8 shadow-sm ${idx === 1 ? 'border-2 border-blue-500 relative' : ''}`}>
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-slate-600 mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-bold text-blue-600">
                  {plan.price === "Custom" ? (
                    "Custom"
                  ) : (
                    <>
                      ${plan.price}
                      <span className="text-base font-normal text-slate-600">/month</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start">
                    <FiCheck className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  idx === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        {/* Donation Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FiHeart className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Support Our Project</h2>
            <p className="text-slate-600">
              Love our platform? Help us make it even better with your support!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { amount: "5", description: "Buy us a coffee" },
              { amount: "20", description: "Support development" },
              { amount: "50", description: "Become a patron" },
              { amount: "100", description: "Premium supporter" }
            ].map((tier, idx) => (
              <button
                key={idx}
                className="p-4 border-2 border-blue-100 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
              >
                <div className="text-xl font-bold text-blue-600">${tier.amount}</div>
                <div className="text-sm text-slate-600">{tier.description}</div>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            All donations help support server costs and future development
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            All plans include updates and basic support.
            <br />
            Enterprise plans can be customized to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}