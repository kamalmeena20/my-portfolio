"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { X } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full overflow-x-hidden transition-colors duration-300">
            <nav className="fixed top-0 left-0 z-50 w-full bg-background">
                <div className="flex items-center justify-between w-full px-4 py-4 sm:px-6 md:px-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center space-x-1 xl:ml-10">
                        <div className="w-8 h-8 bg-[#009E66] rounded-full xxs:w-4 xxs:h-4"></div>
                        <span className="block text-lg font-semibold xxs:text-2xl md:text-xl text-foreground xsm:hidden">
                            Kamal
                        </span>
                        <span className="hidden text-lg font-semibold md:text-xl text-foreground xsm:inline">
                            Kamal Meena
                        </span>
                    </div>

                    {/* Desktop Tabs */}
                    <div className="hidden md:block">
                        <SlideTabs />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="text-foreground focus:outline-none"
                        >
                            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-40">
                        <div
                            className="absolute inset-0 backdrop-blur-sm bg-black/30 dark:bg-black/40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] z-50 rounded-xl p-4 space-y-3 shadow-xl bg-background dark:bg-[#1a1a1a] text-center relative">
                            <button
                                className="absolute top-1 right-10 text-2xl text-foreground hover:text-[#009e66] transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X />
                            </button>

                            <MobileLink href="#home" label="Home" onClick={() => setMobileMenuOpen(false)} />
                            <MobileLink href="#about" label="About" onClick={() => setMobileMenuOpen(false)} />
                            <MobileLink href="#skills" label="Skills" onClick={() => setMobileMenuOpen(false)} />
                            <MobileLink href="#projects" label="Projects" onClick={() => setMobileMenuOpen(false)} />
                            <MobileLink href="#certificate" label="Certificate" onClick={() => setMobileMenuOpen(false)} />
                            <MobileLink href="#contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

    return (
        <ul
            onMouseLeave={() =>
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }
            className="relative flex p-1 border rounded-full border-foreground mmd:bg-red-500"
        >
            <Tab to="#home" setPosition={setPosition}>Home</Tab>
            <Tab to="#about" setPosition={setPosition}>About</Tab>
            <Tab to="#skills" setPosition={setPosition}>Skills</Tab>
            <Tab to="#projects" setPosition={setPosition}>Projects</Tab>
            <Tab to="#certificate" setPosition={setPosition}>Certificate</Tab>
            <Tab to="#contact" setPosition={setPosition}>Contact</Tab>
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
            <a
                href={to}
                className="flex px-3 py-2 text-sm tracking-wide uppercase transition-colors text-foreground hover:text-[#009e66] md:px-3 md:py-2 md:text-base "
            >
                {children}
            </a>
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{ ...position }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute z-0 rounded-full h-7 md:h-12 bg-primary"
        />
    );
};

const MobileLink = ({ href, label, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="block w-full px-4 py-2 text-base font-medium text-foreground hover:text-[#009e66] transition"
    >
        {label}
    </a>
);

export default Navbar;
