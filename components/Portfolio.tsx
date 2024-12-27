'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const categories = [
  'All',
  'Websites & Apps',
  'Branding, Design & Print',
  'Architectural Drawings'
]

const projects = [
  {
    id: 1,
    title: 'Kambo Autos',
    category: 'Websites & Apps',
    description: 'A professional website for a leading auto dealer in Uganda.',
    image: '/kambo-autos-screenshot.png',
    techStack: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    highlight: 'Optimized for mobile users and integrated with local payment gateways.',
  },
  {
    id: 2,
    title: 'E-Somero',
    category: 'Websites & Apps',
    description: 'A comprehensive learning management system for educators and students.',
    image: '/esomero-dashboard.jpg',
    techStack: 'React, Node.js, MongoDB',
    highlight: 'Fully responsive with an intuitive user interface, modeled after platforms like Udemy and NetAcad.',
  },
  {
    id: 3,
    title: 'Ask Rhona',
    category: 'Websites & Apps',
    description: 'An AI-powered chatbot for efficient customer service.',
    image: '/ask-rhona-screenshot.jpg',
    techStack: 'Python, TensorFlow, React',
    highlight: 'Innovatively integrates AI to enhance user experience.',
  },
  {
    id: 4,
    title: 'Mukono Bakers Logo Design',
    category: 'Branding, Design & Print',
    description: 'Minimalist logo design for a local bakery.',
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    title: 'Event Poster for Lugogo Marathon',
    category: 'Branding, Design & Print',
    description: 'Vibrant, eye-catching poster for a local charity run.',
    image: '/placeholder.jpg',
  },
  {
    id: 6,
    title: 'BytebaseTech Rebranding',
    category: 'Branding, Design & Print',
    description: 'Redesigned BytebaseTech\'s branding assets.',
    image: '/placeholder.jpg',
    highlight: 'Includes modernized logo, business cards, and promotional materials.',
  },
  {
    id: 7,
    title: 'Residential House Plan (Entebbe)',
    category: 'Architectural Drawings',
    description: 'Detailed house plan for a modern three-bedroom residence in Entebbe.',
    image: '/placeholder.jpg',
  },
  {
    id: 8,
    title: 'Commercial Plaza Design (Kampala)',
    category: 'Architectural Drawings',
    description: 'Conceptualized a functional and aesthetically pleasing commercial plaza.',
    image: '/placeholder.jpg',
  },
  {
    id: 9,
    title: 'Interior Design for Restaurants',
    category: 'Architectural Drawings',
    description: 'Created 3D renderings and floor plans for restaurant spaces.',
    image: '/placeholder.jpg',
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    setFilteredProjects(
      filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter)
    )
  }, [filter])

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
        >
          Our Portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-600">{project.category}</span>
                    <Link href={`/portfolio/${project.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-cyan-600 hover:text-cyan-700"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            No projects found in this category.
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center text-center mt-14"
        >
          <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
            View All Projects
            <ChevronDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}



/* 'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Websites/Apps', 'Branding/Design/Print', 'Architectural Drawings']

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Websites/Apps',
    image: '/placeholder.jpg',
  },

  {
    title: 'Corporate Branding',
    category: 'Branding/Design/Print',
    image: '/placeholder.jpg',
  },
  {
    title: 'Modern Office Design',
    category: 'Architectural Drawings',
    image: '/placeholder.jpg',
  },
  // Add more projects as needed
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

 */