
export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  problemStatement: string;
  architecture: string;
  outcomes: string[];
  description: string[];
  date: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export type SkillCategory = 'Cloud Platforms' | 'Operating Systems' | 'Networking' | 'DevOps & Tools' | 'Programming';

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
  usageDescription?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  skillsGained: string[];
}
