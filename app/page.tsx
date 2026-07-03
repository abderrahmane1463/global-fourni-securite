import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Brands } from "@/components/Brands";
import { Zones } from "@/components/Zones";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <About />
        <Gallery />
        <WhyChooseUs />
        <Zones />
        <Community />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
