"use client";

import React from 'react'
import { WavyBackground } from '@/components/ui/wavy-background'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from "framer-motion";
import {Button, ButtonGroup} from "@nextui-org/button";

export default function Hero() {
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
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Justin Miguel
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
           Yes, that's me.
        </div>
        <Button size="md" variant="flat" className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Learn More.
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
