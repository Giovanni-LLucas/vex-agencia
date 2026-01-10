import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <Differentiators />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
