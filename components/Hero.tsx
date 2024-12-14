'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, ChevronDown } from 'lucide-react';
import Link from "next/link";

const Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative bg-gray-900 text-white min-h-[100vh] md:min-h-[80vh] flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        {/* Headline */}
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
          Empower Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 inline-block">
            <motion.span
              className="text-teal-400"
              initial={{ display: "inline-block" }}
              animate={{ rotateX: [0, 360] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              Cutting-Edge
            </motion.span>{" "}
            Digital Solutions
          </span>
        </motion.h1>

        {/* Subheadline */}
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
          At BytebaseTech, we design innovative web apps, branding solutions,
          and digital tools to transform your ideas into reality. Let's build the future together.
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
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transform hover:scale-105 transition duration-300 w-full md:w-auto shadow-lg hover:shadow-xl"
          >
            <Link href="/quote">
              <Rocket className="mr-2" size={24} />
              Get a Quote
            </Link>
          </Button>
          <Button
            asChild
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg flex items-center gap-2 transform hover:scale-105 transition duration-300 w-full md:w-auto shadow-lg hover:shadow-xl"
          >
            <Link href="/services">
              <ArrowRight className="mr-2" size={24} />
              View Services
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-900 via-gray-900 to-cyan-900 opacity-30 blur-xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20 blur-3xl z-0"
          style={{
            background: `radial-gradient(circle, ${index % 2 === 0 ? 'rgba(45, 212, 191, 0.3)' : 'rgba(34, 211, 238, 0.3)'} 0%, rgba(17, 24, 39, 0) 70%)`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;

