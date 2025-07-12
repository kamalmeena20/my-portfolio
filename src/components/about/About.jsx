import { DownloadIcon } from "lucide-react";
import profileImg from '../../assets/images/profileimg.jpg';
import { useState } from "react";

const AboutPage = () => {
    const [showFullText, setShowFullText] = useState(false);

    const fullText = `
    Crafting innovative UI/UX designs that merge creativity with functionality.
    Skilled in Figma and Adobe XD, I create seamless, user-friendly interfaces.
    Focused on enhancing collaboration and delivering impactful, intuitive design
    solutions. Let's connect to build exceptional user experiences!
    I continuously refine designs through user feedback and accessibility guidelines
    to ensure each project serves its audience effectively and creatively.
  `;

    const maxChars = 280; // Adjust based on layout

    const displayedText = showFullText ? fullText : fullText.slice(0, maxChars);


    return (
        <section
            id="about"
            className="flex justify-center min-h-screen px-4 py-12 transition-colors duration-300 bg-background text-foreground xxs:px-2 xs:px-4 xsm:px-5 sm:px-6 lg:px-12"
        >
            <div className="flex flex-col items-center justify-center w-full">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <p className="text-xs xxs:text-[10px] xs:text-sm tracking-wider uppercase text-muted-foreground">
                        About Me & My Education
                    </p>
                    <h2 className="text-3xl font-bold xxs:text-3xl xs:text-3xl xsm:text-4xl sm:text-5xl lg:text-6xl">Who am I?</h2>
                    <div className="w-1 h-8 xxs:h-10 bg-[#009E66] mx-auto -mb-8 mt-2" />
                </div>

                <div className="flex flex-col w-full gap-10 lg:flex-row max-w-7xl">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative w-[220px] h-[320px] xxs:w-[200px] xxs:h-[300px] xs:w-[240px] xs:h-[340px] xsm:w-[260px] xsm:h-[360px] sm:w-[320px] sm:h-[440px] md:w-[350px] md:h-[480px] lg:w-[370px] lg:h-[500px] rounded-[500px] border-2 border-[#009E66] overflow-hidden">
                            <img
                                src={profileImg}
                                alt="Kamal Meena"
                                className="object-cover object-top w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-[586px] flex flex-col justify-center items-start xxs:px-2 xs:px-4 sm:px-4">
                        <h3 className="text-[#009E66] text-base xxs:text-md xs:text-base sm:text-xl font-normal mb-4">About me</h3>
                        <h4 className="mb-4 text-xl font-semibold xxs:text-xl xs:text-xl sm:text-3xl">Kamal Meena</h4>
                        <p className="mb-6 text-sm leading-relaxed xxs:text-sm xs:text-sm sm:text-lg text-muted-foreground">
                            {displayedText}
                            {!showFullText && fullText.length > maxChars && "... "}
                            {fullText.length > maxChars && (
                                <button
                                    className="ml-1 text-[#009E66]  text-sm font-medium"
                                    onClick={() => setShowFullText(!showFullText)}
                                >
                                    {showFullText ? "Show less" : "Read more"}
                                </button>
                            )}
                        </p>

                        {/* Contact Details Grid */}
                        <div className="grid w-full grid-cols-1 gap-4 mb-6 sm:gap-6 md:grid-cols-2">
                            <div className="p-3 xxs:p-2 bg-secondary">
                                <h5 className="mb-1 text-xs font-medium text-muted-foreground">Name</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">Kamal Meena</p>
                            </div>
                            <div className="p-3 xxs:p-2 bg-secondary">
                                <h5 className="mb-1 text-xs font-medium text-muted-foreground">Email</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">
                                    officialkamalmeena2005@gmail.com
                                </p>
                            </div>
                            <div className="p-3 xxs:p-2 bg-secondary">
                                <h5 className="mb-1 text-xs font-medium text-muted-foreground">Address</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">
                                    Sawai Madhopur (Rajasthan)
                                </p>
                            </div>
                            <div className="p-3 xxs:p-2 bg-secondary">
                                <h5 className="mb-1 text-xs font-medium text-muted-foreground">Phone no.</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">+91 9680477712</p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="w-full p-3 mb-4 xxs:p-2 bg-secondary">
                            <h5 className="mb-1 text-xs font-medium text-muted-foreground">Education</h5>
                            <p className="text-sm font-medium tracking-wider text-foreground">
                                Indian Institute of Information Technology, Vadodara – ICD
                            </p>
                            <p className="text-sm font-medium tracking-wider text-foreground">
                                Batch: 2022 – Present
                            </p>
                        </div>

                        {/* Download CV Button */}
                        <a
                            href="/Kamal_Meena_CV.pdf"
                            download
                            className="bg-[#009E66] text-white font-semibold mt-2 px-6 py-2 sm:px-8 sm:py-3 transition-colors duration-200 flex items-center space-x-2 hover:bg-[#007f53]"
                        >
                            <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
