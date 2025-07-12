"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard from "../../components/ui/Testimonal-card";
import { testimonialData } from "../../data/testimonalData";

const Testimonials = () => {
    return (
        <div className="relative px-4 py-10 transition-colors duration-300 sm:px-6 md:px-8 bg-background text-foreground">
            {/* Heading */}
            <div className="flex flex-col items-center mb-6 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Testimonials</h2>
                <div className="w-12 h-1 mt-2 bg-[#009E66] rounded-full"></div>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay]}
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
        </div>
    );
};

export default Testimonials;
