"use client";

import React from "react";
import {
  FaNodeJs,
  FaCubes,     
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiPython
} from "react-icons/si";
import { cn } from "../../lib/utils";

export const BackendSkills = () => {
  const radius = 180;
  const size = 60;
  const padding = 40;

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    {
      Icon: FaNodeJs,
      className: "bg-[#339933] text-white", // Node.js green
      name: "Node.js",
    },
    {
      Icon: SiExpress,
      className: "bg-[#333333] text-white", // Express black
      name: "Express.js",
    },
    {
      Icon: SiMongodb,
      className: "bg-[#47A248] text-white", // MongoDB green
      name: "MongoDB",
    },
    {
      Icon: SiMysql,
      className: "bg-[#00758F] text-white", // MySQL blue
      name: "MySQL",
    },
    {
      Icon: SiPrisma,
      className: "bg-[#2D3748] text-white", // Prisma dark gray
      name: "Prisma",
    },
    {
      Icon: FaCubes,
      className: "bg-[#5B3DF5] text-white", // Approx for ConvexDB (not official, placeholder indigo)
      name: "ConvexDB",
    },
    {
      Icon: SiPython,
      className: "bg-[#3776AB] text-white", // Python blue
      name: "Python",
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
                  "absolute flex items-center justify-center rounded-full shadow-md   animate-spin-reverse",
                  logo.className
                )}
              >
                <logo.Icon className="w-6 h-6" />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-1/2 border-2 rounded-full shadow-inner h-1/2 ">
            <span className="px-4 text-2xl text-center sm:text-3xl text-foreground">
              BACKEND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
