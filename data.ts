
import { TranslationData, ExperienceItem, EducationItem, ProjectItem } from './types';

export const experience: Record<string, ExperienceItem[]> = {
  en: [
    {
      period: "Aug 2025 - Present",
      role: "Master Thesis Project – Multi-Agent System for Root Cause Analysis",
      company: "Siemens AG",
      location: "Amberg, Germany",
      bullets: [
        "Developing a multi-agent system for automated root cause analysis in manufacturing.",
        "Implementing agents for perception, reasoning, retrieval, and decision support.",
        "Integrating local LLMs, retrieval pipelines, and reliability metrics used in industrial production."
      ]
    },
    {
      period: "Jan 2025 - Mar 2025",
      role: "Computer Vision Intern",
      company: "Siemens AG",
      location: "Amberg, Germany",
      bullets: [
        "Built a vision-based AI agent for PCB inspection using CNNs and real-time image processing.",
        "Designed an end-to-end workflow combining computer vision, Python logic, dashboards, and automation tools such as n8n and Zapier.",
        "Improved defect detection accuracy and reduced manual QA work through automated processing.",
        "Experimented with modular agent architectures inspired by LangGraph."
      ]
    },
    {
      period: "Aug 2024 - Apr 2025",
      role: "Student Research Assistant – AI and Automation",
      company: "Institute FAPS",
      location: "Nuremberg, Germany",
      bullets: [
        "Developed a RAG system for industrial knowledge retrieval using local embedding models.",
        "Integrated trustworthiness and verification metrics for industrial decision support.",
        "Worked on retrieval pipelines, prototype agent workflows, and reliability evaluation."
      ]
    },
    {
      period: "Sep 2021 - May 2022",
      role: "Senior Executive – Data Analytics",
      company: "IndiaMART InterMESH Ltd.",
      location: "India",
      bullets: [
        "Optimized SQL queries, shell scripts, and Python automation workflows.",
        "Performed data analysis for BI reporting using Python and Tableau.",
        "Automated scheduled job validations and reporting checks, reducing manual workload."
      ]
    },
    {
      period: "Jan 2020 - Feb 2021",
      role: "Project Coordinator – Data and Systems",
      company: "RT Vision Technologies Pvt. Ltd.",
      location: "India",
      bullets: [
        "Managed ERP system data and reduced system downtime through structured processes.",
        "Supported decision-making with data analysis across multiple departments.",
        "Designed templates and reporting formats that improved project turnaround time."
      ]
    }
  ],
  de: [
    {
      period: "Aug 2025 - Heute",
      role: "Masterarbeit – Multi-Agenten-System zur Ursachenanalyse",
      company: "Siemens AG",
      location: "Amberg, Deutschland",
      bullets: [
        "Entwicklung eines Multi-Agenten-Systems zur automatisierten Ursachenanalyse in der Fertigung.",
        "Implementierung von Agenten für Wahrnehmung, Argumentation, Abruf und Entscheidungsunterstützung.",
        "Integration von lokalen LLMs, Retrieval-Pipelines und Zuverlässigkeitsmetriken in der industriellen Produktion."
      ]
    },
    {
      period: "Jan 2025 - Mar 2025",
      role: "Praktikant im Bereich Computer Vision",
      company: "Siemens AG",
      location: "Amberg, Deutschland",
      bullets: [
        "Entwicklung eines vision-basierten KI-Agenten für die Leiterplatteninspektion mit CNNs und Echtzeit-Bildverarbeitung.",
        "Entwurf eines End-to-End-Workflows unter Kombination von Computer Vision, Python-Logik, Dashboards und Automatisierungstools wie n8n und Zapier.",
        "Verbesserung der Fehlererkennungsgenauigkeit und Reduzierung der manuellen QS-Arbeit durch automatisierte Verarbeitung.",
        "Experimentieren mit modularen Agentenarchitekturen inspiriert durch LangGraph."
      ]
    },
    {
      period: "Aug 2024 - Apr 2025",
      role: "Wissenschaftliche Hilfskraft – KI und Automatisierung",
      company: "Lehrstuhl FAPS",
      location: "Nürnberg, Deutschland",
      bullets: [
        "Entwicklung eines RAG-Systems für den industriellen Wissensabruf unter Verwendung lokaler Embedding-Modelle.",
        "Integration von Vertrauenswürdigkeits- und Verifizierungsmetriken zur industriellen Entscheidungsunterstützung.",
        "Arbeit an Retrieval-Pipelines, Prototyp-Agenten-Workflows und Zuverlässigkeitsbewertung."
      ]
    }
  ]
};

