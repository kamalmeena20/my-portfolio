import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const ProjectCard = ({ project, index }) => {
    return (
        <div className="w-full">
            <div
                className={`flex flex-col-reverse lg:flex-row items-center gap-8 w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 mx-auto border rounded-2xl bg-white dark:bg-[#333333] shadow-lg
        ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >


                {/* Project Info */}
                <div className="flex-1 max-h-full pr-2 space-y-4 overflow-auto xxs:space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white xxs:text-xl">{project.title}</h2>
                    <h3 className="text-lg text-[#484848] dark:text-gray-400 xxs:text-sm ">{project.subtitle}</h3>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 xxs:text-sm">
                        {project.description}
                    </p>

                    <div>
                        <h4 className="mb-2 text-md font-semibold text-[#009E66] dark:text-[#009E66] xxs:text-md">
                            Key Features:
                        </h4>
                        <ul className="space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400 xxs:text-sm">
                            {project.highlights.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className=" flex text-center justify-center items-center px-3 py-1 text-sm font-medium text-white bg-[#009E66] rounded-full dark:bg-[#009E66] xxs:text-[12px]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 text-white transition bg-[#009E66]  hover:scale-105 duration-200"
                            >
                                View Live
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 text-[#009E66] transition border border-[#009E66] hover:bg-[#009E66] hover:text-white hover:scale-105 duration-200"
                            >
                                GitHub
                            </a>
                        )}
                    </div>

                </div>

                {/* Laptop Mockup with Image Slider */}
                {/* <div className="flex justify-center w-full bg-red-500"> */}
                <div className="w-full aspect-video max-w-[420px] rounded-lg overflow-hidden dark:bg-[#1f2937] shadow-md">

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        className="w-full h-full "
                    >
                        {project.images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="flex items-center justify-center w-full h-full ">
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${idx}`}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* </div> */}


            </div>
        </div>
    );
};

export default ProjectCard;
