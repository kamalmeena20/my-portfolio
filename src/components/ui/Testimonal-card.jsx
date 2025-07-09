import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const TestimonialCard = ({ name, position, description, image, linkedin, email }) => {
    return (
        <div className="bg-[#009E66] relative rounded-lg shadow-md w-[400px] shrink-0 p-4 flex flex-col justify-between h-[200px]">
            {/* Social Icons in Top Right */}
            <div className="absolute flex space-x-2 top-3 right-6">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-200 rounded-full bg-white/20 hover:bg-white/30"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={16} />
                    </a>
                )}

                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="p-2 text-white transition duration-200 rounded-full bg-white/20 hover:bg-white/30"
                        title="Email"
                    >
                        <FaEnvelope size={16} />
                    </a>
                )}
            </div>

            {/* Main Content */}
            <div>
                <div className="flex items-center mb-4">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-12 h-12 mr-4 border border-white rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-white">{name}</h4>
                        <p className="text-sm tracking-wide text-gray-300">{position}</p>
                    </div>
                </div>
                <p className="text-sm text-white">{description}x</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
