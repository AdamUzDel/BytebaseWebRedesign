'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Kim Kasada',
    company: 'Tech Solutions Inc.',
    testimonial: 'BytebaseTech delivered an exceptional e-commerce platform that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.',
    image: '/kim.png',
  },
  {
    name: 'Tumwiine Amos',
    company: 'Creative Designs Co.',
    testimonial: 'Working with BytebaseTech was a game-changer for our brand. Their innovative approach to our website redesign significantly improved our online presence and user engagement.',
    image: '/tumwiine.webp',
  },
  {
    name: 'Gumisiriza Jeremiah',
    company: 'Global Innovations Ltd.',
    testimonial: 'The custom software solution provided by BytebaseTech streamlined our operations and boosted our productivity. Their ongoing support has been invaluable to our business growth.',
    image: '/jeremiah.png',
  },
  {
    name: 'Nakamya Teddy',
    company: 'Startup Accelerator',
    testimonial: 'BytebaseTech\'s expertise in mobile app development helped us launch our startup\'s MVP in record time. Their agile approach and attention to detail were impressive.',
    image: '/woman1.webp',
  },
  {
    name: 'David Andama',
    company: 'E-learning Platform',
    testimonial: 'The online learning platform developed by BytebaseTech revolutionized our course delivery. The intuitive interface and robust features have significantly improved student engagement.',
    image: '/andama.png',
  },
]

export default function CustomerOpinions() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const startAnimation = useCallback(() => {
    controls.start({
      x: [x.get(), -(100 * testimonials.length) + x.get()],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
  }, [controls, x])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  const handleHoverStart = () => setIsHovered(true)
  const handleHoverEnd = () => setIsHovered(false)

  useEffect(() => {
    if (isHovered) {
      controls.stop()
    } else {
      startAnimation()
    }
  }, [isHovered, controls, startAnimation])

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with BytebaseTech.
          </p>
        </motion.div>
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          onTouchStart={handleHoverStart}
          onTouchEnd={handleHoverEnd}
        >
          <motion.div
            className="flex"
            style={{ x }}
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] mx-4"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-teal-500 mb-4" />
                    <p className="text-gray-700 mb-6">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

