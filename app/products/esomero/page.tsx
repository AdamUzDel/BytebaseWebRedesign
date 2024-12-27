'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Database, FileText, LineChart, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function ESomeroPage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundImage: [
                'radial-gradient(circle, rgba(20,184,166,0.1) 2px, transparent 2px)',
                'radial-gradient(circle, rgba(20,184,166,0.1) 2px, transparent 2px)'
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundSize: '20px 20px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
          >
            Revolutionize Your School Management with eSomero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-gray-300"
          >
            Streamline data management and automate report card generation for the modern educational landscape
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 transform hover:scale-105">
              <Link href="#features">
                Discover eSomero
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20" ref={targetRef}>
        <motion.div 
          className="container mx-auto px-4"
          style={{ opacity, scale }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Centralized Data Management", description: "Securely store and manage all your school data in one easy-to-access location, ensuring data integrity and accessibility." },
              { icon: FileText, title: "Automated Report Cards", description: "Generate professional, customizable report cards with just a few clicks, saving time and reducing errors in the process." },
              { icon: LineChart, title: "Performance Analytics", description: "Gain valuable insights into student progress with intuitive analytics and reporting tools, enabling data-driven decision making." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-teal-600 dark:text-teal-400">
                      <feature.icon className="w-6 h-6 mr-2" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">How eSomero Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {[
                { title: "Input Student Data", description: "Easily enter or import student information, including personal details and academic records, using our intuitive interface." },
                { title: "Manage Grades and Assessments", description: "Record grades, test scores, and other assessments throughout the academic year with our flexible grading system." },
                { title: "Generate Report Cards", description: "With a single click, create comprehensive, professional report cards for individual students or entire classes." },
                { title: "Analyze and Improve", description: "Utilize built-in analytics to identify trends, track progress, and pinpoint areas for improvement in student performance." }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform rotate-3 rounded-lg"></div>
              <Image 
                src="/esomero-dashboard.jpg" 
                alt="eSomero Dashboard" 
                width={500} 
                height={400} 
                className="rounded-lg shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-300" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">See eSomero in Action</h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/-ZFy6djt1ZU" 
                title="eSomero Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[500px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "eSomero has transformed how we manage student data and generate report cards. It's an indispensable tool for our school.", author: "Fr. Jean Baptise, Principal" },
              { quote: "The time we save with eSomero allows us to focus more on teaching and less on administrative tasks. It's a game-changer!", author: "Meeme Juliet, Teacher" },
              { quote: "As a parent, I appreciate the clear and comprehensive report cards generated by eSomero. It helps me stay informed about my child's progress.", author: "Isabirye Johnson, Parent" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800 border-t-4 border-teal-500">
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold text-teal-600 dark:text-teal-400">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">About Bytebase Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform -rotate-3 rounded-lg"></div>
              <Image 
                src="/team-planning.jpg" 
                alt="Bytebase Technologies Team" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-300" 
              />
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="mb-4 text-gray-600 dark:text-gray-300">eSomero is a flagship product of Bytebase Technologies, a leading digital solutions company specializing in websites, apps, custom software, and branding.</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">At Bytebase, we&apos;re committed to creating innovative solutions that simplify complex processes and drive efficiency for our clients. Our team of expert developers and designers work tirelessly to deliver cutting-edge technology solutions.</p>
              <Button asChild className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 transform hover:scale-105">
                <Link href="https://bytebasetech.com" target="_blank" rel="noopener noreferrer">
                  Explore Bytebase Technologies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Transform Your School Management?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Get started with eSomero today and experience the difference in your school&apos;s data management and reporting.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <Link href="https://wa.me/+256764286149">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

