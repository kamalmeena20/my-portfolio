import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CertificateCard from "../../components/ui/Certificate-card";
import certificates from "../../data/certificateData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CertificatesSection = () => {
    const swiperRef = useRef(null);

    return (
        <section className="relative px-4 py-10 transition-colors duration-300 bg-background text-foreground">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold sm:text-4xl lg:text-6xl">Certificates</h2>
                <div className="w-1 h-10 mx-auto mt-2 mb-1 bg-[#009E66]" />
            </div>

            <div className="relative max-w-[1400px] mx-auto">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        412: { slidesPerView: 1.2 },
                        520: { slidesPerView: 1.4 },
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {certificates.map((cert) => (
                        <SwiperSlide key={cert.id}>
                            <CertificateCard cert={cert} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons (Only on lg and up) */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="hidden lg:flex absolute left-0 top-[40%] z-10 p-2 bg-[#009E66] rounded-full hover:scale-105 transition-transform shadow-md"
                >
                    <ChevronLeft className="text-white" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="hidden lg:flex absolute right-0 top-[40%] z-10 p-2 bg-[#009E66] rounded-full hover:scale-105 transition-transform shadow-md"
                >
                    <ChevronRight className="text-white" />
                </button>
            </div>
        </section>
    );
};

export default CertificatesSection;
