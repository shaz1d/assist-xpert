import { siteConfig } from "@/config/docs";
import Linkbtn from "../ui/Linkbtn";
import ServiceCard from "../ui/ServiceCard";
const Services = () => {
  const services = siteConfig.services;
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full">
          <div>
            <h2 className="text-5xl leading-tight">Services We Provide</h2>
            <p className="max-w-3xl mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              consequuntur expedita doloremque dolorem nostrum soluta sapiente
              quos id architecto tempora explicabo, consectetur amet, minus quam
              sequi aspernatur tempore harum consequatur.
            </p>
          </div>
          <div className="ml-auto">
            <Linkbtn href="#">Learn More</Linkbtn>
          </div>
        </div>
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
