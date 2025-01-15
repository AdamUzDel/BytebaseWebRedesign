'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Shield, Award, Zap, ChevronDown } from 'lucide-react'

const coreValues = [
  { icon: <Lightbulb className="h-8 w-8 text-teal-500" />, title: 'Innovation', description: 'Pioneering modern technologies to stay ahead of the curve.' },
  { icon: <Users className="h-8 w-8 text-teal-500" />, title: 'Customer-Centricity', description: 'Building solutions that prioritize user experience and client satisfaction.' },
  { icon: <Shield className="h-8 w-8 text-teal-500" />, title: 'Integrity', description: 'Upholding transparency and honesty in all our dealings.' },
  { icon: <Award className="h-8 w-8 text-teal-500" />, title: 'Excellence', description: 'Striving for perfection in every project, big or small.' },
  { icon: <Zap className="h-8 w-8 text-teal-500" />, title: 'Empowerment', description: 'Helping businesses achieve success through transformative solutions.' },
]

const milestones = [
  { year: 2019, description: 'Launched BytebaseTech to provide innovative digital solutions.' },
  { year: 2021, description: 'Developed the Kambo Autos website, transforming how auto dealerships interact with customers online.' },
  { year: 2024, description: 'Introduced premium products like E-Somero and expanded into AI-powered solutions like Ask Rhona.' },
]

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <ul className="space-y-4">
          {['mission', 'values', 'story', 'apart', 'leadership', 'milestones'].map((section) => (
            <li key={section}>
              <button
                onClick={() => {
                  setActiveSection(section)
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`w-3 h-3 rounded-full ${activeSection === section ? 'bg-teal-400' : 'bg-gray-400'} transition-all duration-300 hover:bg-teal-300`}
                aria-label={`Scroll to ${section}`}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Header Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.jpg"
            alt="Abstract Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            BytebaseTech
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Crafting Digital Excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
            >
              Discover Our Story
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-teal-400" />
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section id="mission" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To deliver world-class digital products and services that empower businesses globally, transforming ideas into exceptional experiences.
                </p>
              </CardContent>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500 rounded-full opacity-20" />
            </Card>
            <Card className="bg-gray-800 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To become a global leader in digital innovation, recognized for creating scalable, innovative, and transformative solutions for businesses across all industries.
                </p>
              </CardContent>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20" />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 px-4 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700 h-full hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-center">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-1/3 h-1/3 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 p-8 relative z-10">
              <CardContent>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                  Founded with a passion for technology and innovation, BytebaseTech started as a small team driven to solve real-world challenges with creative digital solutions. Over the years, we have grown into a dynamic tech company delivering exceptional services to businesses in Uganda and beyond. Our journey is one of growth, learning, and staying ahead in a rapidly changing digital world.
                </p>
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform -skew-y-3 z-0" />
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="apart" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Cutting-Edge Expertise', description: 'We specialize in the latest tech stacks, ensuring your project is built with the most advanced and efficient technologies.' },
              { title: 'Future-Proof Solutions', description: 'Our focus is on creating scalable and futuristic solutions tailored to each client\'s unique needs, ensuring long-term success.' },
              { title: 'Comprehensive Services', description: 'From web and app development to branding and architectural drawings, we offer a full suite of digital services under one roof.' },
              { title: 'Global Standards, Local Insight', description: 'We deliver professional-grade projects that meet global standards while leveraging our deep understanding of the local market.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700 h-full hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-teal-400">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section id="leadership" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Leadership
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            BytebaseTech is driven by a forward-thinking approach, led by a team passionate about harnessing technology to shape the future. We collaborate with top industry professionals to bring cutting-edge solutions to life.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'CEO & Founder', image: '/placeholder.svg' },
              { name: 'Jane Smith', role: 'CTO', image: '/placeholder.svg' },
              { name: 'Mike Johnson', role: 'Head of Design', image: '/placeholder.svg' },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-teal-400">{leader.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{leader.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Milestones */}
      <section id="milestones" className="py-20 px-4 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center mb-16 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="text-5xl font-bold text-teal-400">{milestone.year}</div>
                </div>
                <div className="w-full md:w-2/3">
                  <Card className="bg-gray-700 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <p className="text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-cyan-400 hidden md:block" />
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-teal-400 rounded-full transform -translate-y-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let&apos;s create something extraordinary together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At BytebaseTech, we&apos;re here to help you reimagine your business in the digital era.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-cyan-900 opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
      </section>
    </div>
  )
}

export default AboutPage

