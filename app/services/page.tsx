'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookHeart, Store, Code, Palette, Globe, Smartphone, Database, Zap, MessageSquare, Cloud, BarChart3, Video, Share2, Home, Printer } from 'lucide-react'
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
    icon: <BookHeart className="w-12 h-12 text-teal-500" />,
    title: 'Business Card and Stationery Design',
    description: 'Professional designs for your business collateral.',
  },
  {
    icon: <Store className="w-12 h-12 text-teal-500" />,
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
    name: 'Kim Kasada',
    company: 'Tech Solutions Inc.',
    content: 'BytebaseTech delivered an exceptional e-commerce platform that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.',
    image: '/kim.png',
  },
  {
    name: 'Tumwiine Amos',
    company: 'Creative Designs Co.',
    content: 'Working with BytebaseTech was a game-changer for our brand. Their innovative approach to our website redesign significantly improved our online presence and user engagement.',
    image: '/tumwiine.webp',
  },
  {
    name: 'Gumisiriza Jeremiah',
    company: 'Global Innovations Ltd.',
    content: 'The custom software solution provided by BytebaseTech streamlined our operations and boosted our productivity. Their ongoing support has been invaluable to our business growth.',
    image: '/jeremiah.png',
  },
  {
    name: 'Nakamya Teddy',
    company: 'Startup Accelerator',
    content: 'BytebaseTech\'s expertise in mobile app development helped us launch our startup\'s MVP in record time. Their agile approach and attention to detail were impressive.',
    image: '/woman1.webp',
  },
  {
    name: 'David Andama',
    company: 'E-learning Platform',
    content: 'The online learning platform developed by BytebaseTech revolutionized our course delivery. The intuitive interface and robust features have significantly improved student engagement.',
    image: '/andama.png',
  },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl md:mt-8 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas Into Digital Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white">
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/team-planning.jpg"
            alt="Digital Solutions"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Comprehensive Services
          </motion.h2>
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/contact">Contact Us for Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Branding and Design Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/portfolio">See Our Design Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Advanced Digital Solutions Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/advanced-solutions">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose BytebaseTech Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose BytebaseTech?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-teal-500 mr-2" />
                  Expertise in Modern Tech Stacks
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-teal-500 mr-2" />
                  Commitment to Quality and Innovation
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-teal-500 mr-2" />
                  Client-Centric Approach
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-teal-500 mr-2" />
                  Scalable Solutions for Future Growth
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
              <ol className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                  Consultation and Requirements Gathering
                </li>
                <li className="flex items-center">
                  <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                  Planning and Design
                </li>
                <li className="flex items-center">
                  <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                  Development and Testing
                </li>
                <li className="flex items-center">
                  <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                  Deployment and Ongoing Support
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
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
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
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