export const projects: Record<string, ProjectItem[]> = {
  en: [
    {
      year: "2024",
      title: "Agentic AI Workflows using LLAMA 3.1, AutoGen, and LangGraph",
      description: [
        "Developed multi-agent workflows for business process automation using n8n, custom Python agents, and local LLMs.",
        "Improved efficiency through automated task routing, document parsing, and workflow triggers."
      ]
    },
    {
      year: "2023",
      title: "Deep Learning Model for Fake Image Detection",
      description: [
        "Built a CNN-based classifier for detecting fake images and evaluated performance using ROC curves and confusion matrices.",
        "Implemented preprocessing and data augmentation using TensorFlow and Keras."
      ]
    }
  ],
  de: [
    {
      year: "2024",
      title: "Agentische KI-Workflows mit LLAMA 3.1, AutoGen und LangGraph",
      description: [
        "Entwicklung von Multi-Agenten-Workflows zur Geschäftsprozessautomatisierung mit n8n, benutzerdefinierten Python-Agenten und lokalen LLMs.",
        "Steigerung der Effizienz durch automatisiertes Task-Routing, Dokumentenparsing und Workflow-Trigger."
      ]
    },
    {
      year: "2023",
      title: "Deep Learning Modell zur Erkennung gefälschter Bilder",
      description: [
        "Erstellung eines CNN-basierten Klassifikators zur Erkennung von Fake-Bildern und Bewertung der Leistung anhand von ROC-Kurven und Konfusionsmatrizen.",
        "Implementierung von Vorverarbeitung und Datenausweitung mit TensorFlow und Keras."
      ]
    }
  ]
};

export const education: Record<string, EducationItem[]> = {
  en: [
    {
      period: "Oct 2022 - Oct 2025",
      degree: "Master of Science – Electromobility (ACES)",
      school: "FAU Erlangen-Nürnberg",
      details: ["AI and Autonomous Driving", "Battery Management", "Connectivity", "Sustainable Mobility"]
    },
    {
      period: "Jun 2015 - May 2019",
      degree: "Bachelor of Technology – Mechanical Engineering",
      school: "SRM University"
    }
  ],
  de: [
    {
      period: "Okt 2022 - Okt 2025",
      degree: "Master of Science – Elektromobilität (ACES)",
      school: "FAU Erlangen-Nürnberg",
      details: ["KI und autonomes Fahren", "Batteriemanagement", "Konnektivität", "Nachhaltige Mobilität"]
    },
    {
      period: "Jun 2015 - Mai 2019",
      degree: "Bachelor of Technology – Maschinenbau",
      school: "SRM University"
    }
  ]
};

export const translations: Record<string, any> = {
  en: {
    availableBadge: "Available for Work",
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      role: "AI Agent Automation Engineer",
      cta: "Explore My Work"
    },
    profile: {
      title: "Profile",
      text: "I work on developing practical AI systems that combine automation, multi-agent collaboration, and intelligent workflows. My experience includes building computer vision pipelines, RAG-based knowledge retrieval systems, and workflow automation setups using tools such as n8n, Make, Zapier, and local LLM frameworks. I focus on building stable, explainable, and scalable AI-driven solutions that integrate well into real industrial and business environments."
    },
    skills: {
      title: "Skills & Expertise",
      categories: {
        ai: "AI & Agentic Systems",
        automation: "Automation Tools",
        programming: "Programming",
        dataScience: "Data Science",
        cv: "Computer Vision",
        cloud: "Cloud & Data Platforms",
        tools: "Development Tools",
        soft: "Soft Skills"
      }
    },
    experience: {
      title: "Work Experience"
    },
    projects: {
      title: "Featured Projects"
    },
    education: {
      title: "Education"
    },
    languages: {
      title: "Languages",
      en: "English",
      de: "German",
      fluent: "Fluent",
      intermediate: "Intermediate"
    },
    certifications: {
      title: "Certifications"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's build the future of AI automation together.",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message"
    }
  },
  de: {
    availableBadge: "Verfügbar für Projekte",
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      education: "Ausbildung",
      contact: "Kontakt"
    },
    hero: {
      role: "AI Agent Automation Engineer",
      cta: "Arbeiten ansehen"
    },
    profile: {
      title: "Profil",
      text: "Ich entwickle praxisnahe KI-Systeme, die Automatisierung, Multi-Agenten-Kollaboration und intelligente Workflows kombinieren. Meine Erfahrung umfasst den Aufbau von Computer-Vision-Pipelines, RAG-basierten Wissensabrufsystemen und Workflow-Automatisierungs-Setups unter Verwendung von Tools wie n8n, Make, Zapier und lokalen LLM-Frameworks. Mein Fokus liegt auf dem Aufbau stabiler, erklärbarer und skalierbarer KI-gesteuerter Lösungen, die sich gut in reale Industrie- und Geschäftsumgebungen integrieren lassen."
    },
    skills: {
      title: "Fähigkeiten & Expertise",
      categories: {
        ai: "KI & Agentische Systeme",
        automation: "Automatisierungstools",
        programming: "Programmierung",
        dataScience: "Data Science",
        cv: "Computer Vision",
        cloud: "Cloud- & Datenplattformen",
        tools: "Entwicklungstools",
        soft: "Soft Skills"
      }
    },
    experience: {
      title: "Berufserfahrung"
    },
    projects: {
      title: "Ausgewählte Projekte"
    },
    education: {
      title: "Ausbildung"
    },
    languages: {
      title: "Sprachen",
      en: "Englisch",
      de: "Deutsch",
      fluent: "Verhandlungssicher",
      intermediate: "Mittelstufe"
    },
    certifications: {
      title: "Zertifizierungen"
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Lassen Sie uns gemeinsam die Zukunft der KI-Automatisierung gestalten.",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      message: "Nachricht",
      send: "Nachricht senden"
    }
  }
};
