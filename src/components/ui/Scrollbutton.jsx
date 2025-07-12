"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollDownButton = () => {
    const [stretch, setStretch] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setStretch(scrollY > 10 && scrollY < 150);
            setHide(scrollY >= 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const nextSection = document.getElementById("about");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={` z-50 transition-all duration-[800ms] transform
                ${hide ? "scale-0 opacity-0" : "scale-100 opacity-100"}
            `}
        >
            {/* Slow pulse ping */}
            <div
                className={`absolute rounded-full bg-[#009E66] opacity-60 transition-all duration-[500ms]
                    ${stretch ? "w-30 h-20" : "w-10 h-10"}
                    animate-[ping_2s_ease-out_infinite]
                `}
            ></div>

            {/* Main Chevron Button */}
            <div
                className={`relative flex items-center justify-center rounded-full bg-[#009E66] text-white shadow-lg transition-all duration-[800ms]
                    ${stretch ? "w-10 h-20" : "w-10 h-10"}
                `}
            >
                <ChevronDown className="w-6 h-6" />
            </div>
        </button>
    );
};

export default ScrollDownButton;
