import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialData } from "../../data/testimonalData";

const TestimonialSlider = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow - only visible on md and above */}
            <button
                onClick={scrollLeft}
                className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-[#009E66] rounded-full shadow hover:bg-gray-100"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Right Arrow - only visible on md and above */}
            <button
                onClick={scrollRight}
                className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-[#009E66] rounded-full shadow hover:bg-gray-100"
            >
                <ChevronRight size={20} />
            </button>

            {/* Scrollable testimonial cards */}
            <div
                ref={scrollRef}
                className="flex gap-4 px-6 overflow-x-auto scroll-smooth no-scrollbar"
            >
                {testimonialData.map((item, index) => (
                    <TestimonialCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
