
import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Globe, 
  Cpu, 
  Bot, 
  Code, 
  Database, 
  Terminal, 
  Layers,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Language } from './types';
import { translations, experience, projects, education } from './data';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const SkillBadge: React.FC<{ text: string }> = ({ text }) => (
    <span className="px-3 py-1 bg-slate-800 text-blue-400 text-sm font-medium rounded-full mb-2 mr-2 border border-slate-700 inline-block">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-white">Harsha <span className="text-blue-500">Vardhan</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{t.nav.about}</a>
              <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{t.nav.skills}</a>
              <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{t.nav.experience}</a>
              <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{t.nav.projects}</a>
              
              <div className="flex items-center space-x-1 bg-slate-900/50 p-1 rounded-full border border-slate-800">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('de')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'de' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  DE
                </button>
              </div>
            </div>

            {/* Mobile language toggle only */}
            <div className="md:hidden flex items-center bg-slate-900 p-1 rounded-full border border-slate-800">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('de')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'de' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
                >
                  DE
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-0 right-0 -mr-32 mt-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{t.availableBadge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Engineering <br/>
              <span className="gradient-text">Intelligent Systems</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              {t.hero.role}. Designing scalable multi-agent workflows, neural-network-driven inspection, and automated industrial RAG pipelines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2">
                {t.nav.contact} <ArrowRight size={20} />
              </a>
              <div className="flex items-center space-x-4 ml-2">
                <a href="https://linkedin.com/in/hanumanthu1" target="_blank" className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Linkedin size={24} /></a>
                <a href="mailto:harsha.vardhan@fau.de" className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"><Mail size={24} /></a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI Automation"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500 rounded-lg"><Cpu size={20} className="text-white" /></div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">Project Focus</p>
                        <p className="text-sm font-bold text-white leading-none">Multi-Agent RCA</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                <span className="w-12 h-[2px] bg-blue-600"></span> {t.profile.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {t.profile.text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: <MapPin size={18} />, text: "Nuremberg, Germany" },
                   { icon: <Mail size={18} />, text: "harsha.vardhan@fau.de" },
                   { icon: <Phone size={18} />, text: "+49 176 577 99028" },
                   { icon: <Globe size={18} />, text: "www.evehicleshop.in" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                      <div className="text-blue-500">{item.icon}</div>
                      <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
               <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                   <Award className="text-blue-500" /> {t.languages.title}
                 </h3>
                 <div className="space-y-6">
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-sm font-bold text-slate-300 tracking-wide uppercase">{t.languages.en}</span>
                       <span className="text-sm text-blue-400 font-bold">{t.languages.fluent}</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-full h-2">
                       <div className="bg-blue-600 h-2 rounded-full w-[95%] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-sm font-bold text-slate-300 tracking-wide uppercase">{t.languages.de}</span>
                       <span className="text-sm text-blue-400 font-bold">{t.languages.intermediate}</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-full h-2">
                       <div className="bg-blue-600 h-2 rounded-full w-[60%] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 text-center">
                    <p className="text-4xl font-black text-white mb-1">2+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">Years Exp</p>
                 </div>
                 <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 text-center">
                    <p className="text-4xl font-black text-white mb-1">10+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">Projects</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{t.skills.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Core competencies in cutting-edge automation frameworks and industrial AI integration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Bot />, label: t.skills.categories.ai, skills: ['LangChain', 'LangGraph', 'LLM Pipelines', 'Multi-Agent Systems'] },
              { icon: <Cpu />, label: t.skills.categories.automation, skills: ['n8n', 'Make', 'Zapier', 'API Integrations'] },
              { icon: <Code />, label: t.skills.categories.programming, skills: ['Python', 'C++', 'SQL', 'MATLAB'] },
              { icon: <Database />, label: t.skills.categories.dataScience, skills: ['NumPy', 'Pandas', 'PySpark', 'Scikit-learn'] }
            ].map((cat, i) => (
              <div key={i} className="group p-8 bg-slate-900/50 rounded-[2rem] border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-800 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-6 tracking-tight">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => <SkillBadge key={s} text={s} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.experience.title}</h2>
            <div className="flex-1 h-[1px] bg-slate-800"></div>
          </div>
          
          <div className="space-y-12">
            {experience[lang].map((item, idx) => (
              <div key={idx} className="relative pl-12 border-l border-slate-800 group">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-slate-900 border-2 border-blue-500 rounded-full -left-[6px] top-2 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-500"></div>
                
                <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-slate-700 transition-colors shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                      <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">{item.company}</p>
                    </div>
                    <div className="bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
                      <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                    <MapPin size={14} /> {item.location}
                  </p>
                  
                  <ul className="space-y-4">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-400 leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{t.projects.title}</h2>
            <p className="text-slate-400">Transforming conceptual research into deployed industrial applications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects[lang].map((p, idx) => (
              <div key={idx} className="group overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                   <img 
                    src={idx === 0 
                      ? "https://images.unsplash.com/photo-1518433278981-d162217f7c2e?q=80&w=1000&auto=format&fit=crop" 
                      : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                    }
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                   <div className="absolute top-6 right-6">
                      <div className="px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black text-white uppercase tracking-widest shadow-lg">
                        {p.year}
                      </div>
                   </div>
                   <div className="absolute bottom-6 left-8 right-8">
                      <h3 className="text-2xl font-bold text-white leading-tight">{p.title}</h3>
                   </div>
                </div>
                
                <div className="p-10 pt-6 flex-1 flex flex-col">
                  <ul className="space-y-4 text-slate-400 mb-8 flex-1">
                    {p.description.map((d, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-blue-500/30 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
                    <button className="flex items-center gap-3 text-blue-400 font-bold hover:text-white transition-colors group/btn">
                      Case Study <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="flex gap-4">
                       <Github size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
                       <ExternalLink size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.education.title}</h2>
            <div className="flex-1 h-[1px] bg-slate-800"></div>
          </div>
          
          <div className="grid gap-8">
            {education[lang].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-500">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                    <span className="text-sm font-bold text-slate-500 bg-slate-800 px-4 py-1 rounded-full self-start">{item.period}</span>
                  </div>
                  <p className="text-lg text-blue-500 font-bold mb-6 tracking-wide uppercase">{item.school}</p>
                  {item.details && (
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((d, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs font-medium text-slate-400">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        {/* Contact background deco */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative">
            {/* Animated deco patterns */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">{t.contact.title}</h2>
                  <p className="text-blue-100/80 text-lg leading-relaxed">{t.contact.subtitle}</p>
                </div>
                
                <div className="space-y-6">
                  <a href="mailto:harsha.vardhan@fau.de" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest mb-1">Send an Email</p>
                      <p className="text-lg text-white font-medium">harsha.vardhan@fau.de</p>
                    </div>
                  </a>
                  
                  <a href="tel:+4917657799028" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest mb-1">Call Me</p>
                      <p className="text-lg text-white font-medium">+49 176 577 99028</p>
                    </div>
                  </a>
                </div>

                <div className="flex gap-6 pt-4">
                   <a href="https://linkedin.com/in/hanumanthu1" target="_blank" className="text-white hover:text-blue-200 hover:scale-110 transition-all"><Linkedin size={32} /></a>
                   <a href="#" className="text-white hover:text-blue-200 hover:scale-110 transition-all"><Github size={32} /></a>
                </div>
              </div>

              <form className="space-y-4 bg-slate-950/20 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-blue-100 uppercase tracking-wider">{t.contact.name}</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-white/40 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-blue-100 uppercase tracking-wider">{t.contact.email}</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-white/40 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-blue-100 uppercase tracking-wider">{t.contact.message}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-white/40 transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-white text-blue-800 rounded-xl font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-900 bg-[#010411]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold tracking-tight text-white">Harsha <span className="text-blue-500">Vardhan</span></span>
            <p className="text-slate-500 text-sm mt-2 max-w-xs leading-relaxed">AI Agent Automation Engineer bridging the gap between research and industrial deployment.</p>
          </div>
          
          <div className="flex gap-10">
             <a href="#about" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">About</a>
             <a href="#projects" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Work</a>
             <a href="#contact" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>

          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Hanumanthu Harsha Vardhan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
