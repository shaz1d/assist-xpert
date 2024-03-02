import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";

const BookRelease = () => {
  return (
    <section className="section">
      <div className="container-x">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-4 p-8 md:py-16 md:px-20 bg-gradient-to-br from-red-400/80 to-primary/90 rounded-xl">
          <div className="tracking-wider">
            <span className=" font-medium inline-block mb-2">Introducing</span>
            <h1 className=" text-4xl md:text-5xl font-semibold mb-4">
              Delegate to Elevate
            </h1>
            <h3 className=" uppercase font-extralight text-4xl mb-4">
              ACCOMPLISH MORE BY JUGGLING LESS
            </h3>
            <p className=" font-light leading-7 mb-6">
              When it comes to experiencing growth in your business, you have to
              think differently about how you run it. You canʼt keep doing
              everything on your own; you have to delegate. This ebook tells you
              how.
            </p>
            <PrimaryButton
              className=" bg-white text-gray-800 hover:shadow-gray-800/15"
              href="/"
            >
              Learn More
            </PrimaryButton>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" relative w-full min-h-96">
              <Image
                src="/book.png"
                alt="Book Image"
                fill={true}
                className=" object-contain"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookRelease;
