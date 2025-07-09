// import { portfolioData } from '../data/portfolioData';

// export class ChatbotAI {
//     constructor() {
//         this.context = {
//             questionCount: 0
//         };
//     }

//     generateResponse(userInput) {
//         const input = userInput.toLowerCase().trim();
//         this.context.questionCount++;

//         // Greetings
//         if (this.isGreeting(input)) {
//             return this.getGreetingResponse();
//         }

//         // Skills and technical questions
//         if (this.isSkillsQuery(input)) {
//             return this.getSkillsResponse(input);
//         }

//         // Project questions
//         if (this.isProjectQuery(input)) {
//             return this.getProjectsResponse(input);
//         }

//         // Experience questions
//         if (this.isExperienceQuery(input)) {
//             return this.getExperienceResponse();
//         }

//         // Contact questions
//         if (this.isContactQuery(input)) {
//             return this.getContactResponse();
//         }

//         // Education questions
//         if (this.isEducationQuery(input)) {
//             return this.getEducationResponse();
//         }

//         // Social media questions
//         if (this.isSocialMediaQuery(input)) {
//             return this.getSocialMediaResponse();
//         }

//         // Services questions
//         if (this.isServicesQuery(input)) {
//             return this.getServicesResponse();
//         }

//         // Availability questions
//         if (this.isAvailabilityQuery(input)) {
//             return this.getAvailabilityResponse();
//         }

//         // Navigation help
//         if (this.isNavigationQuery(input)) {
//             return this.getNavigationHelp();
//         }

//         // Testimonials
//         if (this.isTestimonialsQuery(input)) {
//             return this.getTestimonialsResponse();
//         }

//         // Default response
//         return this.getDefaultResponse();
//     }

//     isGreeting(input) {
//         const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'namaskar','Ram Ram Sa',];
//         return greetings.some(greeting => input.includes(greeting));
//     }

//     getGreetingResponse() {
//         const responses = [
//             `Hey there! 👋 I'm ${portfolioData.personalInfo.name}'s AI assistant. I'm here to help you learn about my skills, projects, and experience. What would you like to know?`,
//             `Hello! Welcome to my portfolio! I can tell you about my projects, technical skills, work experience, or how to get in touch. What interests you most?`,
//             `Hi! Great to meet you! I'm here to answer any questions about my background, projects, or expertise. Feel free to ask me anything!`
//         ];
//         return this.getRandomResponse(responses);
//     }

//     isSkillsQuery(input) {
//         return ['skill', 'technology', 'tech', 'programming', 'language', 'framework', 'tool', 'database', 'cloud'].some(word => input.includes(word));
//     }

//     getSkillsResponse(input) {
//         const { skills } = portfolioData;

//         if (input.includes('framework')) {
//             return `I work with several modern frameworks including: ${skills.frameworks.join(', ')}. My strongest expertise is in React and Node.js for full-stack development.`;
//         }

//         if (input.includes('database')) {
//             return `For databases, I'm experienced with: ${skills.databases.join(', ')}. I'm particularly skilled in PostgreSQL for relational data and MongoDB for NoSQL solutions.`;
//         }

//         if (input.includes('cloud')) {
//             return `I have cloud experience with: ${skills.cloud.join(', ')}. I can deploy and manage applications on these platforms with proper DevOps practices.`;
//         }

//         return `I have strong technical skills across the full stack! My main technologies include: ${skills.technical.slice(0, 4).join(', ')}, and I work with frameworks like ${skills.frameworks.slice(0, 3).join(', ')}. I'm also experienced with ${skills.databases.slice(0, 2).join(' and ')} databases. Would you like to know more about any specific technology?`;
//     }

//     isProjectQuery(input) {
//         return ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'website', 'application'].some(word => input.includes(word));
//     }

//     getProjectsResponse(input) {
//         const { projects } = portfolioData;

//         if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('shop')) {
//             const ecomProject = projects.find(p => p.name.toLowerCase().includes('ecommerce') || p.name.toLowerCase().includes('e-commerce'));
//             if (ecomProject) {
//                 return `I built an ${ecomProject.name} - ${ecomProject.description}. Key features include: ${ecomProject.features.join(', ')}. Built with ${ecomProject.technologies.join(', ')}.`;
//             }
//         }

//         const projectSummary = projects.map((project, index) =>
//             `${index + 1}. **${project.name}**: ${project.description} (${project.technologies.slice(0, 2).join(', ')})`
//         ).join('\n\n');

//         return `I've worked on several exciting projects:\n\n${projectSummary}\n\nWould you like to hear more details about any specific project?`;
//     }

//     isExperienceQuery(input) {
//         return ['experience', 'work', 'job', 'career', 'company', 'position', 'role'].some(word => input.includes(word));
//     }

