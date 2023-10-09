"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import React from "react";
import { FaPlane } from "react-icons/fa";

import { Button } from "../ShadUI/button";
import SocialLinks from "./SocialLinks";

const footerData = [
  {
    id: 1,
    category: "Plan Your Trip",
    links: [
      { text: "Book Flights", url: "/flights" },
      { text: "Accommodations", url: "/accommodations" },
      { text: "Transportation", url: "/transport" },
      { text: "Travel Insurance", url: "/insurance" },
    ],
  },
  {
    id: 2,
    category: "Explore",
    links: [
      { text: "Destinations", url: "/destinations" },
      { text: "Guided Tours", url: "/tours" },
      { text: "Activities", url: "/activities" },
      { text: "Travel Blog", url: "/blog" },
    ],
  },
  {
    id: 3,
    category: "Connect",
    links: [
      { text: "About Us", url: "/aboutus" },
      { text: "FAQ", url: "/faq" },
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms and Conditions", url: "/terms" },
    ],
  },
];

const Footer = () => {
  const [hasViewed, setHasViewed] = React.useState(false);
  const pathname = usePathname();

  return (
    <motion.footer
      animate={
        pathname === "/"
          ? { display: "block", transition: { delay: 2.8 } }
          : pathname === "/login" ||
            pathname === "/signup" ||
            pathname === "/recover" ||
            pathname === "/studio" ||
            pathname.startsWith("/studio/")
          ? { display: "none" }
          : { display: "block" }
      }
      className={`mt-40 px-6 xl:px-8 space-y-8 ${
        pathname === "/" ? "hidden" : ""
      }`}
    >
      <section className="max-w-[1440px] mx-auto overflow-hidden">
        <motion.p
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-4xl text-center md:text-left md:text-6xl"
        >
          Explore the{" "}
          <span className="text-brandDark dark:text-brandLight">World,</span>
        </motion.p>
        <motion.p
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-4xl text-center md:text-right md:text-6xl lg:text-8xl xl:text-9xl"
        >
          One click at a{" "}
          <span className="text-brandDark dark:text-brandLight">Time!</span>
        </motion.p>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center pb-8 gap-8 lg:flex-row">
          <Link
            href={pathname === "/" ? "/" : `/?splashed=true`}
            className={`hidden lg:flex items-center text-4xl xs:text-lg h-fit`}
          >
            Agency
            <span className="text-brandDark dark:text-brandLight">.io</span>
            &nbsp;
            <FaPlane />
          </Link>

          <div className="flex flex-wrap justify-between w-full gap-8 md: md:justify-around lg:w-fit grow">
            {footerData.map((data) => (
              <div key={data.id} className="space-y-6">
                <p className="text-brandDark dark:text-brandLight">
                  {data.category}
                </p>
                <div className="flex flex-col gap-4">
                  {data.links.map((link, index) => (
                    <Link
                      href={link.url}
                      prefetch={false}
                      key={index}
                      className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button className="hidden lg:block" variant={"plain"} size={"sm"}>
            <Link
              href={"/contactUs"}
              prefetch={false}
              className="w-full h-full"
            >
              Contact Us
            </Link>
          </Button>
        </div>

        <section className="flex flex-col-reverse items-center justify-between py-8 text-sm text-center border-t border-black gap-6 md:flex-row dark:border-white md:gap-0">
          <p>
            © 2023 Agency
            <span className="text-brandDark dark:text-brandLight">
              .io
            </span>{" "}
            Inc. All rights reserved.
          </p>

          <SocialLinks />
        </section>
      </section>
    </motion.footer>
  );
};

export default Footer;
