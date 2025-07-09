'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DarkModeToggle = () => {
    const [selected, setSelected] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setSelected(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const handleToggle = (mode) => {
        setSelected(mode);
        localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "dark");
    };

    return (
        <div className="fixed z-50 -translate-x-1/2 top-8 left-1/3">
            <div className="relative flex items-center rounded-full w-fit">
                <button
                    className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-300"
                        }`}
                    onClick={() => handleToggle("light")}
                >
                    <FiMoon className="relative z-10 text-lg md:text-sm" />
                    <span className="relative z-10">Light</span>
                </button>
                <button
                    className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"
                        }`}
                    onClick={() => handleToggle("dark")}
                >
                    <FiSun className="relative z-10 text-lg md:text-sm" />
                    <span className="relative z-10">Dark</span>
                </button>
                <div
                    className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
                        }`}
                >
                    <motion.span
                        layout
                        transition={{ type: "spring", damping: 15, stiffness: 250 }}
                        className="w-1/2 h-full rounded-full bg-[#009E66]"
                    />

                </div>
            </div>
        </div>
    );
};

export default DarkModeToggle;
