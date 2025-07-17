export const portfolioData = {
    personalInfo: {
        name: "Kamal Meena",
        title: "Full Stack Developer",
        location: "Jaipur, India",
        email: "officalkamalmeena2005@gmail.com",
        phone: "+91 9680477712",
        summary: "Passionate full-stack developer with 5+ years of experience building modern web applications. I love creating user-friendly solutions and working with cutting-edge technologies."
    },
    skills: {
        technical: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
        frameworks: ["React", "Node.js", "Express", "Next.js", "BootStrap"],
        tools: ["Git", "VsCode", "Webpack", "Vite", "Jest", "Cypress"],
        languages: ["C", "C++", "TypeScript", "Python", "Java", "SQL"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "Convex", "Prisma"],
        cloud: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify"]
    },
    projects: [
        {
            name: "STAVYA",
            description: "An official platform built for IIITV-ICD’s cultural fest to enhance student engagement, streamline registrations, and provide dynamic event access.",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            features: [
                "Multi-day event schedule with real-time timing and venue updates",
                "Interactive registration system with team formation and event tracking",
                "Dynamic content rendering for cultural clubs and member roles",
                "Role-based hierarchy display for committees and club structures",
                "Smooth UI experience for participants, admins, and external colleges"
            ],
            status: "Completed"

        },
        {
            name: "HODO (Hackathon Project)",
            description: "A real-time social collaboration platform with modular architecture and location-aware interactions.",
            technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
            features: [
                "Real-time chat with WebSocket integration",
                "Friend connections and profile personalization",
                "Geolocation-based user discovery and interaction",
                "Cloudinary integration for optimized image delivery",
                "Modular components for scalable team collaboration"
            ],
            status: "Completed"
        },
        {
            name: "Nutrifit (HealthCare Web App)",
            description: "A full-stack wellness platform for personalized diet, workouts, predictions, and doctor consultations.",
            technologies: ["React", "D3.js", "Python", "FastAPI"],
            features: [
                "Tailored diet plans and structured workout modules with GIF guidance",
                "Disease prediction system using health data analysis",
                "Doctor booking system with online and offline modes",
                "Interactive charts and dashboards for real-time health tracking",
                "Data filtering, export options, and smart recommendation flows"
            ],
            status: "Completed"
        }

    ],
    experience: [
        {
            company: "SapmenC",
            position: "Full Stack Developer",
            duration: "Feb 2025 - Present",
            responsibilities: [
                "Lead development of complex web applications",
                "Mentor junior developers",
                "Architect scalable solutions",
                "Collaborate with product and design teams"
            ]
        },
        {
            company: "IIIT-Vadodara-ICD",
            position: "UI/UX Lead in MLSA",
            duration: "2022 - 2023",
            responsibilities: [
                "Led UI / UX design for MLSA events and community tools.",

                "Created user- friendly interfaces using Figma and accessibility guidelines.",

                "Collaborated with teams to deliver responsive, engaging digital experiences.",

                "Conducted workshops, mentored peers, and promoted human- centered design thinking.",
            ]
        }
    ],
    education: {
        college: {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Indian Institute of Information Technology Vadodara",
            year: "2022",
            details: "Specialized in Computer Science and Engineering"
        },
        school: {
            level: "Senior Secondary (Class 12th - RBSE)",
            institution: "Bright Sun Public School, Sawai MAdhopur",
            year: "2022",
            details: "Focused on PCM (Physics, Chemistry, Math) with Computer Science as an additional subject."
        }
    },

    socialMedia: {
        github: "https://github.com/kamalmeena20",
        linkedin: "https://www.linkedin.com/in/kamal-meena-787706289/",
        twitter: "https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09",
        portfolio: "https://kamalmeena.vercel.app/"
    },
    availability: {
        status: "Open to new opportunities",
        preferredContact: "Email or LinkedIn",
        responseTime: "Usually respond within 24 hours"
    },
    currentStatus: {
        timezoneOffset: 330, // IST (UTC+5:30) in minutes
        routine: [
            { from: 23, to: 7, activity: "sleeping 😴" },
            { from: 7, to: 8, activity: "just woke up and getting ready for the day" },
            { from: 8, to: 9, activity: "having breakfast in the mess 🍽️" },
            { from: 9, to: 12, activity: "attending classes 📚" },
            { from: 12, to: 14, activity: "having lunch 🍛" },
            { from: 14, to: 17, activity: "attending lab sessions 🔬" },
            { from: 17, to: 20, activity: "at the gym 🏋️" },
            { from: 20, to: 22, activity: "having dinner 🍽️" },
            { from: 22, to: 23, activity: "winding down and wrapping up the day" }
        ],
        noGymOnSunday: true
    }

};
