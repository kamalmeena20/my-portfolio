import React, { useState } from 'react';
import Clippath from "../../components/ui/Clippath";
import ContactForm from "../../components/ui/Contact-form";

const ContactPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <section className="flex flex-col items-center justify-center px-4 text-center transition-colors duration-300 min-h-fit bg-background text-foreground">
            <div className="mb-6">
                <p className="text-sm text-muted dark:text-muted">Get in Touch</p>
                <h1 className="text-4xl font-bold">Contact Me</h1>
            </div>
            {/* <div className='w-10 h-10 '></div> */}

            <button
                onClick={openForm}
                className="relative overflow-hidden px-8 py-3 font-medium text-[#009e66] border border-[#009e66] bg-transparent hover:bg-[#009e66] hover:text-white transition duration-300"
            >
                <span className="relative z-10">Get in Touch</span>

                {/* Beam scan line */}
                <span className="absolute top-0 left-[-150%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 animate-beam pointer-events-none" />
            </button>



            <Clippath />

            {/* Contact Form Modal */}
            <ContactForm isOpen={isFormOpen} onClose={closeForm} />
        </section>
    );
};

export default ContactPage;