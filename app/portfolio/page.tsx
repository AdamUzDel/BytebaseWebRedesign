'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const tabsRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  useEffect(() => {
    const tabsElement = tabsRef.current
    if (tabsElement) {
      let isDown = false
      let startX: number
      let scrollLeft: number

      tabsElement.addEventListener('mousedown', (e) => {
        isDown = true
        startX = e.pageX - tabsElement.offsetLeft
        scrollLeft = tabsElement.scrollLeft
      })

      tabsElement.addEventListener('mouseleave', () => {
        isDown = false
      })

      tabsElement.addEventListener('mouseup', () => {
        isDown = false
      })

      tabsElement.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - tabsElement.offsetLeft
        const walk = (x - startX) * 2
        tabsElement.scrollLeft = scrollLeft - walk
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl md:mt-8 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work Speaks for Itself
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how we empower businesses through innovative and modern digital solutions.
          </motion.p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.jpg"
            alt="Portfolio Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <div ref={tabsRef} className="overflow-x-auto md:flex justify-center pb-4 mb-8">
              <TabsList className="inline-flex bg-gray-800 p-1 rounded-lg">
                {categories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-md transition-all whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-teal-400">{project.title}</CardTitle>
                          <CardDescription className="text-gray-400">{project.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300">{project.description}</p>
                          {project.techStack && (
                            <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack}</p>
                          )}
                          {project.highlight && (
                            <p className="mt-2 text-sm text-cyan-400">{project.highlight}</p>
                          )}
                        </CardContent>
                        <CardFooter>
                          <Button asChild variant="outline" size="sm" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
                            <Link href={`/portfolio/${project.id}`}>View Details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Featured Case Study</h2>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-teal-400">Kambo Autos: A Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p className="mb-4"><strong className="text-cyan-400">Problem:</strong> Lack of an online presence, leading to limited customer reach.</p>
              <p className="mb-4"><strong className="text-cyan-400">Solution:</strong> BytebaseTech designed a modern, mobile-friendly website with advanced search and filter options.</p>
              <p className="mb-4"><strong className="text-cyan-400">Result:</strong> Increased customer engagement by 70% within three months of launch.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                <Link href="/case-studies/kambo-autos">Read Full Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Want your project featured here?</h2>
          <p className="text-xl text-gray-300 mb-8">Let&apos;s bring your ideas to life!</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
            <Link href="/contact">Start Your Project Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

