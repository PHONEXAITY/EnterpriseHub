"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <ScrollReveal delay={0.1} direction="up">
                <motion.div 
                  className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Enterprise Grade Solutions
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} direction="up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  Enterprise Solutions
                  <motion.span 
                    className="block text-blue-400 mt-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    for Modern Businesses
                  </motion.span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3} direction="up">
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your business with cutting-edge technology and innovative solutions
                  designed for enterprise-scale operations.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4} direction="up">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/enterprise"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-blue-600/50 block"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/about"
                      className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all border border-gray-700 hover:border-gray-600 block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ScrollReveal delay={0.5} direction="right">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 shadow-2xl">
                    {/* Dashboard Mockup */}
                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-sm">Enterprise Dashboard</div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="space-y-4">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-800 rounded p-3">
                              <div className="h-8 bg-blue-600/30 rounded mb-2 animate-pulse"></div>
                              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Chart Area */}
                        <div className="bg-gray-800 rounded p-4">
                          <div className="h-32 bg-gradient-to-t from-blue-600/20 to-transparent rounded flex items-end justify-between space-x-2">
                            {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-blue-500 rounded-t transition-all duration-1000 hover:bg-blue-400"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Activity List */}
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div className="flex-1 h-3 bg-gray-800 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
                  </div>
                  
                  {/* Animated Border Glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-xl -z-10"
                    animate={{ 
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1} direction="up">
            <div className="text-center mb-16">
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Features
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to scale your business operations
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <StaggerItem>
              <div className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Feature Image/Illustration */}
                <div className="mb-6 relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Scalable Infrastructure Illustration */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <g transform="translate(100,100)">
                        {/* Server racks */}
                        {[0, 1, 2].map((i) => (
                          <rect
                            key={i}
                            x={-80 + i * 60}
                            y={-40}
                            width={40}
                            height={80}
                            fill="#3B82F6"
                            opacity="0.3"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                        {/* Connection lines */}
                        <line x1="-40" y1="0" x2="40" y2="0" stroke="#3B82F6" strokeWidth="3" opacity="0.5" />
                        {/* Nodes */}
                        {[-40, 0, 40].map((x, i) => (
                          <circle
                            key={i}
                            cx={x}
                            cy={0}
                            r="8"
                            fill="#3B82F6"
                            className="animate-ping"
                            style={{ animationDelay: `${i * 0.3}s` }}
                          />
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build on a robust platform that grows with your business needs, supporting millions of users with seamless scalability.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Feature 2 */}
            <StaggerItem>
              <motion.div 
                className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                {/* Security Illustration */}
                <div className="mb-6 relative h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <g transform="translate(100,100)">
                        {/* Shield */}
                        <path
                          d="M0,-60 Q-30,-50 -30,-20 L-30,20 Q-30,40 -15,50 Q0,60 15,50 Q30,40 30,20 L30,-20 Q30,-50 0,-60 Z"
                          fill="#10B981"
                          opacity="0.3"
                        />
                        {/* Lock */}
                        <rect x="-15" y="10" width="30" height="40" rx="5" fill="#10B981" opacity="0.5" />
                        {/* Lock keyhole */}
                        <circle cx="0" cy="30" r="6" fill="#10B981" />
                        {/* Security rings */}
                        {[0, 1, 2].map((i) => (
                          <circle
                            key={i}
                            cx="0"
                            cy="0"
                            r={40 + i * 20}
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="2"
                            opacity="0.2"
                            className="animate-ping"
                            style={{ animationDelay: `${i * 0.5}s` }}
                          />
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level encryption and compliance with industry standards to protect your data with multi-layered security.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Feature 3 */}
            <StaggerItem>
              <motion.div 
                className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                {/* Support Illustration */}
                <div className="mb-6 relative h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <g transform="translate(100,100)">
                        {/* Support agents */}
                        {[
                          { x: -50, y: -20 },
                          { x: 0, y: 0 },
                          { x: 50, y: -20 }
                        ].map((pos, i) => (
                          <g key={i}>
                            <circle
                              cx={pos.x}
                              cy={pos.y}
                              r="15"
                              fill="#A855F7"
                              opacity="0.4"
                              className="animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            />
                            {/* Head */}
                            <circle
                              cx={pos.x}
                              cy={pos.y - 8}
                              r="8"
                              fill="#A855F7"
                              opacity="0.6"
                            />
                            {/* Body */}
                            <rect
                              x={pos.x - 10}
                              y={pos.y}
                              width="20"
                              height="25"
                              rx="5"
                              fill="#A855F7"
                              opacity="0.6"
                            />
                          </g>
                        ))}
                        {/* Connection lines */}
                        <line x1="-35" y1="-10" x2="35" y2="-10" stroke="#A855F7" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" className="animate-pulse" />
                      </g>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock expert support to ensure your operations never skip a beat with dedicated account managers.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1} direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Enterprises</h2>
              <p className="text-xl text-gray-400">Numbers that speak for themselves</p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-gray-400 font-medium">Enterprise Clients</div>
              </motion.div>
            </StaggerItem>
            
            <StaggerItem>
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.05, borderColor: "#3B82F6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-gray-400 font-medium">Uptime SLA</div>
              </motion.div>
            </StaggerItem>
            
            <StaggerItem>
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.05, borderColor: "#3B82F6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-400 font-medium">Countries Served</div>
              </motion.div>
            </StaggerItem>
            
            <StaggerItem>
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.05, borderColor: "#3B82F6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-400 font-medium">Expert Support</div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl">
                  {/* Enterprise Architecture Diagram */}
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      {/* Cloud Layer */}
                      <div className="flex justify-center items-center space-x-4">
                        <div className="bg-blue-100 px-6 py-3 rounded-lg border-2 border-blue-300">
                          <div className="text-sm font-semibold text-blue-700">Cloud Infrastructure</div>
                        </div>
                      </div>
                      
                      {/* API Gateway Layer */}
                      <div className="flex justify-center">
                        <div className="w-full bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
                          <div className="text-xs font-semibold text-gray-700 text-center mb-2">API Gateway</div>
                          <div className="flex justify-center space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-12 h-2 bg-blue-400 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Services Layer */}
                      <div className="grid grid-cols-3 gap-3">
                        {['Auth', 'Data', 'API'].map((service, i) => (
                          <div key={i} className="bg-indigo-50 p-3 rounded border border-indigo-200">
                            <div className="text-xs font-semibold text-indigo-700 text-center">{service}</div>
                            <div className="mt-2 h-1 bg-indigo-300 rounded"></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Database Layer */}
                      <div className="flex justify-center">
                        <div className="bg-green-100 px-6 py-3 rounded-lg border-2 border-green-300">
                          <div className="text-sm font-semibold text-green-700">Database Cluster</div>
                        </div>
                      </div>
                      
                      {/* Connection Lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full">
                          <line x1="50%" y1="20%" x2="50%" y2="30%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                          <line x1="50%" y1="50%" x2="50%" y2="70%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-2000"></div>
              </div>
            </ScrollReveal>
            
            {/* Content */}
            <ScrollReveal delay={0.3} direction="right">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  Enterprise Solutions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Built for Scale, Designed for Growth
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Our enterprise platform is architected to handle the most demanding workloads. 
                  Whether you're serving thousands or millions of users, our infrastructure scales seamlessly.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Multi-region deployment for global reach',
                    'Auto-scaling infrastructure that adapts to demand',
                    'Real-time analytics and monitoring',
                    'Advanced security and compliance features'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/enterprise"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Solutions
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Business?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of enterprises already using our solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-all shadow-2xl inline-block"
              >
                Contact Sales
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
