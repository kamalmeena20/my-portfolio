"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full transition-colors duration-300 bg-background">
            <nav className="w-full px-4 py-4">
                <div className="flex items-center justify-between w-full px-8">
                    {/* Logo */}
                    <div className="flex items-center ml-16 space-x-2">
                        <div className="w-10 h-10 bg-[#009E66] rounded-lg"></div>
                        <span className="text-xl font-semibold text-foreground">
                            Kamal
                        </span>
                    </div>

                    {/* Tabs */}
                    <SlideTabs />
                </div>
            </nav>
        </div>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() =>
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }
            className="relative flex p-1 rounded-full border-[1px] border-black dark:border-white"
        >
            <Tab to="/" setPosition={setPosition}>Home</Tab>
            <Tab to="/about" setPosition={setPosition}>About</Tab>
            <Tab to="/services" setPosition={setPosition}>Services</Tab>
            <Tab to="/skills" setPosition={setPosition}>Skills</Tab>
            <Tab to="/projects" setPosition={setPosition}>Projects</Tab>
            <Tab to="/contact" setPosition={setPosition}>Contact</Tab>
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition, to }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;
                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10"
        >
            <Link
                to={to}
                className="block px-3 py-1 text-xs tracking-wide uppercase transition-colors text-foreground hover:text-primary-foreground md:px-5 md:py-3 md:text-base"
            >
                {children}
            </Link>
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{ ...position }}
            className="absolute z-0 transition-colors rounded-full h-7 md:h-12 bg-primary"
        />
    );
};

export default Navbar;
