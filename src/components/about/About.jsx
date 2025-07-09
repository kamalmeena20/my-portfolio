import { DownloadIcon } from "lucide-react";
import profileImg from '../../assets/images/profileimg.jpg';

const AboutPage = () => {
    return (
        <section id="about" className="min-h-screen transition-colors duration-300 bg-background text-foreground">
            <div className="flex flex-col items-center justify-center w-full px-4">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-4 text-center">
                    <p className="text-sm tracking-wider uppercase text-muted-foreground">About Me & My Education</p>
                    <h2 className="text-5xl font-bold lg:text-6xl">Who am I?</h2>
                    <div className="w-1 h-15 bg-[#009E66] mt-2"></div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row">
                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-[370px] h-[500px] rounded-[500px] border-2 border-[#009E66] overflow-hidden">
                            <img
                                src={profileImg}
                                alt="Kamal Meena"
                                className="object-cover object-top w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-[586px] flex flex-col justify-center items-start ml-4">
                        <h3 className="text-[#009E66] text-xl font-semibold mb-4">About me</h3>
                        <h4 className="mb-4 text-3xl font-bold">Kamal Meena</h4>

                        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                            Crafting innovative UI/UX designs that merge creativity with functionality.
                            Skilled in Figma and Adobe XD, I create seamless, user-friendly interfaces.
                            Focused on enhancing collaboration and delivering impactful, intuitive design
                            solutions. Let's connect to build exceptional user experiences!
                        </p>

                        {/* Contact Details Grid */}
                        <div className="grid w-full grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                            <div className="p-4 rounded bg-secondary">
                                <h5 className="mb-1 text-sm font-medium text-muted-foreground">Name</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">Kamal Meena</p>
                            </div>

                            <div className="p-4 bg-secondary">
                                <h5 className="mb-1 text-sm font-medium text-muted-foreground">Email</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">officialkamalmeena2005@gmail.com</p>
                            </div>

                            <div className="p-4 bg-secondary">
                                <h5 className="mb-1 text-sm font-medium text-muted-foreground">Address</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">Sawai Madhopur (Rajasthan)</p>
                            </div>

                            <div className="p-4 bg-secondary">
                                <h5 className="mb-1 text-sm font-medium text-muted-foreground">Phone no.</h5>
                                <p className="text-sm font-medium tracking-wide text-foreground">+91 9680477712</p>
                            </div>
                        </div>
                        <div className="w-full p-4 mb-2 bg-secondary">
                            <h5 className="mb-1 text-sm font-medium text-muted-foreground">Education</h5>
                            <p className="text-sm font-medium tracking-wider text-foreground">
                                Indian Institute of Information Technology, Vadodara – ICD
                            </p>
                            <p className="text-sm font-medium tracking-wider text-foreground">
                                Batch: 2022 – Present
                            </p>
                        </div>


                        {/* Download CV Button */}
                        <button className="bg-[#009E66] text-white font-semibold mt-2 px-8 py-3 transition-colors duration-200 flex items-center space-x-2">
                            <DownloadIcon />
                            <span>Download CV</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
