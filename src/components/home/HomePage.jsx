'use client';

import ScrollDownButton from "../ui/Scrollbutton";
import { DownloadIcon } from "lucide-react";
import Lottie from "lottie-react";
import devAnimation from "../../assets/animations/dev-animation.json";
import { motion } from "framer-motion";
import DarkMode from "../theme/DarkMode";
import DarkModeToggle from "../theme/DarkMode";

const HomePage = () => {
    return (
        <div className="relative flex flex-col-reverse w-full min-h-screen overflow-hidden transition-colors duration-300 lg:flex-row bg-background">
            {/* Left Content */}
            <DarkMode />
            <div className="relative flex flex-col items-start justify-center w-full px-6 py-10 lg:w-1/2 sm:px-10 md:px-16 lg:py-0">
                {/* Dark Mode Button for small screens */}
                <div className="absolute z-50 block top-4 right-4 md:hidden">
                    <DarkMode />
                </div>

                <div className="w-full mb-8">
                    {/* ✅ Animated Hello with SVG underline */}
                    <h1 className=" flex text-[38px] sm:text-[46px] md:text-[56px] lg:text-[150px] font-bold text-foreground leading-none relative xxs:text-7xl xs:text-8xl xsm:text-9xl">
                        <span className="relative inline-block">
                            Hello
                            <svg
                                viewBox="0 0 286 73"
                                fill="none"
                                className="absolute xs:w-[200px] -left-2 -top-3 w-[160px] sm:w-[220px] lg:w-[310px] xsm:w-[255px] xsm:-top-4"
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

                    <div className="flex items-center mt-6 mb-2 xxs:mt-0 ">
                        <div className="w-10 h-1 xxs:h-0.5 mt-1 bg-[#009E66] rotate-[180deg] " />
                        <h2 className="ml-4 text-xl font-semibold xxs:ml-2 xxs:text-md xxs:font-normal sm:text-2xl md:text-3xl text-foreground">
                            I am Kamal Meena
                        </h2>
                    </div>

                    <p className="mb-6 ml-1 text-sm sm:text-base md:text-lg text-muted-foreground">
                        Full Stack Web Developer
                    </p>

                    <div className="flex justify-between mt-2">
                        <button className="bg-[#009E66] text-white font-semibold ml-1 w-[200px] h-[40px] flex items-center justify-center gap-2 transition duration-200 xxs:w-[150px] xxs:text-xs">
                            <DownloadIcon className="xxs:h-5 xxs:w-5" />
                            Download CV
                        </button>

                        <div className="w-fit">
                            <ScrollDownButton className="xxs:h-5 xxs:w-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full px-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto lg:w-full lg:px-10 lg:pb-0  ">

                <Lottie
                    animationData={devAnimation}
                    loop
                    className="w-[90%] xxs:w-[100%] sm:w-[75%] md:w-[65%] lg:w-full "
                />
            </div>
        </div>
    );
};

export default HomePage;