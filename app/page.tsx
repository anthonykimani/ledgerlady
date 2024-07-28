import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import Courses from "@/components/landing/Courses";
import Events from "@/components/landing/Events";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import MarketingSection from "@/components/landing/MarketingSection";
import Navbar from "@/components/landing/Navbar";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Courses />
      <Events />
      <Blogs />
      <Testimonials />
      <MarketingSection />
      <Footer />
    </main>
  );
}
