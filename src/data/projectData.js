// projectData.js
import project from '../assets/images/project.jpg'
import radhe from '../assets/images/shivangi.jpg'
import shivangii from '../assets/images/shivangi.jpg'
import radhee from '../assets/images/certificate01.jpg'

export const projectsData = [
    {
        id: 1,
        title: "STAVYA",
        subtitle: "Institute Cultural Fest Site",
        description: "STAVYA is cultural fest Site of IIIT-Vadodara ICD featuring event details, registration, and interactive components to enhance user engagement.",
        techStack: ["React.js", "Tailwind CSS", "GSAP", "AOS", "CSS", "JavaScript", "Figma"],
        highlights: [
            "Interactive event registration system",
            "Real-time event updates",
            "Responsive design for all devices",
            "Smooth animations and transitions"
        ],
        images: [
            project, radhee, shivangii, radhe
        ],
        projectType: "Web Application",
        status: "Completed",
        liveLink: "https://stavya-fest.com", // Optional
        githubLink: "https://github.com/username/stavya" // Optional
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        subtitle: "Modern Shopping Experience",
        description: "A full-stack e-commerce platform with advanced features like real-time inventory management, secure payment integration, and personalized user experience.",
        techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "Material-UI"],
        highlights: [
            "Secure payment gateway integration",
            "Real-time inventory tracking",
            "Advanced search and filtering",
            "User authentication & authorization"
        ],
        images: [
            "/api/placeholder/800/500",
            "/api/placeholder/400/300",
        ],
        projectType: "Full-Stack Application",
        status: "In Progress",
        liveLink: "https://myecommerce.com",
        githubLink: "https://github.com/username/ecommerce"
    },
    {
        id: 3,
        title: "Task Management App",
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
            "/api/placeholder/800/500",
            "/api/placeholder/400/300",
        ],
        projectType: "Web Application",
        status: "Completed",
        liveLink: "https://taskmanager.com",
        githubLink: "https://github.com/username/taskmanager"
    }
];

