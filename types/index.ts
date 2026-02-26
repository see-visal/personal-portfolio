export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    facebook: string;
    telegram: string;
    email: string;
}

export interface NavItem {
    title: string;
    href: string;
}
