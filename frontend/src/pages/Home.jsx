import Hero from "../components/marketing/Hero";
import Trusted from "../components/marketing/Trusted";
import Features from "../components/marketing/Features";
import Stats from "../components/marketing/Stats";
import CTA from "../components/marketing/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}