//     getExperienceResponse() {
//         const { experience } = portfolioData;

//         const expSummary = experience.map(exp =>
//             `**${exp.position}** at ${exp.company} (${exp.duration})\n• ${exp.responsibilities.slice(0, 2).join('\n• ')}`
//         ).join('\n\n');

//         return `Here's my professional experience:\n\n${expSummary}\n\nI have ${experience.length} years of professional development experience. Would you like to know more about any specific role?`;
//     }

//     isContactQuery(input) {
//         return ['contact', 'email', 'phone', 'reach', 'get in touch', 'hire', 'available'].some(word => input.includes(word));
//     }

//     getContactResponse() {
//         const { personalInfo, availability } = portfolioData;
//         return `I'd love to connect with you! Here are the best ways to reach me:\n\n📧 Email: ${personalInfo.email}\n📱 Phone: ${personalInfo.phone}\n💼 LinkedIn: ${portfolioData.socialMedia.linkedin}\n\nI'm currently ${availability.status.toLowerCase()} and ${availability.responseTime.toLowerCase()}. ${availability.preferredContact} works best for me!`;
//     }

//     isEducationQuery(input) {
//         return ['education', 'degree', 'university', 'college', 'study', 'graduate'].some(word => input.includes(word));
//     }

//     getEducationResponse() {
//         const { education } = portfolioData;
//         const edu = education[0];
//         return `I have a ${edu.degree} from ${edu.institution} (${edu.year}). ${edu.details} My education gave me a strong foundation in computer science principles and software engineering practices.`;
//     }

//     isSocialMediaQuery(input) {
//         return ['social', 'github', 'linkedin', 'twitter', 'portfolio', 'profile'].some(word => input.includes(word));
//     }

//     getSocialMediaResponse() {
//         const { socialMedia } = portfolioData;
//         return `You can find me on various platforms:\n\n🐙 GitHub: ${socialMedia.github}\n💼 LinkedIn: ${socialMedia.linkedin}\n🐦 Twitter: ${socialMedia.twitter}\n🌐 Portfolio: ${socialMedia.portfolio}\n\nFeel free to connect with me on any of these platforms!`;
//     }

//     isServicesQuery(input) {
//         return ['service', 'offer', 'do', 'help', 'consulting', 'freelance'].some(word => input.includes(word));
//     }

//     getServicesResponse() {
//         const { services } = portfolioData;
//         return `I offer a range of development services:\n\n${services.map(service => `• ${service}`).join('\n')}\n\nI can help with everything from building new applications to optimizing existing ones. What kind of project are you working on?`;
//     }

//     isAvailabilityQuery(input) {
//         return ['available', 'availability', 'free', 'busy', 'schedule', 'time'].some(word => input.includes(word));
//     }

//     getAvailabilityResponse() {
//         const { availability } = portfolioData;
//         return `I'm currently ${availability.status.toLowerCase()}! I ${availability.responseTime.toLowerCase()} and prefer communication via ${availability.preferredContact.toLowerCase()}. Let's discuss how I can help with your project!`;
//     }

//     isNavigationQuery(input) {
//         return ['navigate', 'find', 'where', 'section', 'page', 'menu', 'help'].some(word => input.includes(word));
//     }

//     getNavigationHelp() {
//         return `I can help you navigate my portfolio! Here's what you can explore:\n\n🏠 **Home**: Overview and introduction\n💼 **Projects**: Detailed project showcases\n🛠️ **Skills**: Technical expertise and tools\n📧 **Contact**: Get in touch information\n📝 **About**: Personal background and experience\n\nWhat section would you like to learn more about?`;
//     }

//     isTestimonialsQuery(input) {
//         return ['testimonial', 'review', 'feedback', 'recommendation', 'reference'].some(word => input.includes(word));
//     }

//     getTestimonialsResponse() {
//         const { testimonials } = portfolioData;
//         const testimonialText = testimonials.map(t =>
//             `"${t.feedback}" - ${t.name}, ${t.position} at ${t.company}`
//         ).join('\n\n');

//         return `Here's what people say about working with me:\n\n${testimonialText}\n\nI'm proud to have built strong professional relationships and delivered quality work consistently!`;
//     }

//     getDefaultResponse() {
//         const responses = [
//             "I'd be happy to help you with that! I can tell you about my skills, projects, experience, or how to get in touch. What specific information are you looking for?",
//             "That's a great question! I can share details about my technical background, work experience, projects, or contact information. What would you like to know more about?",
//             "I'm here to help! Feel free to ask me about my programming skills, recent projects, professional experience, or the best ways to connect with me.",
//             "Interesting question! I can provide information about my development expertise, portfolio projects, career background, or availability. What catches your interest most?"
//         ];

