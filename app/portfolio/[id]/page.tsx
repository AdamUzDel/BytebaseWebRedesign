'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Kambo Autos',
    category: 'Websites & Apps',
    description: 'A professional website for a leading auto dealer in Uganda.',
    fullDescription: 'Kambo Autos required a modern, user-friendly website to showcase their inventory and attract more customers. We developed a responsive website with advanced search and filter options, integrated with local payment gateways for a seamless user experience.',
    image: '/placeholder.svg',
    techStack: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    highlight: 'Optimized for mobile users and integrated with local payment gateways.',
    results: [
      'Increased online inquiries by 150%',
      'Improved user engagement, with average session duration up by 60%',
      'Streamlined inventory management process for the client'
    ]
  },
  // Add other projects here...
]

const PortfolioDetailPage = () => {
  const params = useParams()
  const id = parseInt(params.id as string)
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <Link href="/portfolio" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.category}</p>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg mb-6"
            />
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
              <p>{project.techStack}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Highlight</h2>
              <p>{project.highlight}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.fullDescription}</p>
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailPage

