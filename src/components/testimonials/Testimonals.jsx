"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { testimonialData } from "../../data/testimonalData";
import TestimonialCard from "../../components/ui/Testimonal-card";

const TestimonialSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navReady, setNavReady] = useState(false);

    useEffect(() => {
        setNavReady(true); // Wait for refs to be ready before initializing Swiper
    }, []);

    return (
        <div className="relative w-full py-10">
            {/* Arrows (only on md+ screens) */}
            <div className="absolute left-0 right-0 z-10 items-center justify-between hidden px-4 -translate-y-1/2 md:flex top-1/2">
                <button
                    ref={prevRef}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#009E66] shadow hover:bg-gray-100"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#009E66] shadow hover:bg-gray-100"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Swiper */}
            {navReady && (
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={20}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        412: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        520: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        640: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                    }}
                >
                    {testimonialData.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <TestimonialCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default TestimonialSlider;
