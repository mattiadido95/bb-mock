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
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <Image src={"/about/img2.png"} width={559} height={721} alt="" />
        </div>
        <div>
          <h2 className="h2 mb-[38px]">About Hotely</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default About;
