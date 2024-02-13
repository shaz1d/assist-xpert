import Linkbtn from "../ui/Linkbtn";

const Services = () => {
  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">
          Solutions for Business Growth
        </h1>
        <p className="text-center text-lg">
          We are a digital agency that helps businesses grow faster and more
          effectively.
        </p>
        <Linkbtn href="/about">Explore Now</Linkbtn>
      </div>
    </section>
  );
};

export default Services;
