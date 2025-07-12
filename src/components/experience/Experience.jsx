import React from "react";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "../../components/ui/Experience-card";

const Experience = () => {
    return (
        <section id="experience" className="flex px-4 py-16 bg-background text-foreground">
            <div className="w-full max-w-6xl mx-auto text-center">
                <p className="text-sm tracking-widest uppercase text-muted-foreground">
                    Career Journey
                </p>
                <h2 className="mb-12 text-4xl font-bold sm:text-5xl lg:text-6xl">Experience</h2>

                {/* Full-width red div with responsive layout */}
                <div
                    className="
                        w-full
                        bg-red-500 
                        flex flex-col lg:flex-row 
                        gap-6 
                        max-h-[75vh] 
                        overflow-y-auto 
                        lg:overflow-visible 
                        scrollbar-hide
                        snap-y snap-mandatory
                    " style={{ scrollbarWidth: "none" }}
                >
                    {experienceData.map((exp) => (
                        <div
                            key={exp.id}
                            className="flex justify-center w-full lg:w-1/2 snap-start"
                        >
                            <ExperienceCard experience={exp} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
