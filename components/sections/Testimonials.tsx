"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { siteConfig } from "@/config/docs";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import Reveal from "../ui/Reveal";

const Testimonials = () => {
  const testimonials = siteConfig.testimonials;

  const [showModal, setShowModal] = useState(false);
  return (
    <section className="section ">
      {showModal && (
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className=" fixed inset-0 z-50 bg-gray-950/80 flex items-center transition-all duration-200"
        >
          <div className=" w-full relative py-10">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className=" absolute top-0 right-4 text-primary p-1 text-2xl"
            >
              <i className="bx bx-x-circle"></i>
            </button>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8P-Ay8kUOqI?si=uSRy3yFIDGzNR1-c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="relative min-h-72 md:min-h-96 mb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary/80 z-10"></div>
        <Image
          src="/marketing.jpg"
          alt="background Image"
          fill={true}
          className="object-cover !h-auto"
        ></Image>

        <div className=" relative text-center p-6 tracking-wider z-20">
          <Reveal delay={0.25}>
            <h2 className=" uppercase text-lg mb-4">
              Don&apos;t just take it from us.
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <h1 className=" text-4xl md:text-5xl mb-8">
              Hear From Our Clients.
            </h1>
          </Reveal>
          <Reveal delay={0.45}>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className=" p-2 text-4xl rounded-full border-2 md:border-4 border-white w-12 md:w-14 h-12 md:h-14 inline-flex items-center justify-center"
            >
              <i className="bx bx-play ml-1"></i>
            </button>
          </Reveal>
        </div>
      </div>

      <div className="container-x">
        <div className="relative px-4 md:px-8 lg:px-20">
          <div className="flex flex-col items-center gap-y-4 mb-12">
            <Reveal delay={0.25}>
              <h2 className=" tracking-widest text-2xl uppercase">
                What They&apos;re Saying
              </h2>
            </Reveal>
            <Reveal delay={0.35}>
              <div className=" bg-primary h-[2px] w-16"></div>
            </Reveal>
          </div>
          <Reveal delay={0.45}>
            <Swiper
              spaceBetween={30}
              pagination={{
                el: "#containerForBullets",
                type: "bullets",
                bulletClass: "swiper-custom-bullet",
                bulletActiveClass: "swiper-custom-bullet-active",
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="relative !pb-10"
            >
              {testimonials.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" w-full text-white text-center font-light text-xl leading-10">
                      &quot;{item.text}&quot;
                    </div>
                  </SwiperSlide>
                );
              })}

              <div
                id="containerForBullets"
                className=" absolute z-10 flex items-center justify-center  left-0 right-0 space-x-2 bottom-2  h-2"
              ></div>
            </Swiper>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
