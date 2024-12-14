'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Globe, Smartphone, Database, Zap, MessageSquare, Cloud, BarChart3, Video, Share2, Home, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: <Code className="w-12 h-12 text-teal-500" />,
    title: 'Custom Web Applications',
    description: 'Tailored web solutions to meet your unique business requirements.',
  },
  {
    icon: <Smartphone className="w-12 h-12 text-teal-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: <Globe className="w-12 h-12 text-teal-500" />,
    title: 'E-commerce Solutions',
    description: 'Robust online stores that drive sales and growth.',
  },
  {
    icon: <Database className="w-12 h-12 text-teal-500" />,
    title: 'API Integrations',
    description: 'Seamless integration of third-party services and APIs.',
  },
]

const brandingServices = [
  {
    icon: <Palette className="w-12 h-12 text-teal-500" />,
    title: 'Logo Design',
    description: 'Create a memorable visual identity for your brand.',
  },
  {
    icon: <Zap className="w-12 h-12 text-teal-500" />,
    title: 'Brand Guidelines',
    description: 'Establish consistent brand messaging and visuals.',
  },
  {
    icon: <Image src="/placeholder.svg" alt="Business Card" width={48} height={48} className="text-teal-500" />,
    title: 'Business Card and Stationery Design',
    description: 'Professional designs for your business collateral.',
  },
  {
    icon: <Image src="/placeholder.svg" alt="Marketing Material" width={48} height={48} className="text-teal-500" />,
    title: 'Marketing Material Design',
    description: 'Eye-catching designs for your marketing campaigns.',
  },
]

const advancedSolutions = [
  {
    icon: <MessageSquare className="w-12 h-12 text-teal-500" />,
    title: 'AI-Powered Chatbots',
    description: 'Enhance customer service with intelligent chatbots.',
  },
  {
    icon: <Cloud className="w-12 h-12 text-teal-500" />,
    title: 'Cloud-Based Solutions',
    description: 'Scalable and flexible cloud infrastructure for your business.',
  },
  {
    icon: <Database className="w-12 h-12 text-teal-500" />,
    title: 'CRM & ERP Development',
    description: 'Custom CRM and ERP solutions to streamline your operations.',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-teal-500" />,
    title: 'Data Analytics Dashboards',
    description: 'Insightful data visualization for informed decision-making.',
  },
]

const additionalServices = [
  {
    icon: <Video className="w-12 h-12 text-teal-500" />,
    title: 'Video Editing',
    description: 'Professional video editing for your marketing needs.',
  },
  {
    icon: <Share2 className="w-12 h-12 text-teal-500" />,
    title: 'Social Media Management',
    description: 'Engage your audience with strategic social media management.',
  },
  {
    icon: <Home className="w-12 h-12 text-teal-500" />,
    title: 'Architectural Drawings',
    description: 'Detailed architectural drawings for your projects.',
  },
  {
    icon: <Printer className="w-12 h-12 text-teal-500" />,
    title: 'Printing and Publishing',
    description: 'High-quality printing and publishing services.',
  },
]

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    content: 'BytebaseTech transformed our online presence with their exceptional web development skills. Highly recommended!',
    image: '/placeholder.svg',
  },
  {
    name: 'Jane Smith',
    company: 'Global Solutions Ltd.',
    content: 'The mobile app BytebaseTech developed for us has significantly improved our customer engagement. Great work!',
    image: '/placeholder.svg',
  },
  {
    name: 'Mike Johnson',
    company: 'Creative Designs Co.',
    content: 'Their branding expertise helped us stand out in a crowded market. BytebaseTech is a game-changer!',
    image: '/placeholder.svg',
  },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas Into Digital Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge web, app development, and branding solutions to thrive in the digital age.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Web and App Development Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web and App Development
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create responsive, scalable, and secure websites and apps tailored to your business needs.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/contact">Contact Us for Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Branding and Design Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Branding and Design
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build a memorable brand with our creative design services. From logos to full-scale brand identities, we make your business stand out.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/portfolio">See Our Design Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Advanced Digital Solutions Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Advanced Digital Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leverage cutting-edge technologies to streamline your operations and enhance customer experience.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedSolutions.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/advanced-solutions">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Additional Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive digital services to cover all your business needs.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose BytebaseTech Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose BytebaseTech?
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>Expertise in Modern Tech Stacks</li>
            <li>Commitment to Quality and Innovation</li>
            <li>Client-Centric Approach</li>
            <li>Scalable Solutions for Future Growth</li>
          </motion.ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-300 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Elevate Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            BytebaseTech is here to deliver digital solutions that drive results.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

