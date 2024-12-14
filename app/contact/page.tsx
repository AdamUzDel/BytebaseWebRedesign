'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re here to help you bring your ideas to life.
          </motion.p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Have a project in mind, or just want to say hello? Let&apos;s connect and discuss how BytebaseTech can support your digital transformation journey. Our team is ready to assist you with innovative solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-teal-400" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>BytebaseTech, Kampala, Uganda</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-teal-400" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>General Inquiries: +256 764 286149</p>
                <p>Support: +256 756373817</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-teal-400" />
                  Email Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>General: inquiries@bytebasetech.com</p>
                <p>Support: support@bytebasetech.com</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-teal-400" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday to Friday: 9:00 AM – 5:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Closed on Sundays and Public Holidays</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
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
                <Select onValueChange={handleSelectChange}>
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
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="bg-teal-500 text-white hover:bg-teal-600">
                Send Message
              </Button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-center text-green-400">
              Thank you for reaching out! We&apos;ll get back to you within 24 hours.
            </p>
          )}
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
          <p className="mb-6">Follow us for the latest updates, news, and insights:</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-300 hover:text-teal-400">
              <Facebook className="h-8 w-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400">
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400">
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Contact Us</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            At BytebaseTech, we prioritize clear communication and swift responses. Whether you need advice, support, or a partner for your next big idea, we&apos;re just a message away.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s build something extraordinary together</h2>
          <p className="text-xl mb-8">Contact BytebaseTech today!</p>
          <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600">
            <Link href="/quote">Start Your Journey Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

