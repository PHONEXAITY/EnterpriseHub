"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.2} direction="up">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
                About Us
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              About EnterpriseHub
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} direction="up">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Leading the industry in enterprise solutions for over a decade
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <ScrollReveal delay={0.2} direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="up">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                At EnterpriseHub, we are dedicated to empowering businesses with cutting-edge 
                technology solutions that drive growth, innovation, and operational excellence. 
                Our mission is to help enterprises transform their operations through intelligent, 
                scalable, and secure platforms.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <StaggerItem>
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously push the boundaries of technology to deliver solutions 
                    that anticipate and meet future business needs.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We maintain the highest standards in everything we do, from product 
                    development to customer service.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
                  <p className="text-gray-700">
                    Security and reliability are at the core of our platform, ensuring 
                    your business operations are always protected.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                  <p className="text-gray-700">
                    We work closely with our clients as strategic partners, understanding 
                    their unique challenges and delivering tailored solutions.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.5} direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            </ScrollReveal>

            <StaggerContainer className="list-none space-y-4 mb-12">
              {[
                {
                  title: "Enterprise Expertise",
                  description: "Over 10 years of experience serving Fortune 500 companies and growing businesses."
                },
                {
                  title: "Global Reach",
                  description: "Serving clients in over 50 countries with localized support and compliance."
                },
                {
                  title: "Proven Track Record",
                  description: "99.9% uptime SLA and 98% customer satisfaction rate."
                },
                {
                  title: "Continuous Innovation",
                  description: "Regular updates and new features based on market trends and customer feedback."
                }
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.li 
                    className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                    whileHover={{ x: 5, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span 
                      className="text-blue-600 mr-3 text-xl flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">{item.title}:</strong> {item.description}
                    </span>
                  </motion.li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
