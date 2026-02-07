import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-main selection:bg-accent-blue selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Background />
      <Contact />
      <Footer />
    </main>
  );
}
