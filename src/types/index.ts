// Centralized TypeScript Interfaces for Rohan Bhattacharjee's Portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  bio: string;
  detailedBio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  discord?: string;
}

export type SkillCategory = 
  | 'Languages' 
  | 'Backend & Data' 
  | 'Cloud & DevOps' 
  | 'Tools' 
  | 'Soft Skills';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconName: string;
  colorClass: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  role: string;
  features: string[];
  accentColor: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  bulletPoints: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}

export interface Achievement {
  id: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  url: string;
  year: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  iconName: string;
  colorClass: string; // e.g. 'accent-pink', 'accent-blue'
  details: string[];
}
