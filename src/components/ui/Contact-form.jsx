import { GlobeIcon, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        toast.promise(
            emailjs.sendForm(
                'service_ewfw0i9',        // ✅ your EmailJS Service ID
                'template_p8xhs98',       // ✅ your Template ID
                formRef.current,
                'M4hcDLgyDqRuB7ZtG'       // ✅ your Public Key
            ),
            {
                loading: 'Sending message...',
                success: () => {
                    setFormData({
                        from_name: '',
                        user_email: '',
                        subject: '',
                        message: ''
                    });
                    onClose();
                    return 'Message sent successfully!';
                },
                error: 'Failed to send. Try again later.'
            }
        ).finally(() => setLoading(false));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] transition-all duration-700 ease-in-out">

                {/* Mobile Info Card */}
                {isSmallScreen && !showForm ? (
                    <div className="w-full bg-[#009e66] text-white p-8 flex flex-col items-start justify-center space-y-6">
                        <h2 className="text-2xl font-bold">Let's get in touch</h2>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <div className="space-y-4 text-sm">
                            <InfoItem icon={<MapPin size={18} />} text="Sawai Madhopur, Rajasthan" />
                            <InfoItem icon={<PhoneCallIcon size={18} />} text="+91 9680477712" />
                            <InfoItem icon={<MailIcon size={18} />} text="officalkamalmeena2005@gmail.com" />
                            <InfoItem icon={<GlobeIcon size={18} />} text="yoursite.com" />
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
                        {/* Desktop Left Info */}
                        {!isSmallScreen && (
                            <div className="w-[40%] bg-[#009e66] text-white p-6 flex flex-col justify-center">
                                <h2 className="mb-2 text-2xl font-bold">Let's get in touch</h2>
                                <p className="mb-8">We're open for any suggestion or just to have a chat</p>
                                <div className="space-y-6 text-sm">
                                    <InfoItem icon={<MapPin size={18} />} text="Sawai Madhopur, Rajasthan" />
                                    <InfoItem icon={<PhoneCallIcon size={18} />} text="+91 9680477712" />
                                    <InfoItem icon={<MailIcon size={18} />} text="officalkamalmeena2005@gmail.com" />
                                    <InfoItem icon={<GlobeIcon size={18} />} text="yoursite.com" />
                                </div>
                            </div>
                        )}

                        {/* Form Section */}
                        <div className="w-full md:w-[60%] p-6 overflow-y-auto relative">
                            {isSmallScreen && (
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-4 left-4 text-[#009e66] font-bold text-xl"
                                >
                                    ←
                                </button>
                            )}

                            <div className="flex items-center justify-between mt-2 mb-6">
                                <h2 className="text-2xl font-bold">Get in touch</h2>
                                <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">×</button>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <InputField
                                        label="Full Name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                    />
                                    <InputField
                                        label="Email Address"
                                        name="user_email"
                                        type="email"
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                    />
                                </div>
                                <InputField
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                />
                                <div>
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        placeholder="Write your message..."
                                        className="w-full px-3 py-2 text-black border border-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-2 border border-[#009e66] text-[#009e66] hover:bg-[#009e66] hover:text-white transition"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Reusable Components
const InfoItem = ({ icon, text }) => (
    <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
            {icon}
        </div>
        <p>{text}</p>
    </div>
);

const InputField = ({ label, name, type = 'text', value, onChange, placeholder }) => (
    <div>
        <label className="block text-sm font-medium">{label}</label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    </div>
);

export default ContactForm;
