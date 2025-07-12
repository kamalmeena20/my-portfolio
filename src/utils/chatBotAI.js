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

        // Greeting
        if (this.isGreeting(input)) {
            return this.getGreetingResponse();
        }

        // Personal Info
        if (this.isPersonalInfoQuery(input)) {
            return this.getPersonalInfoResponse(input);
        }

        // Skills
        if (this.isSkillsQuery(input)) {
            return this.getSkillsResponse(input);
        }

        // Specific Project Query (e.g. ecommerce)
        if (this.isSpecificProjectQuery?.(input)) {
            return this.getProjectsResponse(input);
        }

        // General Project Query - Stepwise flow
        if (this.isProjectQuery(input)) {
            this.projectStep = 0;
            return this.getInitialProjectPrompt(); // Just prompt
        }

        const match = input.match(/project\s*(\d+)/);
        if (match) {
            const index = parseInt(match[1], 10) - 1;
            return this.getProjectByIndex(index); // Show that one
        }

        // 3. If user says "yes", "go ahead", etc., proceed in sequence
        if (
            this.projectStep !== undefined &&
            ['yes', 'go ahead', 'next', 'proceed', 'continue'].some(word => input.includes(word))
        ) {
            const response = this.getProjectByIndex(this.projectStep);
            this.projectStep += 1;
            return response;
        }

        // Experience
        if (this.isExperienceQuery(input)) {
            return this.getExperienceResponse();
        }

        // Contact
        if (this.isContactQuery(input)) {
            return this.getContactResponse(input);
        }

        // Education (deduplicate call)
        if (this.isEducationQuery(input)) {
            return this.getEducationResponse(input);
        }

        // Social Media
        if (this.isSocialMediaQuery(input)) {
            return this.getSocialMediaResponse();
        }

    
        // Current Activity
        if (this.isCurrentActivityQuery(input)) {
            return this.getCurrentActivityResponse();
        }

        // Free Time
        if (this.isFreeTimeQuery(input)) {
            return this.getFreeTimeResponse();
        }

        // Contact follow-up
        if (this.context.awaitingContactConfirmation && this.isContactConfirmation(input)) {
            this.context.awaitingContactConfirmation = false;
            return this.getContactResponse();
        }

        if (this.isContactConfirmation(input)) {
            return this.getFollowupContactResponse();
        }

        // Navigation Help
        if (this.isNavigationQuery(input)) {
            return this.getNavigationHelp();
        }

        // Relationship
        if (this.isRelationshipQuery(input)) {
            return this.getRelationshipResponse();
        }

        // Inappropriate input
        if (this.isInappropriate(input)) {
            return this.getInappropriateResponse();
        }

        // Fallback
        return this.getDefaultResponse();
    }


    isGreeting(input) {
        const greetings = [
            'hello',
            'hi',
            'hey',
            'good morning',
            'good afternoon',
            'good evening',
            'namaste',
            'namaskar',
            'ram ram',
            'ram ram sa',
            'what’s up',
            'kem cho',
            'vanakkam',
        ];

        return greetings.some(greeting => input.includes(greeting.toLowerCase()));
    }


    getGreetingResponse() {
        const responses = [
            `Hey there! 👋 I'm ${portfolioData.personalInfo.name}'s AI assistant. I'm here to help you learn about his skills, projects, and experience. What would you like to know?`,
            `Hello! Welcome to Kamal's portfolio ! I can tell you about his projects, technical skills, work experience, or how to get in touch. What interests you most?`,
            `Hi! Great to meet you! I'm here to answer any questions about kamal's background, projects, or expertise. Feel free to ask me anything!`
        ];
        return this.getRandomResponse(responses);
    }
    isPersonalInfoQuery(input) {
        const keywords = [
            'who are you', 'who is kamal', 'about kamal', 'kamal intro', 'introduction',
            'tell me about yourself', 'your intro', 'kamal meena', 'kamal information',
            'brief about kamal', 'what do you do', 'kamal kya karta hai', 'kamal kaun hai'
        ];
        return keywords.some(keyword => input.includes(keyword.toLowerCase()));
    }
    getPersonalInfoResponse(input = '') {
        const { title, location, summary, email, phone } = portfolioData.personalInfo;
        const name = this.normalizeName(input);  // ← dynamic name

        return `👤 Meet ${name} — a ${title} based in ${location}.\n\n💬 ${summary}\n\n📧 Email: ${email}\n📱 Phone: ${phone || "Not publicly shared"}\n\nLet me know if you’d like to explore ${name}'s skills, projects, or professional background!`;
    }
    normalizeName(input) {
        // Normalize the name shown in bot replies
        if (input.includes("radhe")) return "Radhe";
        return "Kamal";
    }



    isSkillsQuery(input) {
        const skillKeywords = ['skill', 'skills', 'technologies', 'technology', 'tech', 'programming', 'coding', 'code', 'language', 'languages', 'framework', 'frameworks', 'libraries', 'tools', 'stacks', 'stack', 'database', 'databases', 'cloud', 'cloud services', 'what tech you use', 'what tools you use', 'tech stack', 'which languages you know', 'you code in', 'your technologies', 'your tech stack', 'do you use node', 'do you use react', 'backend skills', 'frontend skills', 'what can you build', 'which tools you work with', 'which framework', 'do you know next js', 'do you know mongo', 'you have cloud experience', 'platforms you work on'];
        return skillKeywords.some(keyword => input.includes(keyword.toLowerCase()));
    }


    getSkillsResponse(input) {
        const { skills } = portfolioData;
        const lowerInput = input.toLowerCase();
        const name = this.normalizeName(input); // handles "Radhe" or "Kamal"

        if (lowerInput.includes('framework')) {
            return `${name} works with modern frameworks like ${skills.frameworks.join(', ')}. His strongest expertise is in React and Node.js for full-stack development.`;
        }

        if (lowerInput.includes('database') || lowerInput.includes('sql') || lowerInput.includes('mongo')) {
            return `${name} is experienced with databases such as ${skills.databases.join(', ')}. He uses PostgreSQL for relational data and MongoDB for NoSQL apps.`;
        }

        if (lowerInput.includes('cloud') || lowerInput.includes('platform')) {
            return `${name} has cloud experience using ${skills.cloud.join(', ')}. He can deploy and manage apps using CI/CD and DevOps practices.`;
        }

        if (lowerInput.includes('tool') || lowerInput.includes('tools')) {
            return `${name} uses a variety of tools in his development workflow including Git, VS Code, Postman, and others tailored to the project stack.`;
        }

        if (lowerInput.includes('language') || lowerInput.includes('languages') || lowerInput.includes('code') || lowerInput.includes('coding') || lowerInput.includes('programming')) {
            return `${name} codes mainly in ${skills.technical.join(', ')} and is confident in both frontend and backend technologies.`;
        }

        return `${name} has strong technical skills across the full stack. His main technologies include ${skills.technical.slice(0, 4).join(', ')}, with frameworks like ${skills.frameworks.slice(0, 3).join(', ')} and databases like ${skills.databases.slice(0, 2).join(' and ')}. Let me know if you'd like details on anything specific.`;
    }


    isProjectQuery(input) {
        const keywords = [
            'project', 'projects', 'your work', 'portfolio', 'work samples', 'demo', 'demo link',
            'built', 'created', 'developed', 'constructed', 'designed', 'coded', 'engineered',
            'apps', 'applications', 'websites', 'tools', 'web apps', 'mobile apps',
            'showcase', 'recent work', 'latest project', 'any project', 'example project',
            'sample work', 'can i see your work', 'what have you built', 'made by you',
            'what kind of projects', 'past projects', 'recent apps', 'your creations',
            'personal project', 'capstone', 'final year project', 'portfolio pieces'
        ];

        return keywords.some(keyword => input.includes(keyword.toLowerCase()));
    }
    isSpecificProjectQuery(input) {
        return ['ecommerce', 'e-commerce', 'shop', 'dashboard', 'analytics', 'task', 'management', 'todo'].some(word => input.includes(word));
    }

    getInitialProjectPrompt() {
        return `Kamal has worked on several exciting projects! Would you like to hear about them one by one? Just say "yes", "go ahead", or name a specific project like "project one" to begin.`;
    }

    getProjectByIndex(index) {
        const { projects } = portfolioData;
        if (index >= 0 && index < projects.length) {
            const project = projects[index];
            return `🔹 Project ${index + 1}: ${project.name}\n${project.description}\nKey features: ${project.features.join(', ')}\nBuilt with: ${project.technologies.join(', ')}.\n\nWould you like to hear about the next one?`;
        } else {
            return `Sorry, Kamal doesn't have that many projects. Try asking about "project one" or say "next" to continue.`;
        }
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
            `${index + 1}. ${project.name}: ${project.description} (${project.technologies.slice(0, 2).join(', ')})`
        ).join('\n\n');

        return `I've worked on several exciting projects:\n\n${projectSummary}\n\nWould you like to hear more details about any specific project?`;
    }




    isExperienceQuery(input) {
        return [
            'experience', 'work', 'job', 'jobs', 'career', 'company', 'companies', 'position', 'role', 'employer', 'employment',
            'where have you worked', 'your past roles', 'professional journey', 'what do you do', 'what have you done',
            'work history', 'worked at', 'past job', 'resume', 'cv'
        ].some(word => input.includes(word));
    }


    getExperienceResponse() {
        const { experience, socialMedia } = portfolioData;

        const customInternship = `• Full Stack Web Developer at SapmenC (Feb 2025 – Present): 
    - Worked on internal software projects like Upshot (implemented a robust file storage system), 
    MailerOne, and a client-facing application Brandfolio.`;

        const expSummary = experience.map(exp =>
            `• ${exp.position} at ${exp.company} (${exp.duration}): ${exp.responsibilities.slice(0, 2).join('; ')}`
        ).join('\n\n');

        return `Here’s a summary of Kamal’s professional experience: \n\n${expSummary}\n\n${customInternship}\n\nTo verify his internship or view his certificate, feel free to check his LinkedIn profile: ${socialMedia.linkedin}`;
    }
    isContactQuery(input) {
        return [
            'contact', 'email', 'phone', 'mobile', 'reach', 'connect', 'get in touch',
            'how to contact', 'how can i reach', 'message you', 'talk to you', 'hire',
            'available', 'whatsapp', 'communication'
        ].some(word => input.toLowerCase().includes(word));
    }



    getContactResponse(input = '') {
        const lowerInput = input.toLowerCase();
        const { personalInfo, availability, socialMedia } = portfolioData;

        if (lowerInput.includes('whatsapp')) {
            return `📱 You can reach Kamal on WhatsApp at: ${socialMedia.whatsapp}`;
        }

        if (lowerInput.includes('mobile') || lowerInput.includes('phone') || lowerInput.includes('call')) {
            return `📞 Kamal’s mobile number is: ${personalInfo.phone}`;
        }

        if (lowerInput.includes('linkedin')) {
            return `🔗 Here’s Kamal’s LinkedIn profile: ${socialMedia.linkedin}`;
        }

        if (lowerInput.includes('github')) {
            return `🧑‍💻 Kamal’s GitHub: ${socialMedia.github}`;
        }

        if (lowerInput.includes('instagram')) {
            return `📸 Kamal’s Instagram: ${socialMedia.instagram}`;
        }

        if (lowerInput.includes('mail') || lowerInput.includes('email')) {
            return `✉️ Kamal’s email: ${personalInfo.email}`;
        }

        // If no specific platform is mentioned → show full contact info
        return `📬 You can reach Kamal in the following ways:\n\n` +
            `📧 Email: ${personalInfo.email}\n` +
            `📱 Phone: ${personalInfo.phone}\n` +
            `💬 WhatsApp: ${socialMedia.whatsapp}\n` +
            `🔗 LinkedIn: ${socialMedia.linkedin}\n\n` +
            `Kamal is currently ${availability.status.toLowerCase()} and typically ${availability.responseTime.toLowerCase()}. ${availability.preferredContact} is the best way to connect!`;
    }


    isEducationQuery(input) {
        return ['education', 'degree', 'university', 'college', 'study', 'graduate', 'qualification', 'background', 'school', 'academic', 'studies', 'what did you study', 'where did you study', 'your education', 'educational background'].some(word => input.includes(word));
    }


    getEducationResponse(input = '') {
        const { education } = portfolioData;
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('school')) {
            const edu = education.school;
            return `For schooling, Kamal studied at ${edu.institution} and completed ${edu.level} in ${edu.year}. ${edu.details}`;
        }

        if (lowerInput.includes('college') || lowerInput.includes('university') || lowerInput.includes('bachelor') || lowerInput.includes('b.tech') || lowerInput.includes('graduation')) {
            const edu = education.college;
            return `Kamal holds a ${edu.degree} from ${edu.institution} (${edu.year}). ${edu.details}`;
        }

        // General fallback if user just says "education"
        return `Sure! Here's a quick overview of Kamal’s education:\n\n🎓 **College**: ${education.college.degree} from ${education.college.institution} (${education.college.year})\n📘 **Schooling**: ${education.school.level} from ${education.school.institution} (${education.school.year})\n\nLet me know if you want more details on either!`;
    }



    isSocialMediaQuery(input) {
        return ['social', 'github', 'linkedin', 'twitter', 'instagram', 'telegram', 'snapchat', 'discord', 'mail', 'whatsapp', 'profile', 'connect', 'follow', 'handle', 'social link', 'find you online', 'socials', 'online profile'].some(word => input.includes(word));
    }
    getSocialMediaResponse() {
        const { socialMedia } = portfolioData;
        return `You can find me on various platforms:\n\n` +
            `🔗 GitHub: ${socialMedia.github}\n` +
            `🔗 LinkedIn: ${socialMedia.linkedin}\n` +
            `🔗 Twitter: ${socialMedia.twitter}\n` +
            `🔗 Instagram: ${socialMedia.instagram}\n` +
            `🔗 Telegram: ${socialMedia.telegram}\n` +
            `🔗 Snapchat: ${socialMedia.snapchat}\n` +
            `🔗 Discord: ${socialMedia.discord}\n` +
            `✉️ Mail: ${socialMedia.mail}\n` +
            `📱 WhatsApp: ${socialMedia.whatsapp}\n` +
            `Feel free to connect with me on any of these platforms!`;
    }

    isCurrentActivityQuery(input) {
        return ['where is kamal', 'what is kamal doing', 'what’s kamal up to', 'kamal busy', 'can i talk to kamal', 'kamal available', 'kamal free', 'kamal now'].some(phrase => input.toLowerCase().includes(phrase));
    }

    getCurrentActivityResponse() {
        const now = new Date();
        const currentDay = now.getUTCDay(); // 0 = Sunday
        const currentHourIST = (now.getUTCHours() * 60 + now.getUTCMinutes() + portfolioData.currentStatus.timezoneOffset) / 60;
        const isSunday = currentDay === 0;

        const getStatus = () => {
            const now = new Date();
            const utcHour = now.getUTCHours();
            const utcMinutes = now.getUTCMinutes();
            const istOffset = 5.5 * 60;
            const totalMinutesIST = utcHour * 60 + utcMinutes + istOffset;
            const currentHourIST = Math.floor(totalMinutesIST / 60) % 24;
            const currentMinuteIST = Math.floor(totalMinutesIST % 60);
            const isSunday = now.getDay() === 0;

            const timeString = `Right now it's ${String(currentHourIST).padStart(2, '0')}:${String(currentMinuteIST).padStart(2, '0')} IST, so Kamal is probably `;

            if (currentHourIST >= 23 || currentHourIST < 7) {
                return `${timeString}sleeping 😴. He usually rests between 11 PM and 7 AM.`;
            }

            if (currentHourIST >= 7 && currentHourIST < 8) {
                return `${timeString}just waking up and getting ready to start the day. ☀️`;
            }

            if (currentHourIST >= 8 && currentHourIST < 9) {
                return `${timeString}having breakfast in the mess 🍽️.`;
            }

            if (currentHourIST >= 9 && currentHourIST < 12) {
                return `${timeString}attending his morning classes 📚.`;
            }

            if (currentHourIST >= 12 && currentHourIST < 14) {
                return `${timeString}enjoying his lunch break 🍛.`;
            }

            if (currentHourIST >= 14 && currentHourIST < 17) {
                return `${timeString}busy with lab sessions 🔬.`;
            }

            if (currentHourIST >= 17 && currentHourIST < 20) {
                return isSunday
                    ? `${timeString}relaxing — it's Sunday, and there's no gym today! 🧘‍♂️`
                    : `${timeString}at the gym working out 🏋️.`;
            }

            if (currentHourIST >= 20 && currentHourIST < 22) {
                return `${timeString}having dinner and winding down 🍽️.`;
            }

            if (currentHourIST >= 22 && currentHourIST < 23) {
                return `${timeString}finishing up the day and getting ready for bed. 🌙`;
            }

            return `${timeString}somewhere in between tasks or taking a short break. 😌`;
        };


        return getStatus();
    }
    isFreeTimeQuery(input) {
        return ['free', 'available', 'when can i call', 'are you free', 'can i call', 'busy', 'occupied', 'schedule', 'next free'].some(word => input.includes(word));
    }
    getFreeTimeResponse() {
        const now = new Date();
        const currentHourUTC = now.getUTCHours();
        const currentMinuteUTC = now.getUTCMinutes();
        const currentDay = now.getUTCDay(); // Sunday = 0
        const isSunday = currentDay === 0;

        const currentHourIST = (currentHourUTC + 5 + Math.floor((currentMinuteUTC + 30) / 60)) % 24;
        const currentTimeFormatted = `${currentHourIST.toString().padStart(2, '0')}:${((currentMinuteUTC + 30) % 60).toString().padStart(2, '0')} IST`;

        const schedule = [
            { start: 7, end: 8, label: "waking up and getting ready 🌅" },
            { start: 8, end: 9, label: "having breakfast 🍽️" },
            { start: 9, end: 12, label: "attending classes 📚" },
            { start: 12, end: 14, label: "having lunch 🍛" },
            { start: 14, end: 17, label: "in lab sessions 🔬" },
            { start: 17, end: 20, label: isSunday ? "chilling — no gym today 🧘‍♂️" : "working out at the gym 🏋️" },
            { start: 20, end: 22, label: "having dinner 🍽️" },
            { start: 22, end: 23, label: "winding down for the day 🌙" },
            { start: 23, end: 24, label: "sleeping 😴" },
            { start: 0, end: 7, label: "sleeping 😴" }
        ];

        const currentActivity = schedule.find(slot =>
            currentHourIST >= slot.start && currentHourIST < slot.end
        );

        const nextActivity = schedule.find(slot => currentHourIST < slot.start);
        this.context.awaitingContactConfirmation = true;

        if (isSunday) {
            return `Right now it's ${currentTimeFormatted}, and it's Sunday — Kamal is probably ${currentActivity?.label || "relaxing"}. He’s free today, feel free to reach out or call him anytime 📞.`;
        }

        if (currentHourIST >= 20 && currentHourIST < 23) {
            return `Right now it's ${currentTimeFormatted}, Kamal is probably ${currentActivity.label}. He’s usually free after 8 PM on working days, so you can reach out now ✅.`;
        }

        return `Right now it's ${currentTimeFormatted}, Kamal is ${currentActivity?.label}. After this, he'll be ${nextActivity?.label}. On working days, he’s usually free between 8 PM to 11 PM. Shall I remind you then? 📅`;
    }
    isContactConfirmation(input) {
        const keywords = [
            'yes', 'ok', 'sure', 'hmm', 'hm', 'share', 'share with me', 'give me',
            'show contact', 'contact info', 'show me', 'send it', 'send contact',
            'i want', 'need contact', 'quick', 'get in touch'
        ];

        return keywords.some(keyword => input.includes(keyword.toLowerCase()));
    }
    getFollowupContactResponse() {
        return `🙌 Thank you! You can call or WhatsApp him on +91 9680477712 — he’ll respond shortly!!`;
    }



    isNavigationQuery(input) {
        return ['navigate', 'find', 'where', 'section', 'page', 'menu', 'help'].some(word => input.includes(word));
    }

    getNavigationHelp() {
        return `I can help you navigate my portfolio! Here's what you can explore:\n\n🏠 Home: Overview and introduction\n💼 **Projects**: Detailed project showcases\n🛠️ **Skills**: Technical expertise and tools\n📧 Contact: Get in touch information\n📝 About: Personal background and experience\n\nWhat section would you like to learn more about?`;
    }

    isInappropriate(input) {
        const badWords = [
            'fuck', 'shit', 'bitch', 'bastard', 'asshole', 'dick', 'idiot', 'nonsense', 'bloody', 'crap',
            'moron', 'stupid', 'shut up', 'suck', 'lazy', 'whore', 'slut', 'fool', 'dumb', 'hate you',
            'abuse', 'fuck off', 'get lost', 'useless', 'sex', 'porn', 'horny', 'jerk',
            'madarchod', 'mc', 'bhen ke lund', 'bkl', 'bhosdike', 'bsdk', 'teri maa ki chut', 'aad', 'aand',
            'bahenchod', 'behenchod', 'bhenchod', 'bhenchodd', 'b.c.', 'bc', 'bakchod', 'bakchodd', 'bakchodi',
            'bevda', 'bewda', 'bevdey', 'bewday', 'bevakoof', 'bevkoof', 'bevkuf', 'bewakoof', 'bewkoof', 'bewkuf',
            'bhadua', 'bhaduaa', 'bhadva', 'bhadvaa', 'bhadwa', 'bhadwaa', 'bhosada', 'bhosda', 'bhosdaa', 'bhosdike',
            'bhonsdike', 'b.s.d.k', 'bhosdiki', 'bhosdiwala', 'bhosdiwale', 'bhosadchodal', 'bhosadchod',
            'babbe', 'babbey', 'bube', 'bubey', 'bur', 'burr', 'buurr', 'buur', 'charsi', 'chooche', 'choochi', 'chuchi',
            'chhod', 'chod', 'chodd', 'chudne', 'chudney', 'chudwa', 'chudwaa', 'chudwane', 'chudwaane', 'choot', 'chut',
            'chute', 'chutia', 'chutiya', 'chutiye', 'chuttad', 'chutad', 'dalaal', 'dalal', 'dalle', 'dalley', 'fattu',
            'gadha', 'gadhe', 'gadhalund', 'gaand', 'gand', 'gandu', 'gandfat', 'gandfut', 'gandiya', 'gandiye', 'goo', 'gu',
            'gote', 'gotey', 'gotte', 'hag', 'haggu', 'hagne', 'hagney', 'harami', 'haramjada', 'haraamjaada', 'haramzyada',
            'haraamzyaada', 'haraamjaade', 'haraamzaade', 'haraamkhor', 'haramkhor', 'jhat', 'jhaat', 'jhaatu', 'jhatu',
            'kutta', 'kutte', 'kuttey', 'kutia', 'kutiya', 'kuttiya', 'kutti', 'landi', 'landy', 'laude', 'laudey', 'laura',
            'lora', 'lauda', 'ling', 'loda', 'lode', 'lund', 'launda', 'lounde', 'laundey', 'laundi', 'loundi', 'laundiya',
            'loundiya', 'lulli', 'maar', 'maro', 'marunga', 'madarchodd', 'madarchood', 'madarchoot', 'madarchut',
            'm.c.', 'mamme', 'mammey', 'moot', 'mut', 'mootne', 'mutne', 'mooth', 'muth', 'nunni', 'nunnu', 'paaji', 'paji',
            'pesaab', 'pesab', 'peshaab', 'peshab', 'pilla', 'pillay', 'pille', 'pilley', 'pisaab', 'pisab', 'pkmkb',
            'porkistan', 'raand', 'rand', 'randi', 'randy', 'suar', 'tatte', 'tatti', 'tatty', 'ullu'
        ];

        return badWords.some(word => input.includes(word));
    }

    getInappropriateResponse() {
        const responses = [
            "This assistant is here to help you explore Kamal’s professional background. Let’s please keep the conversation respectful 🙏.",
            "I'd appreciate if we keep the tone polite. If you’d like to learn about Kamal’s skills or work, I’m here to assist.",
            "Inappropriate language isn’t allowed here. Please ask genuine questions if you’d like to know about Kamal’s projects or experience.",
            "Let’s keep things clean and professional. I'm here to assist with Kamal’s portfolio, not tolerate offensive language."
        ];
        return this.getRandomResponse(responses);
    }

    isRelationshipQuery(input) {
        const loveKeywords = [
            'girlfriend', 'gf', 'love', 'lover', 'partner', 'relationship',
            'wife', 'biwi', 'wali', 'crush', 'monu', 'shinavgi', 'shina',
            'do you love someone', 'who is your gf', 'are you dating', 'pyaar',
            'kya kisi se pyar hai', 'relationship status', 'have a lover',
            'kamal ki girlfriend', 'radhe ki gf'
        ];

        return loveKeywords.some(word => input.toLowerCase().includes(word));
    }

    getRelationshipResponse() {
        return `❤️ Kamal is in a happy relationship with a girl named Shinavgi, lovingly called Monu.\n\nThey met at IIITV-ICD, and their first interaction happened at the college mess. Later, they began chatting on Instagram, and slowly started opening up about deeper things — even about places like Dwarka 🛕.\n\nWith time, their bond grew stronger, and that's how their beautiful relationship began. Now they share a special connection and talk every day. 💬💞`;
    }

    getDefaultResponse() {
        const earlyResponses = [
            "Hmm, I didn’t quite catch that. You can ask me about Kamal’s skills, projects, experience, or how to get in touch with him. What would you like to know?",
            "That's a good question! I'm here to help you learn more about Kamal — his work, tech stack, past experiences, or even what he's currently up to 😊",
            "I'm Kamal’s virtual assistant! Feel free to ask me anything about his background, projects, or how you can connect with him.",
            "I couldn’t find a clear match for that, but no worries! I can guide you through Kamal’s education, technical strengths, or current availability. Try asking about one of those!"
        ];

        const laterResponses = [
            "Looks like we’ve covered quite a bit! If you have more questions about Kamal, feel free to ask — I’m always here to help 🤗",
            "If you're wrapping up, it was great chatting with you! You can always reach out to Kamal via the contact. 📧.",
            "That one’s a bit tricky, but I’ll keep improving! Meanwhile, I can still share more about Kamal’s journey, skills, or projects.",
            "Not sure about that — but I can definitely tell you more about Kamal’s profile, tech stack, or how to connect with him!"
        ];

        const responses = this.context.questionCount < 4 ? earlyResponses : laterResponses;
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
