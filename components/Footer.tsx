import Link from 'next/link'
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">BytebaseTech</h3>
            <p className="text-gray-300 mb-6">Empowering businesses with cutting-edge digital solutions.</p>
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
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/best-website-designers-in-uganda" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Best Website Designers in Uganda
                </Link>
              </li>
              {['About', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-teal-400 transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="web-design-uganda" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Web Design in Uganda
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-teal-400" />
                <span className="text-gray-300">Kampala - Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-teal-400" />
                <span className="text-gray-300">(256) 764-286149 / (256) 756-373817</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-teal-400" />
                <a href="mailto:inquiries@bytebasetech.com" className="text-gray-300 hover:text-teal-400 transition-colors">inquiries@bytebasetech.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400"
              />
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BytebaseTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
