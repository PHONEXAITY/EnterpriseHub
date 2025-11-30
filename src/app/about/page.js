export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About EnterpriseHub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Leading the industry in enterprise solutions for over a decade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At EnterpriseHub, we are dedicated to empowering businesses with cutting-edge 
              technology solutions that drive growth, innovation, and operational excellence. 
              Our mission is to help enterprises transform their operations through intelligent, 
              scalable, and secure platforms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of technology to deliver solutions 
                  that anticipate and meet future business needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in everything we do, from product 
                  development to customer service.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-700">
                  Security and reliability are at the core of our platform, ensuring 
                  your business operations are always protected.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-700">
                  We work closely with our clients as strategic partners, understanding 
                  their unique challenges and delivering tailored solutions.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <ul className="list-none space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">
                  <strong>Enterprise Expertise:</strong> Over 10 years of experience serving 
                  Fortune 500 companies and growing businesses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">
                  <strong>Global Reach:</strong> Serving clients in over 50 countries with 
                  localized support and compliance.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">
                  <strong>Proven Track Record:</strong> 99.9% uptime SLA and 98% customer 
                  satisfaction rate.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">
                  <strong>Continuous Innovation:</strong> Regular updates and new features 
                  based on market trends and customer feedback.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}