import { siteConfig } from "@/config/docs";
import Linkbtn from "../ui/Linkbtn";
import Reveal from "../ui/Reveal";
import ServiceCard from "../ui/ServiceCard";
const Services = () => {
  const services = siteConfig.services;
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full">
          <Reveal x={-50} y={0} delay={0.25}>
            <h2 className="text-5xl leading-tight">Services We Provide</h2>

            <p className="max-w-3xl mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              consequuntur expedita doloremque dolorem nostrum soluta sapiente
              quos id architecto tempora explicabo, consectetur amet, minus quam
              sequi aspernatur tempore harum consequatur.
            </p>
          </Reveal>
          <Reveal x={50} y={0} delay={0.25} className="ml-auto">
            <Linkbtn href="#">Learn More</Linkbtn>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 w-full  gap-5 py-5 rounded-md mt-9">
          <ServiceCard service={services.web} className="md:row-span-2" />
          <ServiceCard service={services.lead} delay={0.35} />
          <ServiceCard service={services.assistance} delay={0.45} />
          <ServiceCard
            service={services.marketing}
            className="md:col-span-2"
            delay={0.55}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
