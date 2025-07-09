import React from "react";

const CertificateCard = ({ cert }) => {
    return (
        <div className="relative group w-[400px] mx-auto rounded-xl overflow-hidden">
            <img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full transition duration-300 h-60 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 transition opacity-0 bg-background/70 group-hover:opacity-100">
                <h3 className="mb-2 text-lg font-bold text-foreground">{cert.title}</h3>
                <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#009E66] text-white px-4 py-2 text-sm font-semibold rounded-lg tracking-wide hover:opacity-90 transition"
                >
                    View Certificate
                </a>
            </div>
        </div>
    );
};

export default CertificateCard;
