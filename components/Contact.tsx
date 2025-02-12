'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Send, Check, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContact } from '@/lib/contactUtils'
import { toast } from '@/hooks/use-toast'

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
        try {
          const result = await submitContact(formData)
          console.log('Contact form submitted:', result)
          setIsSubmitted(true)
          toast({
            title: "Message Sent Successfully",
            description: "We'll get back to you soon!",
          })
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        } catch (error) {
          console.error('Failed to submit contact form:', error)
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          })
        } finally {
          setIsSubmitting(false)
          setTimeout(() => setIsSubmitted(false), 3000)
        }
      }
    }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for any inquiries or collaborations.
          </p>
        </motion.div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ssemujju Nganda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ssemujju@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className='block text-sm font-medium mb-2'>Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className='block text-sm font-medium mb-2'>Subject</label>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <p className="text-gray-600 mb-8">We&apos;re here to help and answer any question you might have. We look forward to hearing from you.</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">First Floor, Room J-406 Nasser Business Center Building, Nasser Rd, Kampala - Uganda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(256) 764-286149 / (256) 756-373817</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">inquiries@bytebasetech.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61564244807997" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.twitter.com/BytebaseTech" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/bytebasetech/" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage