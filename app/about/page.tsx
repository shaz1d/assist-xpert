import BannerCta from "@/components/sections/BannerCta";
import Testimonials from "@/components/sections/Testimonials";
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
              <div>
                Phone:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  012 3456 789
                </a>
              </div>
              <div>
                Fax:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  {" "}
                  0011 222 3344
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <Mail size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Address</h4>
              <p>885 Woodstock Road Suite 430-365 Roswell GA 30075-2274</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="container-x">
          <h2 className="text-4xl font-medium text-primary">
            We&apos;re a dynamic team offering top-notch Web Development, Lead
            Generation and Real Estate Admin services. Our crew is a blend of
            creative minds, tech wizards, and customer-centric experts, all
            driven by a common goal: serving our clients with excellence.
            We&apos;re not just about making promises; we&apos;re dedicated to
            delivering results and exceeding expectations. That&apos;s how
            we&apos;ve secured our position in this competitive field and
            continue to thrive
          </h2>
          <div className="mt-10 space-y-3 lg:text-lg">
            <div>
              At AssistXpert, we specialize in creating custom web solutions
              that connect businesses with their customers. Our personalized
              approach ensures that every website we develop is tailored to your
              unique business goals and target audience.
            </div>

            <div>
              <strong>Developing Suitable Webpages</strong> <br />
              From small startups to Medium enterprises, we design and develop
              web pages that align with your brand identity and business
              objectives. Our team combines creativity with technical expertise
              to deliver visually stunning and highly functional websites that
              perform seamlessly across all devices.
            </div>

            <div>
              {" "}
              <strong>Connecting Business to Customers</strong>
              <br />
              We understand the importance of a strong online presence in
              today&apos;s digital landscape. Our strategic Lead Generation
              services are aimed at establishing meaningful connections with
              your customers, driving engagement, and boosting conversions.
            </div>

            <div>
              <strong>Let&apos;s Work Together</strong> <br />
              Whether you&apos;re launching a new website or revamping your
              existing one, we&apos;re here to help you succeed in the digital
              world. Let&apos;s collaborate to create a digital masterpiece that
              showcases your business and connects you with your customers in
              meaningful ways.
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <BannerCta />
    </>
  );
};

export default About;
