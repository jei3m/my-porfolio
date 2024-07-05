"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Card } from '@nextui-org/react';
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";

const content = [
  {
    title: "Introduction",
    description:
      "Hello! I'm a passionate and dedicated computer engineer with a focus on creating innovative software solutions. My expertise spans across multiple domains, including custom boot software development, TFT screen display projects, and full-stack web development using Next.js and Next UI.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Introduction
      </div>
    ),
  },
  {
    title: "Background",
    description:
      "With a strong foundation in computer engineering, I have honed my skills through a combination of formal education and hands-on experience. My journey in this field has equipped me with a deep understanding of both hardware and software aspects, allowing me to tackle complex challenges with a holistic approach.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      Background
      </div>
    ),
  },
  {
    title: "Highlights",
    description:
      "I thrive on turning ideas into reality through meticulously crafted projects. Here are a few highlights of my work: I have ported the Marauder firmware onto my own ESP32 device, enabling network penetration capabilities and the ability to disable 2.4GHz WiFi routers. In addition to my hardware and firmware skills, I am actively learning and honing my expertise in HTML, CSS, and Next.js.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Highlights
      </div>
    ),
  },
  {
    title: "Journey",
    description:
      "My journey as a computer engineer is fueled by a passion for innovation and a relentless pursuit of excellence. With a strong foundation in both hardware and software, I am dedicated to pushing the boundaries of technology. Whether crafting intricate firmware like 'Marauder' for ESP32 devices or delving into the intricacies of web development with HTML, CSS, and Next.js. Each project not only enhances my technical skills but also reflects my commitment to solving real-world problems with technology.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Journey
      </div>
    ),
  },
];

export function Aboutme() {
  return (
    
      <div className="h-100 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
       {/* <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
       
        <Boxes />
        <br/><br/>
        <h2 className={cn("md:text-4xl text-xl text-white relative z-20 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center")}>
          
          About Me
          
        </h2>
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
        <br/>
      </div>
    
  );
}
