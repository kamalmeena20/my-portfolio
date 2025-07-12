import React, { useEffect } from "react";
// import '../../assets/fonts.css'
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/loader-animation.json";

const Loader = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center px-4 text-center bg-[#0e0e0e]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
            >
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 10 }}
                        className="w-[220px] h-[220px] xxs:w-[260px] xxs:h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]"
                    >
                        <Lottie
                            animationData={animationData}
                            loop
                            style={{ width: "100%", height: "100%" }}
                        />
                    </motion.div>

                    <motion.h1
                        className="loder-class text-2xl xxs:text-3xl  sm:text-4xl text-[#009E66] leading-snug"

                    >
                        Kamal Meena
                    </motion.h1>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
