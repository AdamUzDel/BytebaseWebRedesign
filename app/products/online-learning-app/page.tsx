'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle, Book, Globe, Wifi, Users, BarChart2, Smartphone, Zap } from 'lucide-react'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function OnlineLearningAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Online Learning App: Empowering Education in Uganda and East Africa
        </motion.h1>
        
        <motion.div
          className="relative rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform rotate-1"></div>
          <Image
            src="/online-learning-app-bytebasetech.jpg"
            alt="Online Learning App Dashboard"
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
          Our Online Learning App is an innovative e-learning platform tailored for the unique needs of Uganda and East Africa. We&apos;re committed to making quality education accessible, engaging, and effective for students, educators, and institutions across the region.
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
            { icon: Book, title: "Localized Content", description: "Courses tailored to Uganda and East African curricula, including local languages and cultural context." },
            { icon: Wifi, title: "Offline Access", description: "Download lessons for offline study, perfect for areas with limited internet connectivity." },
            { icon: Users, title: "Collaborative Learning", description: "Foster peer-to-peer learning with discussion forums and group projects." },
            { icon: BarChart2, title: "Progress Tracking", description: "Comprehensive analytics for students, teachers, and institutions to monitor learning outcomes." },
            { icon: Smartphone, title: "Mobile-First Design", description: "Optimized for smartphones, the primary internet access point for many in the region." },
            { icon: Zap, title: "Low-Bandwidth Mode", description: "Streamlined content delivery for slow internet connections, ensuring accessibility for all." },
            { icon: Globe, title: "Multi-Language Support", description: "Interface and content available in English, Swahili, and other local languages." },
            { icon: CheckCircle, title: "Certified Courses", description: "Partnerships with local universities and institutions for accredited online programs." },
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
          Empowering Education in East Africa
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For Students</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Access quality education from anywhere, anytime</li>
              <li>Learn at your own pace with flexible schedules</li>
              <li>Engage with peers from across East Africa</li>
              <li>Gain recognized certifications to boost your career</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">For Educators and Institutions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Reach a wider audience across Uganda and East Africa</li>
              <li>Easily create and manage online courses</li>
              <li>Track student progress and improve learning outcomes</li>
              <li>Reduce operational costs associated with traditional teaching methods</li>
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
          <h2 className="text-2xl font-semibold mb-4">Bridging the Education Gap in East Africa</h2>
          <p className="mb-6">
            Our Online Learning App is more than just a platform – it&apos;s a mission to democratize education in Uganda and East Africa. 
            By leveraging technology, we&apos;re overcoming geographical barriers, resource limitations, and infrastructure challenges to bring 
            quality education to every corner of the region.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Join the Education Revolution</Link>
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
            { name: "Sarah Namukasa", role: "Student, Kampala", quote: "The offline access feature has been a game-changer for me. I can now study even when the internet is unreliable in my area." },
            { name: "Dr. Emmanuel Okello", role: "Lecturer, Makerere University", quote: "This platform has allowed me to reach students across East Africa, expanding the impact of our university's courses." },
            { name: "Aisha Mohamed", role: "Adult Learner, Nairobi", quote: "The mobile-first design means I can learn on my smartphone during my commute. It's perfect for busy professionals like me." },
            { name: "Bytebase Academy", role: "Online Institution", quote: "We've seen a 200% increase in course completions since adopting this platform. The localized content really resonates with our students." },
          ].map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-teal-600 dark:text-teal-400">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
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
            Ready to Transform Education in East Africa?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Join the growing community of learners, educators, and institutions shaping the future of education in Uganda and East Africa.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Start Your Learning Journey Today</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

