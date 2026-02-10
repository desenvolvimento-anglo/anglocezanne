"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const HeroHome = () => {
  return (
    <div className="relative mt-20">
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="h-97 hidden md:block">
              <Image
                className="relative object-cover w-full h-full"
                src="/img/anglo/banner-desktop.png"
                width={1920}
                height={650}
                alt="Anglo Cezanne"
              />
            </div>
            <div className="h-80 md:hidden">
              <Image
                className="relative object-cover w-full h-full"
                src="/img/anglo/banner-mobile.png"
                width={960}
                height={325}
                alt="Anglo Cezanne"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute h-full w-full flex items-center place-content-between inset-0">
        <div className="prev text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretLeft />
        </div>
        <div className="next text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretRight />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
