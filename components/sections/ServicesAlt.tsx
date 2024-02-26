import { siteConfig } from "@/config/docs";
import { HeadsetIcon } from "lucide-react";
const ServicesAlt = () => {
  const services = siteConfig.services;
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <a
          href="#"
          className="block bg-[url('/assistant.avif')] bg-cover bg-center p-8 relative group"
        >
          <div className=" absolute inset-0 bg-gray-500 transition-all duration-200 group-hover:bg-opacity-85"></div>
          <div className="relative flex flex-col space-y-3">
            <HeadsetIcon size={40} className="mb-4" />
            <h2 className=" text-3xl">Virtual Assistant Service</h2>
            <p className="tracking-widest">
              Don’t let administrative overload keep you from focusing on what
              matters most. Our dedicated Virtual Assistants are your personal
              superheroes—no phone booth required.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicesAlt;
