"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [ref, inView] = useInView({
    threshold: isMobile ? 0.5 : null,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            className="flex-1 relative"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Image src={"/about/img2.png"} width={559} height={721} alt="" />
          </motion.div>
          <motion.div
            className="xl:max-w-[470px]"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="my-5 xl:my-10 min-h-[35px]">
              <Stats />
            </div>
            <p className="mb-10">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <Button variant="accent">Learn More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
