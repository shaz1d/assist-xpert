import { siteConfig } from "@/config/docs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = siteConfig.footerLinks;
  const firstHalf = footerLinks.slice(0, footerLinks.length / 2);
  const remainingHalf = footerLinks.slice(footerLinks.length / 2);

  const socials = siteConfig.socials;
  return (
    <footer>
      <div className="section pb-0">
        <div className="container-x">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-300">
            <div className=" flex flex-col gap-y-4">
              <div className="flex items-end gap-2 mb-8">
                <Image
                  src="/assist-xpert-logo.svg"
                  width={64}
                  height={20}
                  alt=""
                />
                <h2 className=" font-bold text-4xl uppercase text-gray-100">
                  Assist Xpert
                </h2>
              </div>
              <span>The Right Hire. Right Now</span>
              <span>
                Virtual Assistants. Accounting Services. Social Media Managers.
              </span>
              <span>Made with ♥ from the Assist Xpert team.</span>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {firstHalf.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className=" p-1 transition-colors duration-200 hover:text-gray-500"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className=" space-y-4">
                {remainingHalf.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className=" p-1 transition-colors duration-200 hover:text-gray-500"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 mt-8 bg-slate-100 text-gray-800">
          <div className="container-x">
            <p className="text-sm font-light leading-7">
              <span className=" bg-green-500 uppercase p-1 font-medium tracking-widest mr-1">
                IMITATED BUT NEVER DUPLICATED:
              </span>
              Please note that our official site -{" "}
              <a
                className="text-green-500 hover:text-green-700"
                href="www.assistxpert.com"
              >
                www.assistxpert.com
              </a>{" "}
              - and our official emails - are the{" "}
              <span className="text-green-500">only</span> places from which we
              will ever recruit and initiate sales. We will never ask for money
              during our application or hiring process.
            </p>
          </div>
        </div>
        <div className="container-x">
          <div className=" grid grid-cols-1 md:grid-cols-2 py-4 text-xs gap-4">
            <div className="flex items-center tracking-widest justify-center md:justify-start">
              © 2024 Assist Xpert. Privacy | Terms | Diversity & Inclusion
            </div>
            <ul className=" flex items-center justify-center  md:justify-end gap-4 text-lg">
              {socials.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      className=" transition-colors duration-200 p-1 hover:text-primary-lt"
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
