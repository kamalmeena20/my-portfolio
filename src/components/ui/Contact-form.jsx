import { GlobeIcon, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setIsSmallScreen(width < 768); // Flip only below md
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] transition-all duration-700 ease-in-out">

                {/* === Flip Mode: Mobile Screen Only === */}
                {isSmallScreen && !showForm ? (
                    <div className="w-full bg-[#009e66] text-white p-8 flex flex-col items-start justify-center space-y-6">
                        <h2 className="mb-2 text-2xl font-bold">Let's get in touch</h2>
                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                    <MapPin size={18} />
                                </div>
                                <p>Address: Sawai Madhopur, Rajasthan</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                    <PhoneCallIcon size={18} />
                                </div>
                                <p>Phone: +91 9680477712</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                    <MailIcon size={18} />
                                </div>
                                <p>Email: officalkamalmeena2005@gmail.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                    <GlobeIcon size={18} />
                                </div>
                                <p>Website: yoursite.com</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowForm(true)}
                            className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-[#009e66] transition"
                        >
                            Send Message
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col w-full md:flex-row">
                        {/* Green Left Section for md+ only */}
                        {!isSmallScreen && (
                            <div className="w-[40%] bg-[#009e66] text-white p-6 flex flex-col justify-center">
                                <h2 className="mb-2 text-2xl font-bold">Let's get in touch</h2>
                                <p className="mb-8">We're open for any suggestion or just to have a chat</p>
                                <div className="space-y-6 text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                            <MapPin size={18} />
                                        </div>
                                        <p>Address: Sawai Madhopur, Rajasthan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                            <PhoneCallIcon size={18} />
                                        </div>
                                        <p>Phone: +91 9680477712</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                            <MailIcon size={18} />
                                        </div>
                                        <p>Email: officalkamalmeena2005@gmail.com</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                                            <GlobeIcon size={18} />
                                        </div>
                                        <p>Website: yoursite.com</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Form Section */}
                        <div className="w-full md:w-[60%] p-6 overflow-y-auto relative">
                            {/* Back Arrow for mobile */}
                            {isSmallScreen && (
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-4 left-4 text-[#009e66] font-bold text-xl"
                                    title="Back"
                                >
                                    ←
                                </button>
                            )}

                            <div className="flex items-center justify-between mt-2 mb-6">
                                <h2 className="text-2xl font-bold">Get in touch</h2>
                                <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">×</button>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium">Full Name</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Name"
                                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Subject</label>
                                    <input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        placeholder="Write your message..."
                                        className="w-full px-3 py-2 border border-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-[#009e66] text-[#009e66] hover:bg-[#009e66] hover:text-white transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
