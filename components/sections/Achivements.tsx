import { siteConfig } from "@/config/docs";
import Reveal from "../ui/Reveal";

const Achivements = () => {
  const achivements = siteConfig.achivements;
  return (
    <div className="section">
      <div className="container-x">
        <Reveal delay={0.25}>
          <h1 className=" text-2xl mb-12 text-center px-12">
            Your Path to Productivity Has Never Been Easier
          </h1>
        </Reveal>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {achivements.map((item, index) => {
            return (
              <Reveal
                delay={0.35 + index * 0.1}
                className=" px-12 py-6 text-center"
                key={index}
              >
                <h2 className="text-6xl font-semibold bg-gradient-to-tr from-primary to-primary-lt inline-block text-transparent bg-clip-text group-hover:text-cyan-50">
                  {item.title}
                </h2>
                <div className="w-32 md:w-36 mx-auto">
                  <div className="w-full h-px bg-gradient-to-r from-primary to-primary-lt my-3"></div>
                  <p className=" uppercase font-extralight tracking-widest">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achivements;
