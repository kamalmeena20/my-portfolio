'use client';

import ScrollDownButton from "../ui/Scrollbutton";
import { DownloadIcon } from "lucide-react";
import Lottie from "lottie-react";
import devAnimation from "../../assets/animations/dev-animation.json";
import { motion } from "framer-motion";
import DarkMode from "../theme/DarkMode";
import KAMALMEENA from '../../assets/certificats/KAMALMEENA.pdf';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const HomePage = () => {
    return (
        <div className="relative flex flex-col-reverse w-full min-h-screen overflow-hidden transition-colors duration-300 lg:flex-row bg-background">
            {/* Left Content */}
            <DarkMode />
            <div className="relative flex flex-col items-start justify-center w-full px-6 py-10 ml-4 lg:w-1/2 sm:px-10 md:px-10 lg:py-0 md:py-8 md:justify-center">

                {/* Dark Mode Button for small screens */}
                <div className="absolute z-50 block top-4 right-4 md:hidden">
                    <DarkMode />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="w-full"
                >
                    {/* ✅ Animated Hello with SVG underline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="flex text-[38px] sm:text-[46px] md:text-[150px] lg:text-[150px] font-bold text-foreground leading-none relative xxs:text-7xl xs:text-8xl xsm:text-9xl"
                    >
                        <span className="relative inline-block">
                            Hello
                            <svg
                                viewBox="0 0 286 73"
                                fill="none"
                                className="absolute xs:w-[200px] -left-2 -top-3 w-[160px] sm:w-[220px] lg:w-[310px] xsm:w-[255px] xsm:-top-4 md:-w-[800px] "
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
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center mt-6 mb-2 xxs:mt-0"
                    >
                        <div className="w-10 h-1 xxs:h-0.5 mt-1 bg-[#009E66] rotate-[180deg]" />
                        <h2 className="ml-4 text-xl font-semibold xxs:ml-2 xxs:text-md xxs:font-normal sm:text-2xl md:text-3xl text-foreground">
                            I am Kamal Meena
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="mb-6 ml-1 text-sm sm:text-base md:text-lg text-muted-foreground"
                    >
                        Full Stack Web Developer
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-between mt-2"
                    >
                        {/* Download CV */}
                        <a
                            href={KAMALMEENA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#009E66] text-white ml-1 xl:w-[200px] h-[50px] flex items-center justify-center gap-2 transition duration-200 xxs:w-[150px] xxs:text-xs xl:text-[15px] tracking-wide font-semibold"
                        >
                            <DownloadIcon className="xl:h-10 xl:w-15 xxs:h-5 xxs:w-5" />
                            <span className="block xxs:hidden sm:inline">Download Resume</span>
                            <span className="hidden xxs:inline sm:hidden">Resume</span>
                        </a>


                        {/* Scroll Down Button */}
                        <div className="w-fit">
                            <ScrollDownButton className="xxs:h-5 xxs:w-5" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-start justify-start w-full lg:w-1/2 md:pt-4 md:pb-2 md:px-4 md:h-auto"
            >
                <Lottie
                    animationData={devAnimation}
                    loop
                    className="w-[90%] sm:w-[75%] md:w-[95%] lg:w-full"
                />
            </motion.div>

        </div>
    );
};

export default HomePage;
