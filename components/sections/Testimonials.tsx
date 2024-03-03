"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { siteConfig } from "@/config/docs";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = siteConfig.testimonials;
  return (
    <section className="section ">
      {/* <div className=" fixed inset-0 z-50 bg-gray-950/50 flex items-center">
        <div className=" w-full relative py-8">
          <button className=" absolute top-0 right-4 ">close</button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/imhdh4xCh7I?si=qtFY_Tby_NSdvDZn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}

      <div className="relative min-h-72 md:min-h-96 mb-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-secondary/40 z-10"></div>
        <Image
          src="/hero-bg.jpg"
          alt="background Image"
          fill={true}
          className="object-cover"
        ></Image>

        <div className=" relative text-center p-6 tracking-wider z-20">
          <h2 className=" uppercase text-lg mb-4">
            Don't just take it from us.
          </h2>
          <h1 className=" text-4xl md:text-5xl mb-8">Hear From Our Clients.</h1>
          <button className=" p-2 text-4xl rounded-full border-2 md:border-4 border-white w-12 md:w-14 h-12 md:h-14 inline-flex items-center justify-center">
            <i className="bx bx-play ml-1"></i>
          </button>
        </div>
      </div>

      <div className="container-x">
        <div className="relative px-4 md:px-8 lg:px-20">
          <div className="flex flex-col items-center gap-y-4 mb-12">
            <h2 className=" tracking-widest text-2xl uppercase">
              What They're Saying
            </h2>
            <div className=" bg-primary h-[2px] w-16"></div>
          </div>
          <Swiper
            spaceBetween={30}
            pagination={{
              el: "#containerForBullets",
              type: "bullets",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
              clickable: true,
            }}
            modules={[Pagination]}
            className="relative !pb-10"
          >
            {testimonials.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className=" w-full text-white text-center font-light text-xl leading-10">
                    "{item.text}"
                  </div>
                </SwiperSlide>
              );
            })}

            <div
              id="containerForBullets"
              className=" absolute z-10 flex items-center justify-center  left-0 right-0 space-x-2 bottom-2  h-2"
            ></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
