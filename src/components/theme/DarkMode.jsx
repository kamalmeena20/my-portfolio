'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const darkMode = savedTheme === 'dark';
        setIsDark(darkMode);
        document.documentElement.classList.toggle('dark', darkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', !isDark);
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="z-50 fixed md:block top-20 right-1 -translate-x-1/2 p-2 transition-colors rounded-full shadow-lg  dark:bg-[#282828]"
        >
            {isDark ? (
                <FiSun className="text-white xxs:text-md lg:text-xl" />
            ) : (
                <FiMoon className="text-black lg:text-xl xxs:text-md" />
            )}
        </button>
    );
};

export default DarkModeToggle;
