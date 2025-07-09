import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CertificateCard from "../../components/ui/Certificate-card";
import certificates from "../../data/certificateData";

import { ChevronLeft, ChevronRight } from "lucide-react";

const CertificatesSection = () => {
    const swiperRef = useRef(null);

    return (
        <section className="relative px-4 py-10 transition-colors duration-300 bg-background text-foreground">
            <div className="text-center">
                <h2 className="text-5xl font-bold lg:text-6xl">Certificates</h2>
                <div className="w-1 h-10 bg-[#009E66] mx-auto mt-4 mb-4" />
            </div>

            <div className="relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {certificates.map((cert) => (
                        <SwiperSlide key={cert.id}>
                            <CertificateCard cert={cert} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-[40%] left-0 z-10 p-2 bg-[#009E66] rounded-full hover:scale-105 transition-transform"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ChevronLeft className="text-white" />
                </button>
                <button
                    className="absolute top-[40%] right-0 z-10 p-2 bg-[#009E66] rounded-full hover:scale-105 transition-transform"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRight className="text-white" />
                </button>
            </div>
        </section>
    );
};

export default CertificatesSection;
