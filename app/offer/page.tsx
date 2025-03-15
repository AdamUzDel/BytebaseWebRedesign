"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Countdown from "react-countdown"
import axios from "axios"

const Offer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone number field
    businessName: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false) // Added loading state
  const [error, setError] = useState<string | null>(null) // Added error state for feedback

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) // Start loading
    setError(null) // Reset error

    try {
      // Replace with your Formspree endpoint
      const response = await axios.post("https://formspree.io/f/mgvoddqn", {
        ...formData,
        _subject: "Website Design Offer 700k Submission", // Optional: Customize email subject
      })

      if (response.status === 200) {
        setSubmitted(true)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError("Something went wrong. Please try again: " + errorMessage)
    } finally {
      setLoading(false) // Stop loading
    }
  }

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => (
    <span className="font-bold text-yellow-300">
      {days}d {hours}h {minutes}m {seconds}s
    </span>
  )

  return (
    <section className="min-h-screen bg-teal-800 flex items-center justify-center px-4 md:px-8 pt-24 pb-8">
      <motion.div
        className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Claim Your Website Design Offer!
        </h1>
        <p className="text-lg text-gray-700">
          Get your small business online for just{" "}
          <span className="font-bold text-teal-500">UGX 700,000</span>. Offer ends{" "}
          <Countdown date={"2025-03-15T23:59:59"} renderer={renderer} />!
        </p>

        <div className="text-left space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">What’s Included:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Domain Name (Your Business Name)</li>
            <li>3 Pages: Home, About, Contact Us</li>
            <li>Social Media Integration</li>
            <li>Domain & Hosting for 1 Year</li>
          </ul>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number (e.g., +256 123 456 789)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input
              type="text"
              name="businessName"
              placeholder="Your Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Textarea
              name="message"
              placeholder="Tell us about your business (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className={`bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 w-full ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Get Started Now"}
            </Button>
          </form>
        ) : (
          <div className="text-teal-500 text-lg">
            Thank you! We’ll get back to you soon to start building your website.
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Offer