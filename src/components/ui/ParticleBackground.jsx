import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadLinksPreset(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: "links",
                background: {
                    color: {
                        value: "#0e0e0e",
                    },
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                particles: {
                    color: {
                        value: "#009E66",
                    },
                    links: {
                        color: "#009E66",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
