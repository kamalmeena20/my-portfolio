'use client';

import ScrollDownButton from "../ui/Scrollbutton";
import { DownloadIcon } from "lucide-react";
import Lottie from "lottie-react";
import devAnimation from "../../assets/animations/dev-animation.json";
import { motion } from "framer-motion"; // ✅ import motion

const HomePage = () => {
    return (
        <div className="relative flex w-full h-screen overflow-hidden transition-colors duration-300 bg-background">
            {/* Left: Content */}
            <div className="flex items-center w-1/2 h-full px-12">
                <div className="flex flex-col justify-items-center-safe h-[50%] w-full ml-16 -mt-10">

                    {/* ✅ Animated Hello with SVG underline */}
                    <h1 className="text-7xl lg:text-[150px] font-bold text-foreground leading-none relative">
                        <span className="relative inline-block">
                            Hello
                            <svg
                                viewBox="0 0 286 73"
                                fill="none"
                                className="absolute -left-2 -top-3 w-[220px] lg:w-[310px]"
                            >
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                                    stroke="#009E66"
                                    strokeWidth="2"
                                />
                            </svg>
                        </span>
                        <span className="text-[#009E66]">.</span>
                    </h1>

                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-19 mt-2 ml-3 h-[2px] bg-[#009E66]"></div>
                        <h2 className="text-3xl font-semibold text-foreground">
                            I am Kamal Meena
                        </h2>
                    </div>

                    <p className="mb-6 ml-2 text-lg text-muted-foreground">
                        Full Stack Web Developer
                    </p>

                    <button className="bg-[#009E66] text-white font-semibold ml-2 w-[200px] h-[40px] flex items-center justify-center gap-2 transition duration-200">
                        <DownloadIcon />
                        Download CV
                    </button>

                    <ScrollDownButton />
                </div>
            </div>

            {/* Right: Animation */}
            <div className="flex items-center justify-center">
                <Lottie
                    animationData={devAnimation}
                    loop
                    className="object-contain w-full h-full -mt-20"
                />
            </div>
        </div>
    );
};

export default HomePage;
