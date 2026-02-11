
import { Project, Skill, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Ayush Latwal",
  role: "Cloud Computing Specialist & Full Stack Developer",
  email: "ayushlatwal029@gmail.com",
  phone: "+91 7668995492",
  location: "India",
  github: "https://github.com/AyushLatwal",
  linkedin: "www.linkedin.com/in/ayush-latwal-34b8802a3",
  bio: "I am a Computer Science and Engineering graduate with a specialized focus on Cloud Computing and scalable software architecture. My technical journey is driven by a strong foundation in Object-Oriented Programming and Data Structures, complemented by a hands-on approach to infrastructure management through AWS and Linux environments. I have successfully bridged the gap between code and infrastructure by developing full-stack applications and high-performance system simulators, focusing on performance optimization and reliable deployment. My problem-solving methodology prioritizes modular, maintainable code and automated workflows. I am committed to continuous technical evolution, actively staying abreast of advancements in Generative AI tools and cloud-native technologies. Currently, I am seeking opportunities to leverage my skills in Cloud Engineering and Software Development to build resilient systems that address complex real-world challenges with efficiency and precision."
};

export const SKILLS: Skill[] = [
  // Cloud Platforms
  { name: "AWS", level: 85, icon: "cloud", category: "Cloud Platforms", usageDescription: "Managed EC2, S3, IAM, and VPC for scalable deployments." },
  { name: "Vercel", level: 90, icon: "external-link", category: "Cloud Platforms", usageDescription: "Optimized CI/CD pipelines for frontend hosting." },
  
  // Operating Systems
  { name: "Linux (Ubuntu)", level: 88, icon: "terminal", category: "Operating Systems", usageDescription: "Proficient in Bash scripting and server management." },
  { name: "VMware", level: 75, icon: "box", category: "Operating Systems", usageDescription: "Virtualized server environments for testing." },
  
  // Networking
  { name: "VPC & Routing", level: 80, icon: "layers", category: "Networking", usageDescription: "Designing secure network topographies." },
  { name: "DNS/HTTP(S)", level: 85, icon: "external-link", category: "Networking", usageDescription: "Managing domain records and secure protocols." },
  
  // DevOps & Tools
  { name: "Git / GitHub", level: 92, icon: "github", category: "DevOps & Tools", usageDescription: "Advanced version control and collaboration." },
  { name: "Docker", level: 70, icon: "box", category: "DevOps & Tools", usageDescription: "Containerizing microservices for consistent deployments." },
  { name: "GA4", level: 80, icon: "lightbulb", category: "DevOps & Tools", usageDescription: "Tracking user funnels for data-driven infra changes." },
  
  // Programming
  { name: "C++", level: 90, icon: "terminal", category: "Programming", usageDescription: "Built high-performance logic with STL and OOP." },
  { name: "Python", level: 82, icon: "code", category: "Programming", usageDescription: "Automating cloud tasks and data analysis." },
  { name: "Java", level: 78, icon: "cpu", category: "Programming", usageDescription: "Developed backend APIs and enterprise logic." }
];

