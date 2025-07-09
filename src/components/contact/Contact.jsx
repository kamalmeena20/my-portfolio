import {
    FaEnvelope,
    FaLinkedin,
    FaWhatsapp,
    FaGithub,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

const ContactPage = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center transition-colors duration-300 bg-background text-foreground">
            {/* Heading */}
            <div className="mb-6">
                <p className="text-sm text-muted dark:text-muted">Get in Touch</p>
                <h1 className="text-4xl font-bold">Contact Me</h1>
            </div>

            {/* Waitlist Input */}
            <div className="flex items-center w-full max-w-md p-1 mb-8 rounded-full shadow-md bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 text-white placeholder-gray-400 bg-transparent rounded-full focus:outline-none"
                />
                <button className="px-5 py-2 font-semibold transition rounded-full bg-muted-foreground">
                    Join Waitlist
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-2xl">
                <a href="mailto:example@email.com" aria-label="Email" className="hover:text-blue-600">
                    <FaEnvelope />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-500">
                    <FaLinkedin />
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-green-600 transition hover:scale-110">
                    <FaWhatsapp />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white">
                    <FaGithub />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-pink-500 transition hover:scale-110">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                </a>
            </div>
        </section>
    );
};

export default ContactPage;
