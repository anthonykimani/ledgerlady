import About from '@/components/landing/About'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const AboutPage = () => {
  return (
    <section>
        <Navbar />
        <MarketingSection />
        <About />
        <Testimonials />
        <Footer />
    </section>
  )
}

export default AboutPage