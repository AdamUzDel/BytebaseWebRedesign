"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects, categories } from "@/lib/portfolioData"

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    setFilteredProjects(filter === "All" ? projects : projects.filter((project) => project.category === filter))
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
          BytebaseTech Web Design Portfolio
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
              variant={filter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`BytebaseTech ${project.title} - Web Design Project`}
                    fill
                    objectFit="cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700">
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
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 mt-8">
            No projects found in this category.
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center text-center mt-14"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-8 md:py-4 text-lg rounded-full flex flex-col md:flex-row items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            >
              All BytebaseTech Web Projects
              <ChevronDown className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

