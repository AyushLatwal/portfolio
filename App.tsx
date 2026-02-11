
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Cloud, 
  Code, 
  Terminal, 
  Award, 
  Briefcase, 
  GraduationCap,
  MessageSquare,
  ArrowUpRight,
  User,
  Zap,
  Layout,
  Cpu,
  Box,
  HardDrive,
  Layers,
  Lightbulb,
  FileText,
  MousePointer2,
  Info,
  ShieldCheck,
  Rocket,
  Search,
  CheckCircle2,
  Medal,
  Copy,
  Check,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  TRAINING, 
  CERTIFICATIONS, 
  ACHIEVEMENTS, 
  EDUCATION 
} from './constants';
import { Project, Skill, SkillCategory } from './types';

const IconMap: Record<string, React.ReactNode> = {
  terminal: <Terminal size={18} />,
  code: <Code size={18} />,
  cpu: <Cpu size={18} />,
  cloud: <Cloud size={18} />,
  box: <Box size={18} />,
  github: <Github size={18} />,
  "external-link": <ExternalLink size={18} />,
  "hard-drive": <HardDrive size={18} />,
  layers: <Layers size={18} />,
  lightbulb: <Lightbulb size={18} />,
  "file-code": <Code size={18} />,
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [showUsage, setShowUsage] = useState(false);

  return (
    <div 
      className="relative p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group overflow-hidden cursor-pointer select-none active:scale-[0.98]"
      onClick={() => setShowUsage(!showUsage)}
      onMouseEnter={() => setShowUsage(true)}
      onMouseLeave={() => setShowUsage(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
            {IconMap[skill.icon] || <Code size={18} />}
          </span>
          <span className="font-bold text-sm tracking-tight">{skill.name}</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
      </div>
      
      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-1">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-500 rounded-full"
        ></motion.div>
      </div>

      <AnimatePresence>
        {showUsage && skill.usageDescription && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-blue-600 p-4 flex items-center justify-center text-center z-10"
          >
            <p className="text-[11px] font-bold leading-tight text-white">
              {skill.usageDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  // Fixed: Applied 'as const' to ensure 'easeOut' is treated as a literal easing type rather than a generic string, fixing transition property errors.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const skillCategories: SkillCategory[] = [
    'Cloud Platforms',
    'Operating Systems',
    'Networking',
    'DevOps & Tools',
    'Programming'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] p-4 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-95"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-glass border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={scrollToTop}
            className="text-2xl font-black tracking-tighter cursor-pointer"
          >
            <span className="gradient-text">AYUSH</span>
            <span className="text-slate-500">.LATWAL</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10 text-xs font-black tracking-[0.2em] uppercase">
            {['About', 'Skills', 'Projects', 'Certs', 'Experience'].map((item) => (
              <a key={item} href={`#${item.toLowerCase() === 'certs' ? 'certifications' : item.toLowerCase()}`} className="text-slate-500 hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all">
              Contact
            </a>
          </div>

          <button className="md:hidden text-slate-300" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-6 overflow-hidden"
            >
              {['About', 'Skills', 'Projects', 'Certifications', 'Experience'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-xl font-bold">{item}</a>
              ))}
              <a href="#contact" onClick={toggleMenu} className="text-xl font-bold text-blue-400">Hire Me</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open for Cloud & SDE Roles
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none"
            >
              <span className="block">AYUSH</span>
              <span className="gradient-text block">LATWAL</span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-10 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase"
            >
              <span className="flex items-center"><Cloud size={14} className="mr-2 text-blue-500" /> Cloud Computing</span>
              <span className="text-slate-800 hidden sm:block">|</span>
              <span className="flex items-center"><Zap size={14} className="mr-2 text-blue-500" /> AWS</span>
              <span className="text-slate-800 hidden sm:block">|</span>
              <span className="flex items-center"><Terminal size={14} className="mr-2 text-blue-500" /> Linux</span>
              <span className="text-slate-800 hidden sm:block">|</span>
              <span className="flex items-center"><Layers size={14} className="mr-2 text-blue-500" /> Networking</span>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Architecting <span className="text-white">resilient cloud infrastructures</span> and scalable systems to solve <span className="text-white">complex engineering challenges</span>.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="#projects" className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center group active:scale-95">
                View Projects <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={copyEmail}
                className="px-10 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-lg transition-all border border-slate-800 flex items-center justify-center group active:scale-95"
              >
                {copied ? 'Email Copied!' : 'Copy Email'} {copied ? <Check size={20} className="ml-2 text-green-500" /> : <Copy size={20} className="ml-2 group-hover:scale-110 transition-transform" />}
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 flex justify-center space-x-8 text-slate-600"
            >
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-all hover:-translate-y-1">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-800 animate-float"
        >
          <MousePointer2 size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl aspect-[4/5] bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                  alt="Ayush Latwal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100 opacity-80" 
                />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-[2px] w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Professional Profile</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Bridging <span className="text-blue-500">Code</span> and <span className="text-indigo-400">Infrastructure</span></h2>
              <div className="space-y-6 text-slate-400">
                <p className="text-lg leading-relaxed font-medium text-slate-200">
                  {PERSONAL_INFO.bio.split('.')[0]}.
                </p>
                <p className="leading-relaxed">
                  {PERSONAL_INFO.bio.split('.').slice(1, -1).join('.')}.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-12 pt-10 border-t border-slate-800/50">
                <div className="p-4 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-default">
                  <h4 className="font-mono uppercase tracking-[0.2em] text-[9px] text-slate-500 mb-2">Primary Expertise</h4>
                  <p className="text-slate-100 font-black flex items-center text-sm"><Cloud size={14} className="mr-2 text-blue-500" /> Cloud Architecture</p>
                </div>
                <div className="p-4 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-default">
                  <h4 className="font-mono uppercase tracking-[0.2em] text-[9px] text-slate-500 mb-2">Focus Domain</h4>
                  <p className="text-slate-100 font-black flex items-center text-sm"><Cpu size={14} className="mr-2 text-indigo-400" /> Scalable Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Technical Arsenal</h2>
            <p className="text-slate-400 font-medium">Specialized tools and technologies structured for building resilient cloud-native infrastructures.</p>
            <div className="flex items-center justify-center mt-6 text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">
              <Info size={14} className="mr-2" /> Click on a skill to toggle usage details
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {skillCategories.map((category) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-1 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Featured Work</h2>
              <p className="text-slate-400 font-medium">Engineering challenges I've tackled across cloud architecture, automation, and enterprise systems.</p>
            </div>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="group inline-flex items-center text-xs font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors">
              GitHub Repository <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setActiveProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all shadow-xl flex flex-col cursor-pointer active:scale-[0.99]"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[9px] font-black text-blue-500 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-4 group-hover:text-blue-400 transition-colors leading-tight min-h-[3rem]">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8 flex-1">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 text-[10px] font-bold uppercase tracking-tight">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-slate-500 text-[9px] font-bold">+{project.technologies.length - 3} More</span>
                    )}
                  </div>
                  <div 
                    className="flex items-center font-black text-[10px] text-white uppercase tracking-[0.2em] group/btn mt-auto"
                  >
                    View Case Study <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-[2px] w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Validated Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-16">Certifications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.a 
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col h-full group active:scale-95"
              >
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500 w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Award size={24} />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{cert.issuer}</span>
                <h3 className="text-xl font-black mb-6 leading-tight group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                
                <div className="space-y-4 mb-8 flex-1">
                  <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-[9px] font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                  <span className="text-[10px] font-bold text-slate-600 uppercase">{cert.date}</span>
                  <div className="text-blue-500 group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="flex items-center space-x-4 mb-16">
                <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-600">
                  <Briefcase size={32} />
                </div>
                <h2 className="text-4xl font-black">Training</h2>
              </div>
              <div className="space-y-12">
                {TRAINING.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-slate-800 pb-12 last:pb-0">
                    <div className="absolute top-0 left-[-7px] w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                    <span className="text-[10px] font-black text-slate-600 mb-3 block tracking-[0.2em] uppercase">{exp.period}</span>
                    <h3 className="text-2xl font-black mb-2">{exp.role}</h3>
                    <div className="text-blue-500 font-bold mb-6 text-sm">{exp.company}</div>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed font-medium">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-16">
                <div className="p-4 rounded-2xl bg-indigo-600/10 text-indigo-500">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-4xl font-black">Education</h2>
              </div>
              <div className="space-y-12">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-slate-800 pb-12 last:pb-0">
                    <div className="absolute top-0 left-[-7px] w-3 h-3 rounded-full bg-indigo-600"></div>
                    <span className="text-[10px] font-black text-slate-600 mb-3 block tracking-[0.2em] uppercase">{edu.period}</span>
                    <h3 className="text-2xl font-black mb-2 leading-tight">{edu.institution}</h3>
                    <div className="text-indigo-400 font-bold mb-4 text-sm">{edu.degree} {edu.major ? `in ${edu.major}` : ''}</div>
                    <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-black">
                      {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-12">Key Achievements</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col items-center group cursor-default"
                >
                   <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-all">
                    <Medal size={24} />
                  </div>
                  <p className="text-slate-300 text-sm font-bold leading-relaxed">{ach}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal (Case Study View) */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-lg">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-6xl max-h-[92vh] rounded-[2.5rem] overflow-hidden flex flex-col relative shadow-[0_0_80px_rgba(37,99,235,0.15)]"
            >
              <div className="flex items-center justify-between p-8 md:p-10 border-b border-slate-800/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <span className="text-blue-500 font-black tracking-[0.3em] text-[9px] uppercase">{activeProject.category} • {activeProject.date}</span>
                    <h2 className="text-2xl md:text-3xl font-black leading-tight">{activeProject.title}</h2>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16">
                <div className="grid md:grid-cols-12 gap-12">
                  <div className="md:col-span-7 space-y-10">
                    <section>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center">
                        <Search className="mr-2" size={14} /> The Challenge
                      </h4>
                      <p className="text-lg text-slate-200 font-medium leading-relaxed">
                        {activeProject.problemStatement}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center">
                        <Rocket className="mr-2" size={14} /> Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeProject.technologies.map(tech => (
                          <span key={tech} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-tight">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                  
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl sticky top-0 group">
                      <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                   <section>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center">
                      <Layers className="mr-2" size={14} /> Architecture Overview
                    </h4>
                    <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/10 mb-8">
                      <p className="text-slate-300 leading-relaxed font-medium italic">
                         "{activeProject.architecture}"
                      </p>
                    </div>
                    <ul className="space-y-6">
                      {activeProject.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mt-1.5 mr-4 min-w-[8px] h-2 rounded-full bg-blue-600"></div>
                          <p className="text-slate-400 leading-relaxed text-sm font-medium">{desc}</p>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center">
                      <CheckCircle2 className="mr-2" size={14} /> Key Outcomes & ROI
                    </h4>
                    <div className="space-y-4">
                      {activeProject.outcomes.map((outcome, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center space-x-4 group hover:border-blue-500/30 transition-all cursor-default">
                          <ShieldCheck size={20} className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                          <p className="text-slate-200 text-sm font-bold tracking-tight">{outcome}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 flex gap-4">
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex-1 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center active:scale-95">
                        <Github size={18} className="mr-3" /> View Source
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[3rem] bg-slate-900/50 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-20 bg-blue-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h2 className="text-5xl font-black mb-8 leading-tight">Start a conversation.</h2>
                  <p className="text-blue-100 text-lg mb-16 font-medium">
                    Currently open to specialized Cloud Internships and Software Engineering roles across India.
                  </p>
                  <div className="space-y-10">
                    <button 
                      onClick={copyEmail}
                      className="flex items-center space-x-6 group text-left w-full hover:bg-white/5 p-4 -ml-4 rounded-2xl transition-all"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-blue-500 transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-blue-200 text-[10px] uppercase font-black tracking-widest mb-1">Email (Click to Copy)</div>
                        <div className="font-black text-xl break-all">{copied ? 'COPIED!' : PERSONAL_INFO.email}</div>
                      </div>
                    </button>
                    <div className="flex items-center space-x-6 p-4 -ml-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-blue-200 text-[10px] uppercase font-black tracking-widest mb-1">Direct Dial</div>
                        <div className="font-black text-xl">{PERSONAL_INFO.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-20">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-5 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-all font-bold text-sm text-white placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-6 py-5 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-all font-bold text-sm text-white placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Message</label>
                    <textarea rows={4} placeholder="Hello, I'd like to discuss a project..." className="w-full px-6 py-5 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-all resize-none font-bold text-sm text-white placeholder:text-slate-600"></textarea>
                  </div>
                  <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center group active:scale-[0.98]">
                    Send Inquiry <MessageSquare size={18} className="ml-3 group-hover:scale-110 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-800/50 text-center">
        <div className="container mx-auto px-6">
          <div 
            onClick={scrollToTop}
            className="text-2xl font-black mb-8 tracking-tighter cursor-pointer inline-block"
          >
            <span className="gradient-text uppercase">Ayush Latwal</span>
          </div>
          <div className="flex justify-center space-x-6 mb-10 text-slate-500">
             <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><Github size={20} /></a>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-500 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">© 2025 Optimized for Cloud Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
