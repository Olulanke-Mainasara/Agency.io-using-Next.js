"use client";

import Image, { StaticImageData } from "next/image";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NBgLink from "../Links/NBgLink";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

type Items = {
  id: number;
  mainText: string;
  subText: string;
  description: string;
  imgsrc: StaticImageData;
}[];

const FullPageCarousel = ({ items }: { items: Items }) => {
  return (
    <section className="xl:py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-swipe-next",
          prevEl: ".button-swipe-prev",
        }}
        allowTouchMove
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        <LeftArrow />

        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className="flex flex-col gap-5">
              <div className="relative w-full overflow-hidden text-white dark:border rounded-xl xl:h-[700px] lg:h-[800px] md:h-[700px] h-[600px]">
                <div className="relative w-full h-full">
                  <Image
                    src={item.imgsrc}
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    quality={50}
                    placeholder="blur"
                    alt={item.mainText}
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 pt-8 pl-3 sm:pl-5 backdrop-brightness-50 rounded-xl">
                  <div className="space-y-3">
                    <p className="opacity-75 md:text-2xl">{item.subText}</p>
                    <h1 className="max-w-3xl text-3xl md:text-7xl">
                      {item.mainText}
                    </h1>
                  </div>

                  <div className="absolute max-w-lg space-y-5 bottom-8 sm:right-5">
                    <p className="md:text-lg">{item.description}</p>

                    <NBgLink prompt="Build your trip" href="#" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <RightArrow />
      </Swiper>
    </section>
  );
};

export default FullPageCarousel;