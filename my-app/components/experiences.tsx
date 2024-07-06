import { ExperienceCard } from "./custom/experience-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import experiences from '@/lib/experiences.json';
import Head from "next/head";

export default function Experiences() {
    return (
        <div className="flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>   
        <section id="experiences" className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16">

                <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
                </Head>

            <h2 style={{ fontFamily: "'DM Serif Display', serif" }} className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-center w-full z-20">
                Ano ilalagay ko dito
            </h2>
            <br/>
            <div className="flex flex-col gap-4 md:hidden">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.title}
                        title={experience.title}
                        company={experience.company}
                        date={experience.date}
                        description={experience.description}
                        skills={experience.skills}
                    />
                ))}
            </div>
            <TracingBeam className="px-6 hidden md:flex md:flex-col">
                <div className="flex flex-col gap-4">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
                </div>
            </TracingBeam>
        </section>
        </div>
    );
}