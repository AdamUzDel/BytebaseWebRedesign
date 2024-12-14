'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: <Globe className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Scalable Web Apps',
    description: 'We build robust, scalable web applications tailored to your business needs.',
    color: 'from-blue-400 to-indigo-600',
    details: 'Our team of expert developers creates custom web applications that grow with your business. We use cutting-edge technologies and best practices to ensure your app is fast, secure, and scalable.',
  },
  {
    icon: <Smartphone className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Digital Marketing',
    description: 'Our digital marketing strategies help you reach and engage your target audience.',
    color: 'from-teal-400 to-cyan-600',
    details: 'We develop comprehensive digital marketing strategies that increase your online visibility, drive traffic, and convert leads. Our approach combines SEO, content marketing, social media, and paid advertising for maximum impact.',
  },
  {
    icon: <TrendingUp className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Business Optimization',
    description: 'We provide custom software solutions to streamline your operations and boost efficiency.',
    color: 'from-purple-400 to-pink-600',
    details: 'Our business optimization solutions analyze your current processes and implement custom software to automate tasks, reduce errors, and increase productivity. We help you make data-driven decisions to improve your bottom line.',
  },
]

export default function HowWeCanHelp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <section className="py-12 md:py-16 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            How We Can Help
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-0 pb-0 max-w-3xl mx-auto">
            Discover our innovative solutions to transform your business and drive growth.
          </p>
        </motion.div>
        <div className="relative h-[500px] md:h-[400px] overflow-hidden" ref={containerRef}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`p-6 md:p-12 bg-gradient-to-br ${solutions[activeIndex].color}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white mb-4 md:mb-8"
                    >
                      {solutions[activeIndex].icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4"
                    >
                      {solutions[activeIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base md:text-xl text-white/90"
                    >
                      {solutions[activeIndex].description}
                    </motion.p>
                  </div>
                  <div className="p-6 md:p-12 flex flex-col justify-between">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-8"
                    >
                      {solutions[activeIndex].details}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button size="lg" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-4 md:px-8 py-3 md:py-6 text-base md:text-lg rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
            <span className="sr-only">Previous solution</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
            <span className="sr-only">Next solution</span>
          </Button>
        </div>
        <div className="flex justify-center mt-4 md:mt-8">
          {solutions.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`mx-1 ${
                index === activeIndex ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}



/* 'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, TrendingUp } from 'lucide-react'

const solutions = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Need scalable web apps?',
    description: 'We build robust, scalable web applications tailored to your business needs.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Looking to boost your online presence?',
    description: 'Our digital marketing strategies help you reach and engage your target audience.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Want to optimize your business processes?',
    description: 'We provide custom software solutions to streamline your operations and boost efficiency.',
  },
]

export default function HowWeCanHelp() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-purple-600 mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

 */