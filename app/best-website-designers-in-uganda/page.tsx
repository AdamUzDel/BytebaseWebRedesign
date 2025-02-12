import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, ShoppingCart, Globe, Zap } from 'lucide-react'

// SEO optimization
export const metadata = {
  title: 'Best Website Designers in Uganda | BytebaseTech',
  description: 'Transform your business with powerful websites. BytebaseTech - leading web design experts in Uganda. Custom, responsive, and SEO-optimized websites.',
}

const BestWebsiteDesignersPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/uganda-skyline.jpg"
            alt="BytebaseTech Web Design"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-32 mb-4 animate-fade-in-down">
              Transform Your Business with a Powerful Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              Partner with BytebaseTech – the leading web design experts in Uganda. We build websites that drive results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300">
                <Link href="/contact">Get Your Website Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300">
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Website Can Work for You */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-down">
            Your Website – A Digital Asset for Growth
          </h2>
          <p className="text-xl text-center mb-12 animate-fade-in-up animation-delay-200">
            A well-designed website is your digital storefront, working 24/7 to connect you with customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Generate More Leads and Sales</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Increase your online visibility and convert visitors into customers.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Strengthen Your Online Presence</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Establish a strong digital footprint for your brand.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-500 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Build Credibility and Trust</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Showcase your expertise and build trust with potential clients.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
            <p className="text-2xl font-bold mb-4">Did You Know?</p>
            <ul className="text-lg">
              <li>70% of users judge a business&apos;s credibility based on its website.</li>
              <li>Businesses with professional websites see 2x more engagement.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            Why Every Business Needs a Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <Globe className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Connect With Customers</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Your website is your first impression online.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Compete Effectively</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Stay ahead of competitors by being easily accessible online.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400">
              <CardHeader>
                <Globe className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Expand Your Reach</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Attract global and local audiences seamlessly.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-500">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Cost-Effective Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>A website is one of the most efficient marketing tools available.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You Need a Professional Website */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            Don&apos;t Settle for Ordinary – Choose Professional Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-200 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Custom Designs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Tailored to your brand identity, ensuring a unique online presence.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Mobile Responsiveness</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Perfectly optimized for all devices, providing a seamless user experience.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Designed to rank higher in search engines, improving your online visibility.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-500 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Secure and Scalable</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Built with the latest technology for safety and future growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Have Done */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-center mb-12 animate-fade-in-up animation-delay-200">
            BytebaseTech has delivered websites for diverse industries, from e-commerce to education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="text-white">Client A&apos;s E-Commerce Store</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Increased online sales by 300%.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400">
              <CardHeader>
                <CardTitle className="text-white">Client B&apos;s NGO Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Attracted 50% more donors.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-500">
              <CardHeader>
                <CardTitle className="text-white">Client C&apos;s Professional Services Site</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Enhanced lead generation.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300">
              <Link href="/portfolio">View Our Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Web Design Services */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            Comprehensive Web Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-200 border-gray-700">
              <CardHeader>
                <Code className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Custom Website Development</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Unique designs for your brand.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300 border-gray-700">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">E-Commerce Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Build online stores that convert.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400 border-gray-700">
              <CardHeader>
                <Globe className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Corporate Websites</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Professional platforms for businesses.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-500 border-gray-700">
              <CardHeader>
                <Zap className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">Web Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Keep your site updated and secure.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-600 border-gray-700">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle className="text-white">SEO Services</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Boost your site&apos;s visibility on Google.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            Excellence in Every Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-white">Client-Centric Designs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Websites that align with your goals.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Leveraging the latest technologies.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 animate-fade-in-up animation-delay-400">
              <CardHeader>
                <CardTitle className="text-white">Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Meeting deadlines without compromising quality.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose BytebaseTech */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-down">
            The BytebaseTech Advantage
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li className="flex items-center animate-fade-in-up animation-delay-200">
              <CheckCircle className="w-6 h-6 text-teal-500 mr-2" />
              Over 5 years of web design expertise
            </li>
            <li className="flex items-center animate-fade-in-up animation-delay-300">
              <CheckCircle className="w-6 h-6 text-teal-500 mr-2" />
              Use of cutting-edge tools like Next.js and Tailwind CSS
            </li>
            <li className="flex items-center animate-fade-in-up animation-delay-400">
              <CheckCircle className="w-6 h-6 text-teal-500 mr-2" />
              Affordable, scalable, and visually stunning solutions
            </li>
            <li className="flex items-center animate-fade-in-up animation-delay-500">
              <CheckCircle className="w-6 h-6 text-teal-500 mr-2" />
              Personalized support from design to launch
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
            Let&apos;s Build Your Website Today!
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            BytebaseTech is your trusted partner for impactful web design in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BestWebsiteDesignersPage

