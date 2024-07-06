"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Card } from '@nextui-org/react';
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Head from "next/head";

const content = [
  {
    title: "Introduction",
    description:
      "I'm a passionate and dedicated computer engineering student with a focus on creating both innovative software and hardware solutions. My experience spans multiple domains, from firmware installation to ESP32 devices, web development, computer building and troubleshooting, and also basic device repair to common cellphone issues like LCD and battery replacement. I am continuously studying the current trends in both hardware and software development. Hoping one day, I'll be given the opportunity to work within those developments.",
      description2:
      "",
      description3:
      "",
      description4:
      "",
      description5:
      "",
      description6:
      "",
      description7:
      "",
      content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Introduction
      </div>
    ),
  },
  {
    title: "Background",
    description:
      "My overall background as a computer engineering student comes with a strong foundation in both hardware and software. Whether porting intricate firmware like 'Marauder' for ESP32 devices, or working on web development with HTML, CSS, React.js, and Next.js, with a touch of the Django REST framework. I'm also experienced with various hardware components with Arduino, and I can build computers, and do basic troubleshooting on both the hardware and software side.",
      description2:
      "",
      description3:
      "",
      description4:
      "",
      description5:
      "",
      description6:
      "",
      description7:
      "",
      content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      Background
      </div>
    ),
  },
  {
    title: "Highlights",
    description:
    "I thrive on turning ideas into reality through the creation of different projects. Here are a few highlights of my work: I have ported the Marauder firmware onto my own ESP32 development board, which enables Wi-Fi/Bluetooth penetration capabilities. In addition to my hardware and firmware skills, I am actively learning and honing my expertise in HTML, CSS, React.js, and Next.js. But, I can also do back-end functions with the Django REST framework.",
    description2:
    "",
    description3:
    "",
    description4:
    "",
    description5:
    "",
    description6:
    "",
    description7:
    "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Highlights
      </div>
    ),
  },
  {
    title: "Hobbies/Skills",
      description:
      "• Keyboard building and modding.",
      description2:
      "• PC building and Windows software optimization.",
      description3:
      "• Mobile device repair, replacing common parts.",
      description4:
      "• Working on hardware projects like ESP32.",
      description5:
      "• Playing table tennis as I am a student athlete.",
      description6:
      "• Web development, working on projects, and studying languages.",
      description7:
      "• To constantly learn about anything there is about technology.",
      content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Hobbies/Skills
      </div>
    ),
  },
];

export function Aboutme() {
  return (
    
      <div className="h-100 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg overflow-hidden h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        
        <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
                </Head>


        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       
        
        
        <h2 style={{ fontFamily: "'DM Serif Display', serif" }} className={cn("md:text-4xl text-xl text-white relative z-20 scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl text-center")}>
          
          About Me
          
        </h2>
        <div className="p-10">
          <StickyScroll content={content} />
        </div>

      </div>
    
  );
}
