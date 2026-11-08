import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import WhatWeMake from "@/components/WhatWeMake";
import WhyInkora from "@/components/WhyInkora";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import  MarqueeTicker  from "@/components/MarqueeTicker";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeTicker />
        <WhatWeDo />
        <Process />
        <WhatWeMake />
        <WhyInkora />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
