
export type Language = 'en' | 'de';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  details?: string[];
}

export interface ProjectItem {
  year: string;
  title: string;
  description: string[];
}

export interface TranslationData {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    role: string;
    cta: string;
  };
  profile: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    categories: {
      ai: string;
      automation: string;
      programming: string;
      dataScience: string;
      cv: string;
      cloud: string;
      tools: string;
      soft: string;
    }
  };
  experience: {
    title: string;
  };
  projects: {
    title: string;
  };
  education: {
    title: string;
  };
  languages: {
    title: string;
    en: string;
    de: string;
    fluent: string;
    intermediate: string;
  };
  certifications: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}
