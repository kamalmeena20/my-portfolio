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
        <div className="relative px-8 py-10 transition-colors duration-300 bg-background text-foreground">
            <div className="flex flex-col items-center mb-4 text-center">
                <h2 className="text-5xl font-bold lg:text-6xl">Testimonials</h2>
                <div className="w-1 h-15 bg-[#000] mt-2"></div>
            </div>
            <div className="ml-8">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                >
                    {testimonialData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
        // </div>
    );
};

export default Testimonials;
