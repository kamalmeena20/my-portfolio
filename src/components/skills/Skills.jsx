import { BackendSkills } from '../ui/Backendskills';
import { Frontendskills } from '../ui/Frontendskills';

const SpinningLogosDemo = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 transition-colors duration-300 sm:px-6 md:px-10 text-foreground">
            {/* Top Heading */}
            <div className="mb-6 text-center">
                <p className="text-xs tracking-widest uppercase sm:text-sm text-muted-foreground">TECH STACK</p>
                <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Skills & Expertise</h2>
                <div className="w-1 h-10 bg-[#009E66] mx-auto -mb-2 mt-2" />
            </div>

            {/* Frontend and Backend Skills Side by Side */}
            <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6  rounded-full p-4 sm:p-6 md:p-10  xl:w-[1000px]">
                <div className="w-full lg:w-1/2">
                    <Frontendskills />
                </div>
                <div className="w-full lg:w-1/2">
                    <BackendSkills />
                </div>
            </div>
        </div>
    );
};

export default SpinningLogosDemo;
