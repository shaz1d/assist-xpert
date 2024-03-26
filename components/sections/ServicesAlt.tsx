import { siteConfig } from "@/config/docs";
import Reveal from "../ui/Reveal";

const ServicesAlt = () => {
  const servicesAlt = siteConfig.servicesAlt;
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {servicesAlt.map((item, index) => {
          return (
            <a
              href="#"
              className="block bg-cover bg-center px-12 py-28 relative group text-blue-950 hover:text-blue-100 duration-200"
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            >
              <div className=" absolute inset-0 bg-sky-200  transition-all duration-200 group-hover:bg-sky-900/85"></div>
              <div className="relative flex flex-col space-y-3">
                <Reveal delay={0.25 + index * 0.1} className="mb-8 text-5xl">
                  <i className={item.iconClass}></i>
                </Reveal>
                <Reveal delay={0.25 + index * 0.1}>
                  <h2 className=" text-4xl tracking-widest">{item.title}</h2>
                </Reveal>
                <Reveal delay={0.25 + index * 0.1}>
                  <p className="tracking-widest text-slate-500 group-hover:text-slate-300 leading-7">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesAlt;
