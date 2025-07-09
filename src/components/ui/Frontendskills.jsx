"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiVite,
} from "react-icons/si";

import { cn } from "../../lib/utils";

export const Frontendskills = () => {
  const radius = 180;
  const size = 60;
  const padding = 40;

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    {
      Icon: FaJs,
      className: "bg-[#F7DF1E] text-black", // JavaScript
      name: "JavaScript",
    },
    {
      Icon: SiTypescript,
      className: "bg-[#3178C6] text-white",
      name: "TypeScript",
    },
    {
      Icon: FaReact,
      className: "bg-[#61DAFB] text-black",
      name: "React",
    },
    {
      Icon: SiNextdotjs,
      className: "bg-[#333333] text-white",
      name: "Next.js",
    },
    {
      Icon: SiTailwindcss,
      className: "bg-[#06B6D4] text-white",
      name: "Tailwind",
    },
    {
      Icon: SiRedux,
      className: "bg-[#764ABC] text-white",
      name: "Redux",
    },
    {
      Icon: SiFramer,
      className: "bg-[#EC5990] text-white",
      name: "Framer Motion",
    },
    {
      Icon: SiVite,
      className: "bg-[#646CFF] text-white",
      name: "Vite",
    },
  ];

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: radius * 2 + size + padding,
          height: radius * 2 + size + padding,
        }}
        className="relative rounded-full "
      >
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            const x = radius * Math.cos(toRadians(angle));
            const y = radius * Math.sin(toRadians(angle));

            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${size / 2}px + ${y}px)`,
                  left: `calc(50% - ${size / 2}px + ${x}px)`,
                  width: size,
                  height: size,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-md animate-spin-reverse",
                  logo.className
                )}
              >
                <logo.Icon className="w-6 h-6" />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-1/2 border-2 rounded-full shadow-inner h-1/2 bg-background border-border">
            <span className="px-4 text-2xl text-center sm:text-3xl text-foreground">
              FRONTEND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
