import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TestimonialCard = ({ name, position, description, image, linkedin, email }) => {
    return (
        <div className="relative w-full max-w-sm sm:max-w-md lg:w-[400px] p-4 rounded-lg bg-[#009E66] shadow-md flex flex-col justify-between h-[220px] sm:h-[200px] shrink-0">
            {/* Social Icons */}
            <div className="absolute flex space-x-2 top-3 right-4">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition rounded-full bg-white/20 hover:bg-white/30"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={16} />
                    </a>
                )}
                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="p-2 text-white transition rounded-full bg-white/20 hover:bg-white/30"
                        title="Email"
                    >
                        <FaEnvelope size={16} />
                    </a>
                )}
            </div>

            {/* Profile + Text */}
            <div>
                <div className="flex items-center mb-3">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-10 h-10 mr-3 border border-white rounded-full sm:w-12 sm:h-12"
                    />
                    <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">{name}</h4>
                        <p className="text-[12px] sm:text-sm text-gray-300 tracking-wide">{position}</p>
                    </div>
                </div>
                <p className="text-white text-[13px] sm:text-sm">{description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
