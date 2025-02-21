"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Countdown from "react-countdown"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Show modal on page load
  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => (
    <span className="font-bold text-yellow-300">
      {days}d {hours}h {minutes}m {seconds}s
    </span>
  )

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-20">
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          BytebaseTech: Uganda&apos;s Premier{" "}
          <span className="text-teal-400 inline-block">
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{ rotateX: [0, 360] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              Web Design
            </motion.span>{" "}
            & Development Agency
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          At BytebaseTech, we design innovative websites, web apps, and digital solutions to transform your business in
          Uganda and beyond. Experience the BytebaseTech difference today.
        </motion.p>

        {/* Call-to-Actions */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <Button
            asChild
            className="bg-teal-500 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 hover:bg-teal-600 transform hover:scale-105 transition duration-300 w-full md:w-auto shadow-lg hover:shadow-xl"
          >
            <Link href="/quote">
              <Rocket className="mr-2" size={24} />
              Get a Free Web Design Quote
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-teal-500 text-teal-400 px-8 py-6 text-lg rounded-lg flex items-center gap-2 hover:bg-teal-500 hover:text-white transform hover:scale-105 transition duration-300 w-full md:w-auto shadow-lg hover:shadow-xl"
          >
            <Link href="/portfolio">
              <ArrowRight className="mr-2" size={24} />
              View Our Web Design Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Modal Pop-Up */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-teal-500 text-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold">
                Small Business Website Offer!
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-teal-600"
              >
                <X size={24} />
              </Button>
            </div>
            <p className="mt-2 text-base">
              Get your business online for just{" "}
              <span className="font-bold text-yellow-300">UGX 200,000</span>! Includes:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm md:text-base">
              <li>Domain Name (Your Business Name)</li>
              <li>3 Pages: Home, About, Contact Us</li>
              <li>Social Media Integration</li>
              <li>Domain & Hosting for 1 Year</li>
            </ul>
            <p className="mt-4">
              Hurry! Offer ends{" "}
              <Countdown date={"2025-03-15T23:59:59"} renderer={renderer} />!
            </p>
            <Button
              asChild
              className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300 w-full"
            >
              <Link href="/offer">Claim Offer Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-teal-400 hover:text-teal-300 hover:bg-transparent"
          onClick={scrollToNextSection}
        >
          <ChevronDown size={62} />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-600 via-transparent to-teal-800 opacity-30 blur-xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/3 w-48 h-48 bg-teal-500 rounded-full opacity-20 blur-3xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-2xl z-0"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}

export default Hero