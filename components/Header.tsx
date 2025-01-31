"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Web Design Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About BytebaseTech", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blogs" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-4">
          <Image 
            alt="logo" src={"/logo-white.png"} loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="w-auto h-auto"></Image>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">BytebaseTech</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white hover:text-teal-400 transition-colors">
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/quote">Free Web Design Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="lg"
            className="md:hidden text-white hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-sm p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-teal-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-teal-400 transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-teal-500 text-white hover:bg-teal-600 mt-4">
                <Link href="/quote">Free Web Design Quote</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

