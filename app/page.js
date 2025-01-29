import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer"
import Testimonials from "./_components/Testimonials";
import DesignSection from "./_components/DesignSection";
import LogoMakerSteps from "./_components/LogoMakerSteps";
import BrandIdentitySection from "./_components/BrandIdentitySection";
import FAQSection from "./_components/FAQSection";
import BrandAutoScroll from "./_components/BrandAutoScroll";


export default function Home() {

  return (
    <div>
      <Hero />
      <BrandAutoScroll />
      <LogoMakerSteps />
      <BrandIdentitySection />
      <Testimonials />
      <DesignSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
