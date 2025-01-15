'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, Send } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, projectType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a custom quote soon!",
    })
    // Reset form after submission
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Request a <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Fill out the form below and we&apos;ll get back to you with a custom quote.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-10 bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let&apos;s Create Something Amazing</h2>
                  <p className="mb-8">Our team of experts is ready to bring your vision to life. Whether you need a stunning website, a powerful mobile app, or a complete branding overhaul, we&apos;ve got you covered.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2" /> Custom Solutions
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2" /> Competitive Pricing
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2" /> Fast Turnaround
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2" /> Ongoing Support
                    </li>
                  </ul>
                </div>
                <p className="mt-8 text-sm opacity-75">By submitting this form, you agree to our terms and conditions and privacy policy.</p>
              </div>
              <motion.form
                onSubmit={handleSubmit}
                className="p-6 md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
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
                    />
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
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger id="projectType" className="w-full">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="archtecturial-drawings">Archtecturial drawings</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget (Optional)</label>
                    <Input
                      id="budget"
                      type="text"
                      name="budget"
                      placeholder="e.g. $5000"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Submitted!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

