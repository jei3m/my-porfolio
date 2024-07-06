import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d} from './custom/project-card-3d'; // Importing ProjectCardProps interface if available
import Head from "next/head";

export default function Projects() {
    return (
        <div className="flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>   
         */}
        <section id="projects" className="flex flex-col items-center justify-center">
        
        

            
            
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
                </Head>

            <br/><br/><br/>
            <h2 style={{ fontFamily: "'DM Serif Display', serif" }} className="scroll-m-20 font-bold tracking-tight lg:text-5xl bg-clip-text text-white z-20">
                Projects Done
            </h2>
            <div className="flex-wrap flex justify-center gap-x-10 row-gap-2 max-w-screen-lg">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.title}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <div className="mb-0"> {/* Example of wrapping with a container */}
                            <ProjectCard3d
                                title={project.title}
                                type={project.type}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                githubUrl={project.githubUrl}
                                demoUrl={project.demoUrl}
                                skills={project.skills}
                            />
                        </div>
                    </Reveal>
                ))}
            </div>
           
        </section>
        </div>
    );
}
