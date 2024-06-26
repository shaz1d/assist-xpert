import { siteConfig } from "@/config/docs";
import PrimaryButton from "../ui/PrimaryButton";
import Reveal from "../ui/Reveal";

const Extras = () => {
  const extras = siteConfig.extras;
  return (
    <section className="section">
      <div className=" container-x">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-12 px-6 lg:px-24 xl:px-32">
          <div className=" col-span-1 text-center md:text-start mt-12">
            <Reveal x={-50} y={0} delay={0.25}>
              <h1 className=" text-4xl mb-8">
                So, who exactly is your next remote team member?
              </h1>
            </Reveal>
            <Reveal x={-50} y={0} delay={0.35}>
              <PrimaryButton className="" href="/hire">
                Hire Expert
              </PrimaryButton>
            </Reveal>
          </div>
          <div className=" md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
            {extras.map((item, index) => {
              return (
                <Reveal
                  delay={0.35 + index * 0.1}
                  key={index}
                  className=" rounded-lg text-center p-6 lg:px-12 pb-16 relative group"
                >
                  <div className=" opacity-0 group-hover:opacity-100 transition-all duration-200 absolute inset-0 bg-gradient-to-br from-primary to-primary-lt rounded-lg"></div>
                  <div className=" relative">
                    <span className="text-4xl mb-6 bg-gradient-to-br from-primary to-primary-lt inline-block text-transparent bg-clip-text group-hover:text-cyan-50">
                      <i className={item.icon}></i>
                    </span>
                    <h3 className="uppercase mb-4 text-lg md:text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className=" text-gray-400 group-hover:text-cyan-50 tracking-widest lg:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
