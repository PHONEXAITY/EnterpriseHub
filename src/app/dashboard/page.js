"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/components/auth/AuthProvider";
import { isAuthenticated } from "@/utils/auth";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      router.push("/login");
    }
  }, [loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div
          className="text-white text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0.1} direction="up">
          <div className="mb-8">
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Enterprise Dashboard
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Welcome back, {user.fullName}!
            </h1>
            <p className="text-gray-400 text-lg">Dashboard - {user.company || "EnterpriseHub"}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/games"
                className="block bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl hover:shadow-2xl transition-all shadow-xl"
              >
                <div className="text-white">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    🎮
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise Games</h3>
                  <p className="text-blue-100">Play exclusive enterprise games</p>
                </div>
              </Link>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-2">Analytics</h3>
                <p className="text-green-100">View your business metrics</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-2">Settings</h3>
                <p className="text-purple-100">Manage your account</p>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal delay={0.4} direction="up">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Total Sessions", value: "1,234" },
                { label: "Active Projects", value: "12" },
                { label: "Team Members", value: "24" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
