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
            description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            features: ["User authentication", "Shopping cart", "Payment processing", "Order management", "Admin panel"],
            status: "Completed"
        },
        {
            name: "Task Management App",
            description: "Collaborative project management tool with real-time updates and team collaboration features",
            technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
            features: ["Real-time collaboration", "Task assignments", "Progress tracking", "File sharing"],
            status: "In Progress"
        },
        {
            name: "Data Analytics Dashboard",
            description: "Interactive dashboard for data visualization and business intelligence",
            technologies: ["React", "D3.js", "Python", "FastAPI"],
            features: ["Interactive charts", "Data filtering", "Export functionality", "Real-time updates"],
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
            company: "Digital Solutions Ltd.",
            position: "Full Stack Developer",
            duration: "2020 - 2022",
            responsibilities: [
                "Developed responsive web applications",
                "Implemented RESTful APIs",
                "Optimized database performance",
                "Participated in code reviews"
            ]
        }
    ],
    education: {
        college: {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Indian Institute of Information Technology Vadodara",
            year: "2022",
            details: "Graduated with honors, specialized in Computer Science and Engineering"
        },
        school: {
            level: "Senior Secondary (Class 12th - CBSE)",
            institution: "Jawahar Navodaya Vidyalaya, Dungarpur",
            year: "2018",
            details: "Focused on PCM (Physics, Chemistry, Math) with Computer Science as an additional subject."
        }
    },

    socialMedia: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourusername",
        portfolio: "https://yourportfolio.com"
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
