'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: 'The Future of Web Development',
    summary: 'Explore the latest trends and technologies shaping the future of web development.',
    image: '/placeholder.jpg',
    link: '/blog/future-of-web-development',
    category: 'Technology',
    date: 'May 15, 2023',
  },
  {
    title: 'Optimizing Your E-commerce Platform',
    summary: 'Learn key strategies to enhance your online store\'s performance and user experience.',
    image: '/placeholder.jpg',
    link: '/blog/optimizing-ecommerce-platform',
    category: 'E-commerce',
    date: 'June 2, 2023',
  },
  {
    title: 'The Impact of AI in Modern Software Solutions',
    summary: 'Discover how artificial intelligence is revolutionizing software development and business operations.',
    image: '/placeholder.jpg',
    link: '/blog/ai-in-modern-software',
    category: 'Artificial Intelligence',
    date: 'June 20, 2023',
  },
]

export default function LatestBlogPosts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and tips in technology and business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-sm font-medium text-white bg-teal-500 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 mb-6">{post.summary}</p>
                <Link href={post.link}>
                  <Button 
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
                    variant={hoveredIndex === index ? "default" : "outline"}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center text-center mt-14"
        >
          <Link href="/blog">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
              View All Blog Posts
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



/* 'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'The Future of Web Development',
    summary: 'Explore the latest trends and technologies shaping the future of web development.',
    image: '/placeholder.jpg',
    link: '/blog/future-of-web-development',
  },
  {
    title: 'Optimizing Your E-commerce Platform',
    summary: 'Learn key strategies to enhance your online store&apos;s performance and user experience.',
    image: '/placeholder.jpg',
    link: '/blog/optimizing-ecommerce-platform',
  },
  {
    title: 'The Impact of AI in Modern Software Solutions',
    summary: 'Discover how artificial intelligence is revolutionizing software development and business operations.',
    image: '/placeholder.jpg',
    link: '/blog/ai-in-modern-software',
  },
]

export default function LatestBlogPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link href={post.link} className="text-purple-600 hover:underline">
                Read more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

 */