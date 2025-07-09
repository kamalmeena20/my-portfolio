import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/loader-animation.json"; // your Lottie file

const Loader = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete(); // Hide loader after 4 seconds
        }, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0e0e0e] transition-colors duration-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
            >
                {/* Center Content */}
                <motion.div
                    className="flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 10 }}
                        className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
                    >
                        <Lottie
                            animationData={animationData}
                            loop
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "transparent",
                            }}
                        />
                    </motion.div>


                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-extrabold text-center text-[#009E66] animate-pulse leading-snug"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Welcome to Kamal Meena’s Portfolio
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        className="text-xl text-center text-[#484848] dark:text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Just a moment... your next favorite developer is loading.
                    </motion.p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
