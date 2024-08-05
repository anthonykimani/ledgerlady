import About from '@/components/landing/About'
import Blogs from '@/components/landing/Blogs'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import React from 'react'

const BlogsPage = () => {
  return (
    <section>
        <Navbar />
        <Blogs />
        <About />
        <Footer />
    </section>
  )
}

export default BlogsPage