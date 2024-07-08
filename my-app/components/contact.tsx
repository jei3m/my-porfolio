"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "./custom/reveal";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
import Head from "next/head";
import Image from "next/image";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone, faCalendarAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faCodepen, faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@nextui-org/button";

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    "/picofme1.png",
  ];

  return (
    <div className="p-4 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="contacts" className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-8 md:p-12">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
          <h2 style={{ fontFamily: "DM Serif Display, serif" }} className={cn("text-white relative z-20 scroll-m-20 text-3xl lg:text-4xl lg:text-5xl font-extrabold tracking-tight text-center")}>
            Contact Me
          </h2>
          <br />
          <br />
          <div className="bg-white rounded-lg overflow-hidden p-6 sm:p-8 md:p-12 shadow-card-animation flex flex-col items-center w-full">
            <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 relative mb-4">
              <Image
                src={images[currentImage - 1]}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Justin Miguel Reyes</h1>
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-4">BsCpE Student</p>
            <div className="flex flex-wrap justify-center items-center mb-4 text-black text-xl sm:text-2xl md:text-3xl">
              <a href="mailto:justinmiguel.rys03@gmail.com" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 sm:mr-4" />
              </a>
              <a href="https://www.facebook.com/justinmiguel.reyes/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faFacebook} className="mr-2 sm:mr-4" />
              </a>
              <a href="https://github.com/jei3m" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faGithub} className="mr-2 sm:mr-4" />
              </a>
              <a href="https://www.instagram.com/_justinmiguel/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faInstagramSquare} className="mr-2 sm:mr-4" />
              </a>
            </div>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 text-center">
              <p>+63 985-184-5658</p>
              <br/>
              If you&apos;d like to contact me, feel free to reach out on my socials!
              <br/><br/>
              <div className="text-center">
                <a href="#contacts">
                  <Button color="primary" size="lg" variant="ghost">
                   Résumé
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
