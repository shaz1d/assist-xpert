import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import Reveal from "../ui/Reveal";

const BookRelease = () => {
  return (
    <section className="section">
      <div className="container-x">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-4 p-8 md:py-16 md:px-20 bg-gradient-to-br from-red-400/80 to-primary/90 rounded-xl">
          <div className="tracking-wider">
            <Reveal x={-50} y={0} delay={0.25}>
              <span className=" font-medium inline-block mb-2">
                Introducing
              </span>
            </Reveal>
            <Reveal x={-50} y={0} delay={0.35}>
              <h1 className=" text-4xl md:text-5xl font-semibold mb-4">
                Delegate to Elevate
              </h1>
            </Reveal>
            <Reveal x={-50} y={0} delay={0.45}>
              <h3 className=" uppercase font-extralight text-4xl mb-4">
                ACCOMPLISH MORE BY JUGGLING LESS
              </h3>
            </Reveal>

            <Reveal x={-50} y={0} delay={0.55}>
              <p className=" font-light leading-7 mb-6">
                When it comes to experiencing growth in your business, you have
                to think differently about how you run it. You canʼt keep doing
                everything on your own; you have to delegate. This ebook tells
                you how.
              </p>
            </Reveal>
            <Reveal x={-50} y={0} delay={0.65}>
              <PrimaryButton
                className=" bg-white text-gray-800 hover:shadow-gray-800/15"
                href="/"
              >
                Learn More
              </PrimaryButton>
            </Reveal>
          </div>

          <div className=" flex justify-center items-center">
            <Reveal
              x={50}
              y={0}
              delay={0.25}
              className=" relative w-full min-h-96"
            >
              <Image
                src="/book.png"
                alt="Book Image"
                fill={true}
                className=" object-contain"
              ></Image>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookRelease;
