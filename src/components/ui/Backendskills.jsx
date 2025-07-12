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
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;

  let radius = 130;
  let size = 50;
  let padding = 30;

  if (screenWidth <= 320) {
    radius = 110;
    size = 30;
    padding = 20;
  } else if (screenWidth <= 412) {
    radius = 115;
    size = 30;
    padding = 40;
  } else if (screenWidth <= 520) {
    radius = 115;
    size = 30;
    padding = 40;
  }

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
          <div className="flex items-center justify-center xxs:w-[100px] xxs:h-[100px]  xs:w-[120px] xs:h-[120px]   border-2 rounded-full shadow-inner  ">
            <span className=" text-xl text-center xxs:font-semibold tracking-wider xxs:text-[15px] xs:text-lg sm:text-xl text-foreground">
              BACKEND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
