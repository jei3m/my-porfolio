
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import {Hero} from "@/components/hero";
import Projects from "@/components/projects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Contact from "@/components/contact";
import { Aboutme } from "@/components/Aboutme";
import Experiences from "@/components/experiences";

export default function Home() {
  return (
 

   
      <div className="flex flex-col overflow-x-hidden overflow-hidden">
        {/* <Header/> */}
        <Hero />
        {/* <Separator/> */}
        <Experiences/>
        {/* <Separator/> */}
        <Projects/>
        {/* <Separator/> */}
        <Aboutme/>
        <Separator/>
        <Contact/>

      </div>
    
 
  );
}
