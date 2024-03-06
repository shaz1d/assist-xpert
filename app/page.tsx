import Achivements from "@/components/sections/Achivements";
import BannerCta from "@/components/sections/BannerCta";
import BookRelease from "@/components/sections/BookRelease";
import Extras from "@/components/sections/Extras";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import SalesBanner from "@/components/sections/SalesBanner";
import Services from "@/components/sections/Services";
import ServicesAlt from "@/components/sections/ServicesAlt";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ServicesAlt />
      <HowItWorks />
      <Achivements />
      <BannerCta />
      <Extras />
      <Testimonials />
      <SalesBanner />
      <BookRelease />
    </main>
  );
}
