import React from 'react';
import ProjectCard from '../../components/ui/Project-card';
import { projectsData } from '../../data/projectData';

const Projects = () => {
    return (
        <section className="relative flex flex-col w-full h-screen bg-background">
            {/* Section Header */}
            <div className="sticky top-0 z-10 flex flex-col items-center mb-6 text-center dark:bg-black/60 backdrop-blur-md">
                <p className="text-sm tracking-wider uppercase text-muted-foreground">
                    Featured Projects
                </p>
                <h2 className="text-5xl font-bold dark:text-white lg:text-6xl">
                    My Work
                </h2>
                <div className="w-1 h-10 mt-3 bg-[#009E66]"></div>
            </div>

            {/* Scrollable Project Cards */}
            <div
                className="flex-col flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
            >
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className="flex items-center justify-center px-4 py-6 snap-start"
                    >
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Projects;
