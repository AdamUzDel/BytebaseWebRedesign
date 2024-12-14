'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products = [
  {
    name: 'eSomero',
    description: 'Digital marketplace solution',
    image: '/pc.jpg',
    link: '/products/esomero',
  },
  {
    name: 'SACCO App',
    description: 'Savings and credit cooperative management',
    image: '/placeholder.jpg',
    link: '/products/sacco-app',
  },
  {
    name: 'Invoicing App',
    description: 'Streamlined invoicing and payment tracking',
    image: '/placeholder.jpg',
    link: '/products/invoicing-app',
  },
  {
    name: 'OnLine Learning App',
    description: 'Interactive e-learning platform',
    image: '/placeholder.jpg',
    link: '/products/online-learning-app',
  },
]

export default function PremiumProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + products.length) % products.length)
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
        >
          Our Premium Products
        </motion.h2>
        <div className="relative h-[500px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 1000 : -1000,
                  opacity: 0,
                  scale: 0.5,
                  rotateY: direction > 0 ? 90 : -90,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                },
                exit: (direction: number) => ({
                  x: direction < 0 ? 1000 : -1000,
                  opacity: 0,
                  scale: 0.5,
                  rotateY: direction < 0 ? 90 : -90,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.5 },
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full transform perspective-1000">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={products[currentIndex].image}
                      alt={products[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        {products[currentIndex].name}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {products[currentIndex].description}
                      </p>
                    </div>
                    <Link href={products[currentIndex].link}>
                      <Button size="lg" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
                        Learn More
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={24} />
            <span className="sr-only">Previous product</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full"
            onClick={() => navigate(1)}
          >
            <ChevronRight size={24} />
            <span className="sr-only">Next product</span>
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            {products.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
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
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    name: 'eSomero',
    description: 'Digital marketplace solution',
    image: '/pc.jpg',
    link: '/products/esomero',
  },
  {
    name: 'SACCO App',
    description: 'Savings and credit cooperative management',
    image: '/placeholder.jpg',
    link: '/products/sacco-app',
  },
  {
    name: 'Invoicing App',
    description: 'Streamlined invoicing and payment tracking',
    image: '/placeholder.jpg',
    link: '/products/invoicing-app',
  },
]

export default function PremiumProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link href={product.link} className="text-purple-600 hover:underline">
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

 */