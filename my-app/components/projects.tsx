import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d } from './custom/project-card-3d';

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center sm:py-32 py-16">
            
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Projects Done
            </h2>
            <div className="flex-wrap flex justify-center gap-10 max-w-screen-lg">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.title}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <ProjectCard3d
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            githubUrl={project.githubUrl}
                            demoUrl={project.demoUrl}
                            skills={project.skills}
                        />
                    </Reveal>
                ))}
            </div>
            
        </section>
    );
}
