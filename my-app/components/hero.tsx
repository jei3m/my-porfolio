"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";



export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         This is <br /> Justin Miguel.
        </h1>

        <div className="text-base md:text-2xl dark:text-neutral-200 py-4">
          He dreams big, aims high, and has goals to achieve.
        </div>
        <h3></h3>

        <p className=" font-normal text-base text-neutral-300 max-w-lg text-xs text-center mx-auto">
         A PORTFOLIO SHOWCASE WITH NEXT.JS
        </p>

          <br/>
        <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
      </div>
    </div>
    </motion.div>
    </AuroraBackground>
  );
}
