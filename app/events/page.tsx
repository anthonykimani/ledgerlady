import Events from '@/components/landing/Events'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import React from 'react'

const EventsPage = () => {
  return (
    <section>
        <Navbar />
        <Events />
        <MarketingSection />
        <Footer />
    </section>
  )
}

export default EventsPage