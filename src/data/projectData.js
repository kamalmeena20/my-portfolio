// projectData.js
import pro01img01 from '../assets/images/pro01img01.jpg'
import pro01img02 from '../assets/images/pro01img02.jpg'
import pro01img03 from '../assets/images/pro01img03.jpg'
import pro01img04 from '../assets/images/pro01img04.jpg'
import pro01img05 from '../assets/images/pro01img05.jpg'

import pro02img01 from '../assets/images/pro02img01.jpg'
import pro02img02 from '../assets/images/pro02img02.jpg'
import pro02img03 from '../assets/images/pro02img03.jpg'

import pro03img01 from '../assets/images/pro03img01.jpg'
import pro03img02 from '../assets/images/pro03img02.jpg'
import pro03img03 from '../assets/images/pro03img03.jpg'
import pro03img04 from '../assets/images/pro03img04.jpg'
import pro03img05 from '../assets/images/pro03img05.jpg'



export const projectsData = [
    {
        id: 1,
        title: "STAVYA (IIITV-ICD Cultural Fest Site)",
        subtitle: "Institute Cultural Fest Site",
        description: "STAVYA is cultural fest Site of IIIT-Vadodara ICD featuring event details, registration, and interactive components to enhance user engagement.",
        techStack: ["React.js", "Tailwind CSS", "GSAP", "AOS", "CSS", "JavaScript", "Figma"],
        highlights: [
            "Interactive event registration system",
            "Real-time event updates",
            "Responsive design for all devices",
            "Smooth animations and transitions"
        ],
        images: [pro01img01, pro01img02, pro01img03, pro01img04, pro01img05],
        projectType: "Web Application",
        status: "Completed",
        liveLink: "https://stavya-fest.com", // Optional
        githubLink: "https://github.com/username/stavya" // Optional
    },
    {
        id: 2,
        title: "HODO (Hackathon Project)",
        subtitle: "Modern Shopping Experience",
        description: "A full-stack e-commerce platform with advanced features like real-time inventory management, secure payment integration, and personalized user experience.",
        techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "Material-UI"],
        highlights: [
            "Secure payment gateway integration",
            "Real-time inventory tracking",
            "Advanced search and filtering",
            "User authentication & authorization"
        ],
        images: [pro02img01, pro02img02, pro02img03],
        projectType: "Full-Stack Application",
        status: "In Progress",
        liveLink: "https://myecommerce.com",
        githubLink: "https://github.com/username/ecommerce"
    },
    {
        id: 3,
        title: "Nutrifit (HealthCare Web App)",
        subtitle: "Productivity & Collaboration Tool",
        description: "A comprehensive task management application with team collaboration features, real-time updates, and advanced project tracking capabilities.",
        techStack: ["React.js", "Firebase", "Chakra UI", "React Query", "TypeScript"],
        highlights: [
            "Real-time team collaboration",
            "Advanced project analytics",
            "Drag & drop task management",
            "Multi-device synchronization"
        ],
        images: [
            pro03img01,
            pro03img02,
            pro03img03,
            pro03img04,
            pro03img05,
        ],
        projectType: "Web Application",
        status: "Completed",
        liveLink: "https://taskmanager.com",
        githubLink: "https://github.com/username/taskmanager"
    }
];

