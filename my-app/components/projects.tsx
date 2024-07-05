import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d, ProjectCardProps } from './custom/project-card-3d'; // Importing ProjectCardProps interface if available

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.2]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <br/><br/><br/>
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
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
    );
}
