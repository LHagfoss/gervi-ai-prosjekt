import { FiCheck, FiHeart } from 'react-icons/fi';

export default function PricingPage() {
  const features = [
    "Unlimited AI video generations",
    "1080p video quality",
    "Full avatar customization",
    "All languages supported",
    "Community support",
    "All templates included",
    "Standard rendering speed",
    "5GB storage",
    "Basic analytics",
    "Regular updates"
  ];

  const donationTiers = [
    { amount: "5", description: "Buy us a coffee" },
    { amount: "20", description: "Support development" },
    { amount: "50", description: "Become a patron" },
    { amount: "100", description: "Premium supporter" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Free for Everyone
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Our AI platform is completely free. Support us if you love what we do!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Features Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Free Forever</h2>
              <p className="text-slate-600 mb-4">
                All features included, no hidden costs
              </p>
              <div className="text-3xl font-bold text-blue-600">$0</div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Get Started Now
            </button>
          </div>

          {/* Donation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <FiHeart className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Support Our Project</h2>
              <p className="text-slate-600">
                Help us keep the platform free for everyone
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationTiers.map((tier, idx) => (
                <button
                  key={idx}
                  className="p-4 border-2 border-blue-100 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
                >
                  <div className="text-xl font-bold text-blue-600">${tier.amount}</div>
                  <div className="text-sm text-slate-600">{tier.description}</div>
                </button>
              ))}
            </div>

            <div className="text-center text-sm text-slate-500">
              All donations help support server costs and development
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            We believe in making AI accessible to everyone.
            <br />Your support helps us maintain and improve the platform.
          </p>
        </div>
      </div>
    </div>
  );
}