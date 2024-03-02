import { Mail, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="relative  min-h-[700px] py-32 flex justify-center items-center">
        <div className="absolute inset-0 bg-secondary/60 z-10"></div>
        <Image
          src="/business-team-working-office-worker-concept.jpg"
          alt="business team working office worker concept"
          fill={true}
          className="object-cover"
        ></Image>
        <div className="container-x relative z-20">
          <h1 className="text-6xl font-bold max-w-4xl">
            Our Vision Is To{" "}
            <span className="underline underline-offset-8 decoration-primary">
              Help You Achieve Your Vision.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 justify-items-center">
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <MapPinned size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Address</h4>
              <p>885 Woodstock Road Suite 430-365 Roswell GA 30075-2274</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <PhoneCall size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Phone</h4>
              <p>
                Phone:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  012 3456 789
                </a>
              </p>
              <p>
                Fax:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  {" "}
                  0011 222 3344
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <Mail size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Address</h4>
              <p>885 Woodstock Road Suite 430-365 Roswell GA 30075-2274</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
