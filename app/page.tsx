import About from "@/components/landing/About";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}
