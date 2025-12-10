import React from "react";
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/Projects.constants"; // Import the projects array

const Projects: React.FC = () => {
    const wipFF = false;

    return (
        <section>
            <div className="container py-10">
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-4xl">Projects</h1>
                    {wipFF ? (
                        <Carousel interval={3000}>
                            {projects.map((project, index) => (
                                <CarouselSlide key={index}>
                                    <ProjectCard
                                        title={project.title}
                                        image={project.image}
                                        repoUrl={project.repoUrl}
                                    />
                                </CarouselSlide>
                            ))}
                        </Carousel>
                    ) : (
                        <a
                            href="https://github.com/deepdiveduck?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded px-4 py-4 font-medium transition-all w-fit bg-indigo-600 text-white hover:bg-indigo-700 shadow"
                        >
                            View Project Repositories
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
