'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// SEO optimization
//export const metadata = {
//  title: 'Our Portfolio | BytebaseTech',
//  description: 'Discover how BytebaseTech empowers businesses through innovative and modern digital solutions. View our portfolio of websites, apps, branding, and architectural designs.',
//}

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
    image: '/placeholder.svg',
    techStack: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    highlight: 'Optimized for mobile users and integrated with local payment gateways.',
  },
  {
    id: 2,
    title: 'E-Somero',
    category: 'Websites & Apps',
    description: 'A comprehensive learning management system for educators and students.',
    image: '/placeholder.svg',
    techStack: 'React, Node.js, MongoDB',
    highlight: 'Fully responsive with an intuitive user interface, modeled after platforms like Udemy and NetAcad.',
  },
  {
    id: 3,
    title: 'Ask Rhona',
    category: 'Websites & Apps',
    description: 'An AI-powered chatbot for efficient customer service.',
    image: '/placeholder.svg',
    techStack: 'Python, TensorFlow, React',
    highlight: 'Innovatively integrates AI to enhance user experience.',
  },
  {
    id: 4,
    title: 'Mukono Bakers Logo Design',
    category: 'Branding, Design & Print',
    description: 'Minimalist logo design for a local bakery.',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Event Poster for Lugogo Marathon',
    category: 'Branding, Design & Print',
    description: 'Vibrant, eye-catching poster for a local charity run.',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'BytebaseTech Rebranding',
    category: 'Branding, Design & Print',
    description: 'Redesigned BytebaseTech&apos;s branding assets.',
    image: '/placeholder.svg',
    highlight: 'Includes modernized logo, business cards, and promotional materials.',
  },
  {
    id: 7,
    title: 'Residential House Plan (Entebbe)',
    category: 'Architectural Drawings',
    description: 'Detailed house plan for a modern three-bedroom residence in Entebbe.',
    image: '/placeholder.svg',
  },
  {
    id: 8,
    title: 'Commercial Plaza Design (Kampala)',
    category: 'Architectural Drawings',
    description: 'Conceptualized a functional and aesthetically pleasing commercial plaza.',
    image: '/placeholder.svg',
  },
  {
    id: 9,
    title: 'Interior Design for Restaurants',
    category: 'Architectural Drawings',
    description: 'Created 3D renderings and floor plans for restaurant spaces.',
    image: '/placeholder.svg',
  },
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
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
      </section>

      {/* Portfolio Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="flex justify-center mb-8">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="All" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{project.description}</p>
                        {project.techStack && (
                          <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack}</p>
                        )}
                        {project.highlight && (
                          <p className="mt-2 text-sm text-teal-400">{project.highlight}</p>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/portfolio/${project.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Case Study</h2>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Kambo Autos: A Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4"><strong>Problem:</strong> Lack of an online presence, leading to limited customer reach.</p>
              <p className="mb-4"><strong>Solution:</strong> BytebaseTech designed a modern, mobile-friendly website with advanced search and filter options.</p>
              <p className="mb-4"><strong>Result:</strong> Increased customer engagement by 70% within three months of launch.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/case-studies/kambo-autos">Read Full Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want your project featured here?</h2>
          <p className="text-xl mb-8">Let&apos;s bring your ideas to life!</p>
          <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
            <Link href="/contact">Start Your Project Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

