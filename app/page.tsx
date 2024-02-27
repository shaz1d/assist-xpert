import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import ServicesAlt from "@/components/sections/ServicesAlt";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Services></Services>
      <ServicesAlt />
      <HowItWorks />
    </main>
  );
}
