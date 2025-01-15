'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Loader2 } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters."
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address."
    }
    if (!formData.subject) {
      newErrors.subject = "Please select a subject."
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="mt-20 text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-400"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We&apos;re here to help you bring your ideas to life.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Have a project in mind, or just want to say hello? Let&apos;s connect and discuss how 
            BytebaseTech can support your digital transformation journey. Our team is ready to 
            assist you with innovative solutions tailored to your needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Options */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-400">
                  <MapPin className="mr-2 h-5 w-5" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h5>BytebaseTech, Kampala, Uganda</h5>
                <p>First Floor, Room J-406 Nasser Business Center Building, Nasser Rd, Kampala - Uganda</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-400">
                  <Phone className="mr-2 h-5 w-5" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>General Inquiries: +256 764 286149</p>
                <p>Support: +256 756373817</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-400">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>General: inquiries@bytebasetech.com</p>
                <p>Support: support@bytebasetech.com</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-400">
                  <Clock className="mr-2 h-5 w-5" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday to Friday: 9:00 AM – 5:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Closed on Sundays and Public Holidays</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Send Us a Message
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Support">Support</SelectItem>
                    <SelectItem value="Project Request">Project Request</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <Button 
                type="submit" 
                className="bg-teal-500 text-white hover:bg-teal-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </motion.form>
          <AnimatePresence>
            {isSubmitted && (
              <motion.p 
                className="mt-4 text-center text-green-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for reaching out! We&apos;ll get back to you within 24 hours.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Location
          </motion.h2>
          <motion.div 
            className="aspect-video rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573224776256!2d32.58333731475345!3d0.3152306997709543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f79e94f91%3A0x7c7c4a5b8a5c5b5a!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="BytebaseTech Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Us
          </motion.h2>
          <motion.p 
            className="mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Follow us for the latest updates, news, and insights:
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <Facebook className="h-8 w-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At BytebaseTech, we prioritize clear communication and swift responses. Whether you need advice, support, or a partner for your next big idea, we&apos;re just a message away.
          </motion.p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s build something extraordinary together
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact BytebaseTech today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/quote">Start Your Journey Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

