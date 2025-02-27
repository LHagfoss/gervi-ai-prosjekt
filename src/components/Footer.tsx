export default function Footer() {
    return (
      <footer className="bg-blue-900 text-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AI Creation Hub</h3>
              <p className="text-blue-300">
                Your all-in-one platform for AI-powered content creation
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-blue-300">
                Email: info@aicreationhub.com<br />
                Support: support@aicreationhub.com
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-400">
              © {new Date().getFullYear()} AI Creation Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }