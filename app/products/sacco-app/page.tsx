'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, CreditCard, PiggyBank, BarChart2, Smartphone, Lock, DollarSign } from 'lucide-react'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function SACCOAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SACCO App: Empowering Savings and Credit Cooperatives in Uganda
        </motion.h1>
        
        <motion.div
          className="relative rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform rotate-1"></div>
          <Image
            src="/sacco-app-flyer-bytebasetechnologies.jpg"
            alt="SACCO App Dashboard"
            width={1200}
            height={600}
            className="rounded-lg relative z-10"
          />
        </motion.div>

        <motion.p 
          className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our SACCO App is a comprehensive solution tailored for Savings and Credit Cooperative Organizations in Uganda and East Africa. It streamlines operations, enhances member services, and provides powerful tools for financial management and reporting, all while addressing the unique challenges and opportunities in the region.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, title: "Member Management", description: "Easily register and manage member accounts, including KYC verification and document uploads." },
            { icon: CreditCard, title: "Loan Processing", description: "Streamline loan applications, approvals, and tracking with customizable interest rates and terms." },
            { icon: PiggyBank, title: "Savings Management", description: "Track member savings, fixed deposits, and generate interest calculations automatically." },
            { icon: DollarSign, title: "Dividend Distribution", description: "Calculate and distribute dividends based on member shares and SACCO performance." },
            { icon: BarChart2, title: "Financial Reporting", description: "Generate comprehensive reports for regulatory compliance and decision-making." },
            { icon: Smartphone, title: "Mobile Banking", description: "Offer members convenient access to their accounts and services via mobile devices." },
            { icon: Lock, title: "Security & Compliance", description: "Ensure data protection and adhere to local financial regulations in Uganda and East Africa." },
            { icon: CheckCircle, title: "Offline Functionality", description: "Continue operations during internet outages, perfect for rural areas with limited connectivity." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <motion.h2 
          className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Empowering SACCOs in Uganda and East Africa
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For SACCO Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Improve operational efficiency and reduce manual errors</li>
              <li>Enhance decision-making with real-time financial insights</li>
              <li>Ensure compliance with local regulations and reporting requirements</li>
              <li>Scale operations easily as your SACCO grows</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For SACCO Members</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Access account information and services 24/7</li>
              <li>Apply for loans and track applications easily</li>
              <li>Receive timely updates on dividends and SACCO performance</li>
              <li>Enjoy secure and transparent financial transactions</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-8 text-white mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Driving Financial Inclusion in East Africa</h2>
          <p className="mb-6">
            Our SACCO App is more than just software – it&apos;s a catalyst for financial inclusion and economic growth in Uganda and East Africa. 
            By empowering SACCOs with cutting-edge technology, we&apos;re helping to extend financial services to underserved communities, 
            promote savings culture, and facilitate access to credit for small businesses and individuals.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Join the Financial Inclusion Movement</Link>
          </Button>
        </motion.div>

        <motion.h2 
          className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { name: "Kampala Teachers SACCO", quote: "Since implementing the SACCO App, we've seen a 40% increase in member engagement and a 25% reduction in operational costs." },
            { name: "Rural Farmers Cooperative", quote: "The offline functionality has been crucial for our operations in areas with limited internet connectivity. It's truly a game-changer." },
            { name: "Women Entrepreneurs SACCO", quote: "The streamlined loan processing has allowed us to approve loans faster, leading to a 30% increase in our lending portfolio." },
            { name: "Youth Savings Group", quote: "The mobile banking feature has attracted more young members to our SACCO, helping us grow our membership by 50% in just one year." },
          ].map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-teal-600 dark:text-teal-400">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Ready to Transform Your SACCO?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Join the growing number of SACCOs in Uganda and East Africa that are leveraging technology to drive growth, improve member services, and contribute to financial inclusion.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Schedule a Demo Today</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

