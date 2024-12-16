'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Kambo Autos',
    category: 'Websites & Apps',
    description: 'A professional website for a leading auto dealer in Uganda.',
    fullDescription: 'Kambo Autos required a modern, user-friendly website to showcase their inventory and attract more customers. We developed a responsive website with advanced search and filter options, integrated with local payment gateways for a seamless user experience.',
    image: '/placeholder.jpg',
    techStack: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    highlight: 'Optimized for mobile users and integrated with local payment gateways.',
    results: [
      'Increased online inquiries by 150%',
      'Improved user engagement, with average session duration up by 60%',
      'Streamlined inventory management process for the client'
    ]
  },
  // other projects here - fetched from supabase database...
]

const PortfolioDetailPage = () => {
  const params = useParams()
  const id = parseInt(params.id as string)
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <Card className="bg-gray-800 p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-teal-400">Project Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Button asChild className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/portfolio">Return to Portfolio</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/portfolio" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors duration-200">
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.category}</p>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg mb-6 shadow-lg"
            />
            <Card className="bg-gray-800 mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-teal-400">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.techStack}</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-teal-400">Highlight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.highlight}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.fullDescription}</p>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Results</h2>
            <ul className="space-y-2 text-gray-300 mb-8">
              {project.results.map((result, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Check className="mr-2 mt-1 text-teal-400 flex-shrink-0" />
                  <span>{result}</span>
                </motion.li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailPage

