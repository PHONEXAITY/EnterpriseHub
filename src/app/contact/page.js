"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
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
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
              Contact
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              Contact Us
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} direction="up">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Get in touch with our enterprise team to discuss your business needs
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal delay={0.2} direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Our enterprise team is ready to help you transform your business. 
                  Reach out to us through any of the channels below, and we'll respond 
                  within 24 hours.
                </p>

                <StaggerContainer className="space-y-6">
                  {/* Email */}
                  <StaggerItem>
                    <motion.div 
                      className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">enterprise@enterprisehub.com</p>
                      <p className="text-gray-600">support@enterprisehub.com</p>
                    </div>
                    </motion.div>
                  </StaggerItem>

                  {/* Phone */}
                  <StaggerItem>
                    <motion.div 
                      className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">24/7 Enterprise Support</p>
                      </div>
                    </motion.div>
                  </StaggerItem>

                  {/* Office */}
                  <StaggerItem>
                    <motion.div 
                      className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                        <p className="text-gray-600">123 Enterprise Street</p>
                        <p className="text-gray-600">San Francisco, CA 94105</p>
                        <p className="text-gray-600">United States</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.3} direction="right">
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your enterprise needs..."
                  />
                </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

