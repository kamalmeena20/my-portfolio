import { BackendSkills } from '../ui/Backendskills';
import { Frontendskills } from '../ui/Frontendskills';

const SpinningLogosDemo = () => {
    return (
        <div className="flex flex-col items-center justify-center transition-colors duration-300 bg-background text-foreground">
            {/* Top Heading */}
            <div className="text-center">
                <p className="text-sm tracking-widest uppercase text-muted-foreground">TECH STACK</p>
                <h2 className="text-5xl font-bold lg:text-6xl">Skills & Expertise</h2>
                <div className="w-1 h-10 bg-[#009E66] mx-auto mt-4" />
            </div>

            {/* Frontend and Backend Skills Side by Side */}
            <div className="flex w-[1200px] pl-10 flex-col items-center justify-center mt-4 border lg:flex-row border-[#009E66] rounded-full">
                <div className="shadow-md min-w-fit rounded-xl lg:w-1/2 text-foreground">
                    <Frontendskills />
                </div>
                <div className="w-full shadow-md rounded-xl lg:w-1/2 text-foreground">
                    <BackendSkills />
                </div>
            </div>
        </div>
    );
};

export default SpinningLogosDemo;
