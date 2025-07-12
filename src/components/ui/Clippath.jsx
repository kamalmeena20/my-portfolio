import React from "react";
import {
    FaEnvelope,
    FaLinkedin,
    FaWhatsapp,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaDiscord
} from "react-icons/fa";
import { SiTelegram, SiSnapchat } from "react-icons/si";

import { useAnimate } from "framer-motion";

const Clippath = () => {
    return (
        <>
            <div className="border border-[#009E66] divide-y divide-[#009E66] w-full max-w-6xl overflow-hidden m-8">
                {/* Row 1: 2 icons */}
                <div className="grid grid-cols-2 divide-x divide-[#009E66]">
                    <LinkBox Icon={FaEnvelope} href="mailto:officalkamalmeena2005@gmail.com" />
                    <LinkBox Icon={FaLinkedin} href="https://www.linkedin.com/in/kamal-meena-787706289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
                </div>

                {/* Row 2: 4 icons */}
                <div className="grid grid-cols-4 divide-x divide-[#009E66]">
                    <LinkBox Icon={FaWhatsapp} href="https://wa.me/919680477712" />
                    <LinkBox Icon={FaInstagram} href="https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ%3D%3D" />
                    <LinkBox Icon={SiSnapchat} href="https://www.snapchat.com/add/imradheee?share_id=DllHnMBDnPw&locale=en-US" />
                    <LinkBox Icon={FaTwitter} href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09" />
                </div>

                {/* Row 3: 3 icons (if crowded, you can skip Facebook) */}
                <div className="grid grid-cols-3 divide-x divide-[#009E66]">
                    <LinkBox Icon={SiTelegram} href="https:/t.me/radhesignin" />
                    <LinkBox Icon={FaDiscord} href="https://discord.com" />
                    {/* REMOVE FACEBOOK if needed */}
                    <LinkBox Icon={FaFacebook} href="https://facebook.com" />
                </div>
            </div>
            <p className="text-white w-full h-10 flex justify-center items-center text-md text-center bg-[#009e66]">
                © {new Date().getFullYear()} Kamal Meena. All rights reserved.
            </p>

        </>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e) => {
        const box = e.currentTarget.getBoundingClientRect();
        const sides = [
            { side: "left", proximity: Math.abs(box.left - e.clientX) },
            { side: "right", proximity: Math.abs(box.right - e.clientX) },
            { side: "top", proximity: Math.abs(box.top - e.clientY) },
            { side: "bottom", proximity: Math.abs(box.bottom - e.clientY) },
        ];
        return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
    };

    const handleMouseEnter = (e) => {
        const side = getNearestSide(e);
        animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
    };

    const handleMouseLeave = (e) => {
        const side = getNearestSide(e);
        animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
    };

    return (
        <a
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative grid w-full h-20 place-content-center sm:h-28 md:h-36"
        >
            <Icon className="z-10 text-xl sm:text-3xl lg:text-4xl text-foreground" />
            <div
                ref={scope}
                style={{ clipPath: BOTTOM_RIGHT_CLIP }}
                className="absolute inset-0 grid place-content-center bg-[#009E66] text-white z-0"
            >
                <Icon className="text-xl sm:text-3xl md:text-4xl" />
            </div>

        </a>

    );
};

export default Clippath;