//         return this.getRandomResponse(responses);
//     }

//     getRandomResponse(responses) {
//         return responses[Math.floor(Math.random() * responses.length)];
//     }

//     resetContext() {
//         this.context = { questionCount: 0 };
//     }
// }

// export const chatbotAI = new ChatbotAI();




import { portfolioData } from '../data/portfolioData';

export class ChatbotAI {
    constructor() {
        this.context = {
            questionCount: 0
        };
    }

    generateResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        this.context.questionCount++;

        // Greetings
        if (this.isGreeting(input)) {
            return this.getGreetingResponse();
        }

        // Skills and technical questions
        if (this.isSkillsQuery(input)) {
            return this.getSkillsResponse(input);
        }

        // Project questions
        if (this.isProjectQuery(input)) {
            return this.getProjectsResponse(input);
        }

        // Experience questions
        if (this.isExperienceQuery(input)) {
            return this.getExperienceResponse();
        }

        // Contact questions
        if (this.isContactQuery(input)) {
            return this.getContactResponse();
        }

        // Education questions
        if (this.isEducationQuery(input)) {
            return this.getEducationResponse();
        }

        // Social media questions
        if (this.isSocialMediaQuery(input)) {
            return this.getSocialMediaResponse();
        }

        // Services questions
        if (this.isServicesQuery(input)) {
            return this.getServicesResponse();
        }

        // Availability questions
        if (this.isAvailabilityQuery(input)) {
            return this.getAvailabilityResponse();
        }

        // Navigation help
        if (this.isNavigationQuery(input)) {
            return this.getNavigationHelp();
        }

        // Testimonials
        if (this.isTestimonialsQuery(input)) {
            return this.getTestimonialsResponse();
        }

