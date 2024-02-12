import Container from "../Container";
import Linkbtn from "../ui/Linkbtn";

const Hero = () => {
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-blend-overlay relative min-h-[700px] flex justify-center items-center">
      <div className="absolute inset-0 bg-secondary/30"></div>
      <Container>
        <div className="grid grid-cols-3 relative z-10">
          <div className="flex flex-col gap-3 items-start col-span-2">
            <h1 className="text-6xl font-bold">
              Navigate Growth with Expert/Smart Guidance
            </h1>
            <p className="max-w-3xl text-2xl">
              Streamlined Processes, Expert Assistance, and Powerful Web
              Solutions for Business Growth.
            </p>
            <Linkbtn href="/about">Explore Now</Linkbtn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
