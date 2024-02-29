import { siteConfig } from "@/config/docs";

const Achivements = () => {
  const achivements = siteConfig.achivements;
  return (
    <div className="section">
      <div className="container-x">
        <h1 className=" text-2xl mb-12 text-center px-12">
          Your Path to Productivity Has Never Been Easier
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {achivements.map((item, index) => {
            return (
              <div className=" px-12 py-6 text-center" key={index}>
                <h2 className="text-6xl font-semibold bg-gradient-to-tr from-sky-600 to-emerald-400 inline-block text-transparent bg-clip-text group-hover:text-cyan-50">
                  {item.title}
                </h2>
                <div className="w-32 md:w-36 mx-auto">
                  <div className="w-full h-px bg-gradient-to-r from-sky-600 to-emerald-400 my-3"></div>
                  <p className=" uppercase font-extralight tracking-widest">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achivements;