        // Default response
        return this.getDefaultResponse();
    }

    isGreeting(input) {
        const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'namaskar'];
        return greetings.some(greeting => input.includes(greeting));
    }

    getGreetingResponse() {
        const responses = [
            `Hey there! 👋 I'm ${portfolioData.personalInfo.name}'s AI assistant. I'm here to help you learn about my skills, projects, and experience. What would you like to know?`,
            `Hello! Welcome to my portfolio! I can tell you about my projects, technical skills, work experience, or how to get in touch. What interests you most?`,
            `Hi! Great to meet you! I'm here to answer any questions about my background, projects, or expertise. Feel free to ask me anything!`
        ];
        return this.getRandomResponse(responses);
    }

    isSkillsQuery(input) {
        return ['skill', 'technology', 'tech', 'programming', 'language', 'framework', 'tool', 'database', 'cloud'].some(word => input.includes(word));
    }

    getSkillsResponse(input) {
        const { skills } = portfolioData;

        if (input.includes('framework')) {
            return `I work with several modern frameworks including: ${skills.frameworks.join(', ')}. My strongest expertise is in React and Node.js for full-stack development.`;
        }

        if (input.includes('database')) {
            return `For databases, I'm experienced with: ${skills.databases.join(', ')}. I'm particularly skilled in PostgreSQL for relational data and MongoDB for NoSQL solutions.`;
        }

        if (input.includes('cloud')) {
            return `I have cloud experience with: ${skills.cloud.join(', ')}. I can deploy and manage applications on these platforms with proper DevOps practices.`;
        }

        return `I have strong technical skills across the full stack! My main technologies include: ${skills.technical.slice(0, 4).join(', ')}, and I work with frameworks like ${skills.frameworks.slice(0, 3).join(', ')}. I'm also experienced with ${skills.databases.slice(0, 2).join(' and ')} databases. Would you like to know more about any specific technology?`;
    }

    isProjectQuery(input) {
        return ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'website', 'application'].some(word => input.includes(word));
    }

    getProjectsResponse(input) {
        const { projects } = portfolioData;

        if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('shop')) {
            const ecomProject = projects.find(p => p.name.toLowerCase().includes('ecommerce') || p.name.toLowerCase().includes('e-commerce'));
            if (ecomProject) {
                return `I built an ${ecomProject.name} - ${ecomProject.description}. Key features include: ${ecomProject.features.join(', ')}. Built with ${ecomProject.technologies.join(', ')}.`;
            }
        }

        const projectSummary = projects.map((project, index) =>
            `${index + 1}. **${project.name}**: ${project.description} (${project.technologies.slice(0, 2).join(', ')})`
        ).join('\n\n');

        return `I've worked on several exciting projects:\n\n${projectSummary}\n\nWould you like to hear more details about any specific project?`;
    }

    isExperienceQuery(input) {
        return ['experience', 'work', 'job', 'career', 'company', 'position', 'role'].some(word => input.includes(word));
    }

    getExperienceResponse() {
        const { experience } = portfolioData;

        const expSummary = experience.map(exp =>
            `**${exp.position}** at ${exp.company} (${exp.duration})\n• ${exp.responsibilities.slice(0, 2).join('\n• ')}`
        ).join('\n\n');

        return `Here's my professional experience:\n\n${expSummary}\n\nI have ${experience.length} years of professional development experience. Would you like to know more about any specific role?`;
    }

    isContactQuery(input) {
        return ['contact', 'email', 'phone', 'reach', 'get in touch', 'hire', 'available'].some(word => input.includes(word));
    }

    getContactResponse() {
        const { personalInfo, availability } = portfolioData;
        return `I'd love to connect with you! Here are the best ways to reach me:\n\n📧 Email: ${personalInfo.email}\n📱 Phone: ${personalInfo.phone}\n💼 LinkedIn: ${portfolioData.socialMedia.linkedin}\n\nI'm currently ${availability.status.toLowerCase()} and ${availability.responseTime.toLowerCase()}. ${availability.preferredContact} works best for me!`;
    }

    isEducationQuery(input) {
        return ['education', 'degree', 'university', 'college', 'study', 'graduate'].some(word => input.includes(word));
    }

    getEducationResponse() {
        const { education } = portfolioData;
        const edu = education[0];
        return `I have a ${edu.degree} from ${edu.institution} (${edu.year}). ${edu.details} My education gave me a strong foundation in computer science principles and software engineering practices.`;
    }

    isSocialMediaQuery(input) {
        return ['social', 'github', 'linkedin', 'twitter', 'portfolio', 'profile'].some(word => input.includes(word));
    }

    getSocialMediaResponse() {
        const { socialMedia } = portfolioData;
        return `You can find me on various platforms:\n\n GitHub: ${socialMedia.github}\n LinkedIn: ${socialMedia.linkedin}\n Twitter: ${socialMedia.twitter}\n Portfolio: ${socialMedia.portfolio}\n\nFeel free to connect with me on any of these platforms!`;
    }

    isServicesQuery(input) {
        return ['service', 'offer', 'do', 'help', 'consulting', 'freelance'].some(word => input.includes(word));
    }

    getServicesResponse() {
        const { services } = portfolioData;
        return `I offer a range of development services:\n\n${services.map(service => `• ${service}`).join('\n')}\n\nI can help with everything from building new applications to optimizing existing ones. What kind of project are you working on?`;
    }

    isAvailabilityQuery(input) {
        return ['available', 'availability', 'free', 'busy', 'schedule', 'time'].some(word => input.includes(word));
    }

    getAvailabilityResponse() {
        const { availability } = portfolioData;
        return `I'm currently ${availability.status.toLowerCase()}! I ${availability.responseTime.toLowerCase()} and prefer communication via ${availability.preferredContact.toLowerCase()}. Let's discuss how I can help with your project!`;
    }

    isNavigationQuery(input) {
        return ['navigate', 'find', 'where', 'section', 'page', 'menu', 'help'].some(word => input.includes(word));
    }

    getNavigationHelp() {
        return `I can help you navigate my portfolio! Here's what you can explore:\n\n🏠 **Home**: Overview and introduction\n💼 **Projects**: Detailed project showcases\n🛠️ **Skills**: Technical expertise and tools\n📧 **Contact**: Get in touch information\n📝 **About**: Personal background and experience\n\nWhat section would you like to learn more about?`;
    }

    isTestimonialsQuery(input) {
        return ['testimonial', 'review', 'feedback', 'recommendation', 'reference'].some(word => input.includes(word));
    }

    getTestimonialsResponse() {
        const { testimonials } = portfolioData;
        const testimonialText = testimonials.map(t =>
            `"${t.feedback}" - ${t.name}, ${t.position} at ${t.company}`
        ).join('\n\n');

        return `Here's what people say about working with me:\n\n${testimonialText}\n\nI'm proud to have built strong professional relationships and delivered quality work consistently!`;
    }

    getDefaultResponse() {
        const responses = [
            "I'd be happy to help you with that! I can tell you about my skills, projects, experience, or how to get in touch. What specific information are you looking for?",
            "That's a great question! I can share details about my technical background, work experience, projects, or contact information. What would you like to know more about?",
            "I'm here to help! Feel free to ask me about my programming skills, recent projects, professional experience, or the best ways to connect with me.",
            "Interesting question! I can provide information about my development expertise, portfolio projects, career background, or availability. What catches your interest most?"
        ];

        return this.getRandomResponse(responses);
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    resetContext() {
        this.context = { questionCount: 0 };
    }
}

export const chatbotAI = new ChatbotAI();
