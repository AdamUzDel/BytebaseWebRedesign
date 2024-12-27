'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, BarChart2, Globe, Bell, CreditCard, Users } from 'lucide-react'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function InvoicingAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Invoicing App: Streamlined Billing and Financial Management
        </motion.h1>
        
        <motion.div
          className="relative rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform rotate-1"></div>
          <Image
            src="/invoicing-app-bytebasetech.jpg"
            alt="Invoicing App Dashboard"
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
          Revolutionize your billing process with our powerful Invoicing App. From creating professional invoices to tracking payments and managing finances, our solution empowers businesses of all sizes to take control of their cash flow.
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
            { icon: CheckCircle, title: "Customizable Templates", description: "Create professional, branded invoices with our easy-to-use template editor." },
            { icon: DollarSign, title: "Recurring Invoices", description: "Set up automatic billing for repeat clients and subscription-based services." },
            { icon: Globe, title: "Multi-Currency Support", description: "Send invoices and accept payments in multiple currencies with real-time conversion." },
            { icon: Bell, title: "Payment Reminders", description: "Automate payment reminders and late fee calculations to improve cash flow." },
            { icon: CreditCard, title: "Payment Integration", description: "Seamlessly connect with popular payment gateways for faster transactions." },
            { icon: BarChart2, title: "Financial Reporting", description: "Gain valuable insights with comprehensive financial reports and analytics." },
            { icon: Users, title: "Client Portal", description: "Provide a dedicated portal for clients to view and pay invoices easily." },
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
          Why Choose Our Invoicing App?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For Small Businesses & Freelancers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Easy-to-use interface with minimal learning curve</li>
              <li>Affordable pricing plans that grow with your business</li>
              <li>Time-saving automation for invoicing and payment reminders</li>
              <li>Professional-looking invoices to enhance your brand image</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For Growing Enterprises</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Scalable solution to handle increasing invoice volumes</li>
              <li>Advanced reporting and analytics for financial insights</li>
              <li>Multi-user access with role-based permissions</li>
              <li>Integration capabilities with other business tools</li>
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
          <h2 className="text-2xl font-semibold mb-4">Get Paid Faster, Grow Your Business</h2>
          <p className="mb-6">
            Our Invoicing App isn&apos;t just about creating invoices – it&apos;s about improving your entire financial workflow. 
            From sending professional invoices to tracking expenses and analyzing financial data, we provide the tools 
            you need to make informed decisions and drive your business forward.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Start Your Free Trial</Link>
          </Button>
        </motion.div>

        <motion.h2 
          className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { name: "Starter", price: "$9.99", features: ["Up to 20 invoices/month", "2 users", "Basic reporting", "Email support"] },
            { name: "Professional", price: "$24.99", features: ["Unlimited invoices", "5 users", "Advanced reporting", "Priority support", "Client portal"] },
            { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "Custom integrations", "Dedicated account manager", "On-premise deployment option"] },
          ].map((plan, index) => (
            <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-teal-600 dark:text-teal-400">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="text-left space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
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
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Join thousands of satisfied businesses and freelancers who have transformed their invoicing process with our app.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Start Your Free Trial Today</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

