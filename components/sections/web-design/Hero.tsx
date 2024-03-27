import Linkbtn from "@/components/ui/Linkbtn";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex justify-center items-center">
      <div className="absolute inset-0 bg-secondary/60 z-10"></div>
      <Image
        src="/web-design-bg.jpg"
        alt="background Image"
        fill={true}
        className="object-cover"
      ></Image>
      <div className="container-x grid grid-cols-2 md:grid-cols-3 relative z-20">
        <div className="flex flex-col gap-4 items-start col-span-2">
          <Reveal x={-50} y={0} delay={0.25}>
            <h1 className="text-6xl font-bold">
              We build & deliver impactgul digital products.
            </h1>
          </Reveal>
          <Reveal x={-50} y={0} delay={0.35}>
            <p className="max-w-3xl text-2xl">
              Assist Xpert partners with its client tot provide cutting edge
              software solutions by neutralizing complex issues of information
              infrastucture.
            </p>
          </Reveal>
          <Reveal x={-50} y={0} delay={0.45}>
            <Linkbtn href="/about">View Our Work</Linkbtn>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
