import React from "react";

const CertificateCard = ({ cert }) => {
    return (
        <div className="relative group w-full max-w-md mx-auto rounded-xl overflow-hidden border-2 border-[#009e66]">
            <img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full 
                           h-44         // phones
                           sm:h-48      // tablets
                           md:h-52      // mid devices
                           lg:h-60      // laptops & up
                           xl:h-60"     // keep same height for xl
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity opacity-0 bg-background/70 group-hover:opacity-100">
                <h3 className="mb-2 text-base font-semibold text-center text-foreground sm:text-lg">
                    {cert.title}
                </h3>
                <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold tracking-wide text-white transition bg-[#009E66] hover:opacity-90"
                >
                    View Certificate
                </a>
            </div>
        </div>
    );
};

export default CertificateCard;
