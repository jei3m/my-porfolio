"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import Head from "next/head";



export function Hero() {
  return (

    
    <div className="overflow-hidden h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}

   
      <Head>
      <link
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
      rel="stylesheet"
     />
      </Head>

      <Spotlight
        className="-top-60 left-0 md:left-60 md:-top-55"
        fill="white"
      />

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
 
    {/* // <AuroraBackground> */}
     {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
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

      <div className="text-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">

 
       <br/><br/>
        <h1 style={{ fontFamily: "'DM Serif Display', serif" }} className="text-4xl md:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-8">
         <span className="md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">This is</span> <br /> Justin Miguel.
        </h1>

        

        <div className="text-base lg:text-2xl dark:text-neutral-200 py-4">
          He dreams big, aims high, and has goals to achieve.
        </div>
        <h3></h3>

        <p className=" font-normal text-base text-neutral-300 max-w-lg text-s text-center mx-auto">
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
          <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      
    </div>
    </motion.div>
    {/* </div> */}
  {/* //  </AuroraBackground> */}

  </div>
  
  );
}
