import { siteConfig } from "@/config/docs";
import ServiceCard from "../ui/ServiceCard";
const Services = () => {
  const services = siteConfig.services;
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Services We Provide</h2>
        <p></p>
        <div className="grid md:grid-cols-3 w-full  gap-5 py-5 rounded-md mt-9">
          <ServiceCard service={services.web} className="md:row-span-2" />
          <ServiceCard service={services.lead} />
          <ServiceCard service={services.assistance} />
          <ServiceCard service={services.marketing} className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default Services;
