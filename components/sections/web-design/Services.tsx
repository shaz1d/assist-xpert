import Linkbtn from "@/components/ui/Linkbtn";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/config/docs";
const Services = () => {
  const services = siteConfig.webDesignServices;
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((item, index) => {
            return (
              <Reveal
                delay={0.35 + index * 0.15}
                className=" relative bg-content rounded-lg p-8 md:py-12 md:px-14 group"
                key={index}
              >
                <div className=" transition-all duration-200 opacity-0 group-hover:opacity-100 absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-primary-lt"></div>
                <div className="relative pb-8">
                  <div className=" text-5xl mb-12 bg-gradient-to-br from-primary to-primary-lt inline-block text-transparent bg-clip-text group-hover:text-cyan-50">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className=" text-2xl mb-4 font-medium">{item.step}</h3>
                  <p className="  leading-7 tracking-widest text-gray-300 group-hover:text-gray-100 ">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
