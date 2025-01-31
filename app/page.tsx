
import { JsonLd } from "react-schemaorg"
import type { Organization } from "schema-dts"
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import HowWeCanHelp from '@/components/HowWeCanHelp'
import PremiumProducts from '@/components/PremiumProducts'
import Portfolio from '@/components/Portfolio'
import RequestQuote from '@/components/RequestQuote'
import CustomerOpinions from '@/components/CustomerOpinions'
import LatestBlogPosts from '@/components/LatestBlogPosts'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
    <JsonLd<Organization>
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BytebaseTech",
        alternateName: "Bytebase Technologies",
        url: "https://bytebasetech.com",
        logo: "https://bytebasetech.com/logo.png",
        sameAs: [
          "https://www.facebook.com/bytebasetech",
          "https://twitter.com/bytebasetech",
          "https://www.linkedin.com/company/bytebasetech",
          "https://www.instagram.com/bytebasetech",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+256-764-286149",
          contactType: "customer service",
          areaServed: "UG",
          availableLanguage: ["English", "Swahili"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Kampala Road",
          addressLocality: "Kampala",
          addressRegion: "Central Region",
          postalCode: "10101",
          addressCountry: "UG",
        },
        description:
          "BytebaseTech is a leading web design and development company in Uganda, providing innovative digital solutions for businesses.",
      }}
    />
      <Hero />
      <WhyUs />
      <HowWeCanHelp />
      <PremiumProducts />
      <Portfolio />
      <RequestQuote />
      <CustomerOpinions />
      <LatestBlogPosts />
      <Contact />
    </main>
  )
}

