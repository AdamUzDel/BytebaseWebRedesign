import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import HowWeCanHelp from '@/components/HowWeCanHelp'
import PremiumProducts from '@/components/PremiumProducts'
import Portfolio from '@/components/Portfolio'
import RequestQuote from '@/components/RequestQuote'
import CustomerOpinions from '@/components/CustomerOpinions'
import LatestBlogPosts from '@/components/LatestBlogPosts'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyUs />
      <HowWeCanHelp />
      <PremiumProducts />
      <Portfolio />
      <RequestQuote />
      <CustomerOpinions />
      <LatestBlogPosts />
      <Contact />
      <Footer />
    </main>
  )
}