export const PROJECTS: Project[] = [
  {
    id: "katachi-fashion",
    title: "Katachi: High-End Fashion E-Commerce",
    category: "Full Stack Development",
    technologies: ["React", "Java Spring Boot", "Tailwind CSS", "Stripe API", "AWS S3"],
    problemStatement: "Fashion retailers require highly visual, lightning-fast interfaces with secure checkout to maintain brand integrity and minimize cart abandonment.",
    architecture: "A modern React frontend communicating with a high-performance Java backend. Assets are offloaded to AWS S3 for global CDN delivery, while payments are handled via Stripe's secure infrastructure.",
    outcomes: [
      "Designed a minimalist 'Katachi' UI that improved user session duration by 25%.",
      "Integrated real-time inventory tracking and dynamic size recommendations.",
      "Achieved sub-2-second page loads through optimized asset delivery and code splitting."
    ],
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    description: [
      "Conceptualized and built 'Katachi' as a premium e-commerce experience with advanced filtering and search.",
      "Implemented secure authentication and user profiles for personalized shopping experiences.",
      "Utilized responsive design principles to ensure a seamless experience across mobile and desktop devices."
    ]
  },
  {
    id: "dice-game-simulator",
    title: "Cross-Platform Dice Simulator (C++ & Java)",
    category: "Software Engineering / Algorithms",
    technologies: ["C++", "Java", "OOP", "DSA", "Swing", "STL"],
    problemStatement: "Developing robust game logic that remains consistent across different programming paradigms and memory management models.",
    architecture: "Developed twin implementations in C++ (Manual memory management/STL) and Java (Garbage collected/Swing GUI) to compare performance and logic portability.",
    outcomes: [
      "Engineered a core probability engine capable of 1,000,000+ simulations per second in C++.",
      "Created an interactive GUI in Java for end-user visual feedback and game state management.",
      "Maintained 100% logic parity between the two versions, proving modular code design."
    ],
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    description: [
      "Implemented complex turn-based mechanics and room management for multiplayer simulation logic.",
      "Utilized C++ OOP principles to build a reusable 'Dice' class and 'Player' hierarchy.",
      "Built a Java Swing-based dashboard to visualize rolling statistics and player progression."
    ]
  },
  {
    id: "aws-3tier-infra",
    title: "High-Availability 3-Tier AWS Architecture",
    category: "Cloud Infrastructure",
    technologies: ["AWS VPC", "EC2", "RDS", "Auto-Scaling", "ALB"],
    problemStatement: "Organizations often struggle with single points of failure and manual scaling during traffic spikes, leading to downtime and performance bottlenecks.",
    architecture: "A decoupled architecture using Public Subnets for the Load Balancer, Private App Subnets for application logic, and Private Data Subnets for RDS, ensuring maximum security and scalability.",
    outcomes: [
      "Achieved zero-downtime during simulated server failures via Auto-Scaling Groups.",
      "Implemented IAM Least Privilege Principle, reducing security vulnerability surface by 60%.",
      "Cost-optimized resource usage by 30% through targeted instance scheduling."
    ],
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    description: [
      "Provisioned a VPC with isolated subnets across multiple Availability Zones for fault tolerance.",
      "Configured Application Load Balancer (ALB) to distribute traffic and perform health checks.",
      "Integrated Amazon RDS for a managed, scalable database backend with multi-AZ failover."
    ]
  }
];

export const TRAINING: Experience[] = [
  {
    company: "Cipher Schools (Edtech Company)",
    role: "CPP with OOP's Programming Training",
    period: "Jun 2025 - Jul 2025",
    description: [
      "Developed object-oriented applications using encapsulation, inheritance, polymorphism, and abstraction, ensuring modular and maintainable code architecture.",
      "Implemented complex data structures (STL, templates, pointers, dynamic memory management) to solve real-world programming problems efficiently."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "AWS Academy Cloud Foundations", 
    issuer: "AWS Academy", 
    date: "Jun 2025",
    skillsGained: ["Cloud Architecture", "AWS Core Services", "Security & Compliance"],
    url: "#"
  },
  { 
    name: "Generative AI and Generative AI Tools", 
    issuer: "Infosys", 
    date: "July 2025",
    skillsGained: ["Large Language Models", "Prompt Engineering", "AI Integration"],
    url: "#"
  },
  { 
    name: "Amazon AWS Bootstrap", 
    issuer: "Devtown", 
    date: "May 2023",
    skillsGained: ["Cloud Fundamentals", "Serverless Computing", "EC2 Basics"],
    url: "#"
  },
  { 
    name: "Responsive Web Design", 
    issuer: "Free Code Camp", 
    date: "Mar 2023",
    skillsGained: ["HTML5/CSS3", "Flexbox/Grid", "Accessibility"],
    url: "#"
  }
];

export const ACHIEVEMENTS = [
  "Participated in HackWithVertos 1.0, a 24-hour hackathon with over 200 other participants.",
  "Participated in a Youth Speak Forum with over 150 contestants.",
  "Bronze Medal in Python from HackerRank."
];

export const EDUCATION = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    period: "Nov 2025 - Present",
    score: "CGPA: 6.33"
  },
  {
    institution: "G.R.D. International School",
    degree: "Intermediate",
    period: "May 2022 - May 2023",
    score: "Percentage: 85%"
  },
  {
    institution: "G.R.D. International School",
    degree: "Matriculation",
    period: "Mar 2020 - May 2021",
    score: "Percentage: 89%"
  }
];
