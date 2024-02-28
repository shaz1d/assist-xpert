import Achivements from "@/components/sections/Achivements";
import BannerCta from "@/components/sections/BannerCta";
import Extras from "@/components/sections/Extras";
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
      <Achivements />
      <BannerCta />
      <Extras />
    </main>
  );
}
