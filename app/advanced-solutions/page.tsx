'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Cloud, Database, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

const advancedSolutions = [
  {
    icon: <MessageSquare className="w-12 h-12 text-teal-500" />,
    title: 'AI-Powered Chatbots',
    description: 'Enhance customer service with intelligent chatbots.',
    details: 'Our AI-powered chatbots use natural language processing to understand and respond to customer queries in real-time. They can handle multiple conversations simultaneously, provide 24/7 support, and learn from interactions to continuously improve their performance.',
  },
  {
    icon: <Cloud className="w-12 h-12 text-teal-500" />,
    title: 'Cloud-Based Solutions',
    description: 'Scalable and flexible cloud infrastructure for your business.',
    details: 'We design and implement robust cloud-based solutions that allow your business to scale effortlessly. Our expertise spans across major cloud platforms like AWS, Azure, and Google Cloud, ensuring you get the most suitable and cost-effective infrastructure for your needs.',
  },
  {
    icon: <Database className="w-12 h-12 text-teal-500" />,
    title: 'CRM & ERP Development',
    description: 'Custom CRM and ERP solutions to streamline your operations.',
    details: 'Our tailored CRM and ERP systems integrate seamlessly with your existing processes, providing a unified platform for managing customer relationships, inventory, finance, and more. We focus on user-friendly interfaces and powerful analytics to boost productivity and decision-making.',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-teal-500" />,
    title: 'Data Analytics Dashboards',
    description: 'Insightful data visualization for informed decision-making.',
    details: 'Transform raw data into actionable insights with our custom analytics dashboards. We create interactive, real-time visualizations that help you understand trends, identify opportunities, and make data-driven decisions quickly and effectively.',
  },
]

const benefits = [
  'Increased operational efficiency',
  'Enhanced customer satisfaction',
  'Data-driven decision making',
  'Scalable and future-proof solutions',
  'Competitive advantage in the digital landscape',
]

const caseStudies = [
  {
    title: 'E-commerce Giant Boosts Sales with AI Chatbot',
    description: 'Implemented an AI-powered chatbot for a leading e-commerce platform, resulting in a 30% increase in customer engagement and a 15% boost in sales conversions.',
    image: '/placeholder.svg',
  },
  {
    title: 'Manufacturing Firm Optimizes Operations with Custom ERP',
    description: 'Developed a tailored ERP system for a manufacturing company, leading to a 25% reduction in operational costs and a 40% improvement in inventory management efficiency.',
    image: '/placeholder.svg',
  },
]

const AdvancedSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Advanced Digital Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leverage cutting-edge technologies to streamline your operations and enhance customer experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="#solutions">Explore Solutions</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/advanced-solutions-bg.webp"
            alt="Advanced Digital Solutions"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Advanced Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 h-full">
                  <CardHeader>
                    <div className="mb-4">{solution.icon}</div>
                    <CardTitle className="text-2xl font-bold text-teal-400">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-300">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{solution.details}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="mt-4 text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Benefits of Our Advanced Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-teal-400">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-300">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="mt-4 text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
                      Read Full Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let&apos;s discuss how our advanced digital solutions can drive growth and efficiency for your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AdvancedSolutionsPage

