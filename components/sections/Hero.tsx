import Image from "next/image";
import Linkbtn from "../ui/Linkbtn";

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex justify-center items-center">
      <div className="absolute inset-0 bg-secondary/60 z-10"></div>
      <Image
        src="/hero-bg.jpg"
        alt="background Image"
        fill={true}
        className="object-cover"
      ></Image>
      <div className="container-x grid grid-cols-2 md:grid-cols-3 relative z-20">
        <div className="flex flex-col gap-4 items-start col-span-2">
          <h1 className="text-6xl leading-tight">
            Navigate Growth with Expert/Smart Guidance
          </h1>
          <p className="max-w-4xl text-2xl uppercase tracking-widest">
            Streamlined Processes, Expert Assistance, and Powerful Web Solutions
            for Business Growth.
          </p>
          <Linkbtn href="/about">Explore Now</Linkbtn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
