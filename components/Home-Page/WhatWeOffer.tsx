import Image from "next/image";

import Offer from "@/public/Main/Offer.webp";
import { services } from "@/static-data/services";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useContext } from "react";

import { authContext } from "../Providers/Providers";
import NBgButtons from "../UI/Links/NBgLink";

const WhatWeOffer = () => {
  const [hasViewed, setHasViewed] = useState(false);
  const user = useContext(authContext);

  return (
    <section
      className={`w-full ${
        user ? "hidden" : "flex"
      } items-center py-0 xl:py-8 p-8 xl:h-screen md:h-[900px] gap-8 overflow-hidden`}
    >
      <div className="flex flex-col gap-8 lg:basis-3/4 dark:text-white">
        <motion.h1
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-4xl md:text-5xl"
        >
          What do we offer?
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 h-fit">
          {services.map((service) => {
            return (
              <motion.div
                initial={
                  hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                }
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                  },
                }}
                className="flex flex-col justify-center w-full gap-y-5"
                key={service.id}
              >
                <h1 className="flex items-center text-2xl gap-2">
                  <span className="text-brandDark dark:text-brandLight">
                    {service.icon}
                  </span>
                  {service.topic}
                </h1>
                <p className="opacity-70">{service.text}</p>
                <NBgButtons prompt="Learn more" />
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.2,
          },
        }}
        className="relative hidden h-full overflow-hidden border border-black dark:border-white basis-1/2 rounded-xl lg:block"
      >
        <Image
          src={Offer}
          placeholder="blur"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          className="object-cover"
          alt="Beach umbrella with two seats"
        />
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;