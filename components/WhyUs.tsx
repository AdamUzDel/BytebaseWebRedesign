'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Users, Code, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Cutting-edge Technology',
    description: 'We leverage the latest tech to deliver innovative solutions that keep you ahead of the curve.',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Experienced Team',
    description: 'Our experts bring years of industry knowledge to every project, ensuring top-tier results.',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: 'Tailored Solutions',
    description: 'We create custom solutions that perfectly align with your unique business needs and goals.',
    color: 'from-purple-400 to-pink-600',
  },
]

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="container py-12 md:py-16 mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge solutions and unparalleled expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="bg-white p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative z-10">
                  <motion.div 
                    className={`text-white mb-6 inline-block p-4 rounded-full bg-gradient-to-br ${feature.color}`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center text-center mt-12 relative z-10"
        >
          <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </Button>
        </motion.div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, Math.random() * 0.5 + 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 10 + 10,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



/* 'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Code } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Cutting-edge Technology',
    description: 'We leverage the latest tech to deliver innovative solutions.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Experienced Team',
    description: 'Our experts bring years of industry knowledge to every project.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Tailored Solutions',
    description: 'We create custom solutions to meet your unique business needs.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

 */