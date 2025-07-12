import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="relative w-full max-w-4xl p-4 sm:p-6 border rounded-xl border-[#009e66] bg-background shadow-md flex flex-col gap-4">

            {/* Top Section: Logo + Links (always on top in small screens) */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                {/* Logo */}
                {experience.logo && (
                    <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                    />
                )}

                {/* Website & LinkedIn */}
                <div className="flex items-center gap-3 ml-auto sm:gap-4">
                    {experience.website && (
                        <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
                        >
                            <ExternalLink size={14} /> Visit Site
                        </a>
                    )}
                    {experience.linkedin && (
                        <a
                            href={experience.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-[#0077b5] transition"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Company Name + Role/Duration */}
            <div className="flex flex-col gap-1 text-left">
                <h3 className="text-lg font-semibold sm:text-xl text-primary">
                    {experience.company}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                    {experience.role} | {experience.duration}
                </p>
            </div>

            {/* Description List */}
            <ul className="flex flex-col items-start ml-4 space-y-1 text-sm tracking-wide list-disc text-foreground sm:text-base xxs:text-start xs:text-start">
                {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap justify-start gap-2 mt-4">
                {experience.tech.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-[#009e66]/10 text-primary border border-[#009e66]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
