
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import {Hero} from "@/components/hero";
import Projects from "@/components/projects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import { Aboutme } from "@/components/Aboutme";
import Contact from "@/components/contact";

export default function Home() {
  return (
 

   
      <div className="flex flex-col overflow-x-hidden">
        {/* <Header/> */}
        <Hero />
        <Separator/>
        <Projects/>
        <Separator/>
        <Aboutme/>
        <Separator/>
        <Contact/>

      </div>
    
 
  );
}
