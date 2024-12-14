'use client'

import React from 'react'
import { motion } from 'framer-motion'
//import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Shield, Award, Zap } from 'lucide-react'

const AboutPage = () => {
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
            About BytebaseTech
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovative Solutions for the Digital Age
          </motion.p>
        </div>
      </section>

      {/* Introductory Paragraph */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="container mx-auto">
          <p className="text-lg text-center max-w-3xl mx-auto">
            At BytebaseTech, we specialize in empowering businesses by crafting cutting-edge web, app development, and branding solutions that drive digital transformation. Based in Uganda, we combine innovation, creativity, and the latest technologies to help clients thrive in the modern digital landscape. Our goal is to be the go-to partner for scalable and impactful digital solutions, enabling businesses to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-400">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To deliver world-class digital products and services that empower businesses globally, transforming ideas into exceptional experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-400">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To become a global leader in digital innovation, recognized for creating scalable, innovative, and transformative solutions for businesses across all industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-gray-700">
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
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            Founded with a passion for technology and innovation, BytebaseTech started as a small team driven to solve real-world challenges with creative digital solutions. Over the years, we have grown into a dynamic tech company delivering exceptional services to businesses in Uganda and beyond. Our journey is one of growth, learning, and staying ahead in a rapidly changing digital world.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Cutting-Edge Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We specialize in the latest tech stacks, including Next.js, TypeScript, and Tailwind CSS, ensuring your project is built with the most advanced and efficient technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Future-Proof Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our focus is on creating scalable and futuristic solutions tailored to each client&apos;s unique needs, ensuring long-term success and adaptability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Comprehensive Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  From web and app development to branding and architectural drawings, we offer a full suite of digital services under one roof.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Global Standards, Local Insight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We deliver professional-grade projects that meet global standards while leveraging our deep understanding of the local market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            BytebaseTech is driven by a forward-thinking approach, led by a team passionate about harnessing technology to shape the future. We collaborate with top industry professionals to bring cutting-edge solutions to life.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-teal-400">{milestone.year}</span>
                </div>
                <div className="w-px h-16 bg-teal-400 mx-8"></div>
                <div className="flex-grow">
                  <p className="text-lg text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s create something extraordinary together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            At BytebaseTech, we&apos;re here to help you reimagine your business in the digital era.
          </p>
          <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

