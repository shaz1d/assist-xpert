import { siteConfig } from "@/config/docs";

const HowItWorks = () => {
  const steps = siteConfig.howItWorks;
  return (
    <section className="section">
      <div className="container">
        <h1 className=" text-center text-5xl mb-8">How It Works</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, index) => {
            return (
              <div
                className=" relative rounded-lg py-12 px-14 group"
                key={index}
              >
                <div className=" transition-all duration-200 opacity-0 group-hover:opacity-100 absolute inset-0 rounded-lg bg-gradient-to-tl from-emerald-400 to-cyan-500"></div>
                <div className="relative pb-8">
                  <div className=" text-4xl mb-12 bg-gradient-to-tr from-sky-600 to-emerald-400 inline-block text-transparent bg-clip-text group-hover:text-cyan-50">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className=" text-2xl mb-4">{item.step}</h3>
                  <p className=" leading-7 tracking-wider text-gray-300 group-hover:text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-center">
          <button className=" px-12 py-3 rounded-md border-2 border-gray-100 uppercase transition-all duration-200 hover:shadow-xl hover:shadow-gray-400/20">
            Lets Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
