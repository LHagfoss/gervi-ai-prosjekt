import { FiShield, FiServer, FiUsers, } from 'react-icons/fi';

export default function EnterprisePage() {
  const benefits = [
    {
      title: "Enterprise Security",
      description: "Bank-grade security with advanced encryption and compliance measures",
      icon: <FiShield className="w-6 h-6" />,
      features: ["SOC 2 Type II", "GDPR Compliant", "24/7 Security Monitoring", "Data Encryption"]
    },
    {
      title: "Dedicated Infrastructure",
      description: "Private cloud deployment with dedicated resources",
      icon: <FiServer className="w-6 h-6" />,
      features: ["Private Cloud", "Custom Storage", "High Availability", "Geographic Distribution"]
    },
    {
      title: "Team Management",
      description: "Advanced user management and role-based access control",
      icon: <FiUsers className="w-6 h-6" />,
      features: ["Role-Based Access", "Team Analytics", "Audit Logs", "Custom Permissions"]
    }
  ];

  const compliance = [
    "GDPR", "HIPAA", "SOC 2", "ISO 27001", "CCPA", "PCI DSS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Secure, scalable, and customizable AI content generation for large organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h2>
              <p className="text-slate-600 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-4 rounded-lg text-center text-slate-700 font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Scale Your Content Creation?
          </h2>
          <p className="mb-8 text-blue-100">
            Get in touch with our enterprise team for a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 text-sm text-slate-500 text-center">
          <p>© 2024 Your Company. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
            <a href="/security" className="hover:text-blue-600">Security</a>
          </div>
        </div>
      </div>
    </div>
  );
}