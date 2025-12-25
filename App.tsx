
import React, { useState } from 'react';
import { 
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
  Award,
  BookOpen,
  ArrowRight,
  Github,
  CheckCircle2
} from 'lucide-react';
import { Language } from './types';
import { translations, experience, projects, education } from './data';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const SkillBadge: React.FC<{ text: string }> = ({ text }) => (
    <span className="px-3 py-1 bg-slate-900 text-blue-400 text-xs font-bold rounded-lg border border-slate-800 shadow-sm transition-all hover:border-blue-500/40">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">H</div>
              <span className="text-xl font-extrabold tracking-tighter text-white">HARSHA <span className="text-blue-500">V.</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['about', 'skills', 'experience', 'projects', 'education'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </a>
              ))}
              
              <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-full border border-slate-800">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-slate-500'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('de')}
                  className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all ${lang === 'de' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-slate-500'}`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black text-green-400 uppercase tracking-[0.2em]">{t.availableBadge}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              AI AGENT <br/>
              <span className="gradient-text">AUTOMATION</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
              {t.hero.role}. Solving complex industrial challenges with Multi-Agent Systems, RAG, and Computer Vision.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40 flex items-center gap-3">
                {t.nav.contact} <ArrowRight size={20} />
              </a>
              <div className="flex items-center space-x-3">
                <a href="https://linkedin.com/in/hanumanthu1" target="_blank" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-500 transition-all"><Linkedin size={24} /></a>
                <a href="mailto:harsha.vardhan@fau.de" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-500 transition-all"><Mail size={24} /></a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-800 aspect-square group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" 
                alt="AI Robotics"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-slate-950/60 backdrop-blur-xl rounded-3xl border border-white/5 border-t-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/50"><Cpu className="text-white" /></div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Project</p>
                    <p className="text-white font-bold">Multi-Agent RCA @ Siemens</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-500/10 rounded-2xl rotate-12 -z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">01. {t.profile.title}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">BRIDGING RESEARCH <br/>& PRODUCTION</h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
                {t.profile.text}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <CheckCircle2 className="text-blue-500" />, title: "Explainable AI", desc: "Focus on industrial reliability." },
                  { icon: <CheckCircle2 className="text-blue-500" />, title: "Scalable Workflows", desc: "Enterprise-ready automation." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">{t.languages.title}</h4>
                <div className="space-y-6">
                  {['en', 'de'].map((l) => (
                    <div key={l}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold">{t.languages[l as keyof typeof t.languages]}</span>
                        <span className="text-xs font-black text-blue-500 uppercase">{l === 'en' ? t.languages.fluent : t.languages.intermediate}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]" 
                          style={{ width: l === 'en' ? '95%' : '60%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center">
                  <p className="text-4xl font-black text-white">2+</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Years Exp</p>
                </div>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center">
                  <p className="text-4xl font-black text-white">10+</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">02. {t.skills.title}</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">CORE TECH STACK</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Bot size={32} />, title: t.skills.categories.ai, items: ['LangGraph', 'LLAMA 3.1', 'RAG Pipelines', 'AutoGen'] },
              { icon: <Cpu size={32} />, title: t.skills.categories.automation, items: ['n8n', 'Zapier', 'Make', 'REST APIs'] },
              { icon: <Code size={32} />, title: t.skills.categories.programming, items: ['Python', 'SQL', 'C++', 'MATLAB'] },
              { icon: <Database size={32} />, title: t.skills.categories.dataScience, items: ['PySpark', 'Pandas', 'CNNs', 'Tableau'] }
            ].map((cat, i) => (
              <div key={i} className="group p-10 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/40 transition-all duration-500">
                <div className="w-16 h-16 bg-slate-800 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-6 tracking-tight">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => <SkillBadge key={item} text={item} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-8 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">JOURNEY</h2>
            <div className="flex-1 h-[1px] bg-slate-800"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Work History</span>
          </div>

          <div className="space-y-16">
            {experience[lang].map((item, idx) => (
              <div key={idx} className="relative pl-12 border-l-2 border-slate-800 group">
                <div className="section-dot group-hover:scale-150 transition-transform"></div>
                <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                    <div>
                      <h4 className="text-2xl font-black text-white mb-2">{item.role}</h4>
                      <p className="text-blue-500 font-black text-xs uppercase tracking-widest">{item.company}</p>
                    </div>
                    <div className="px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-400 leading-relaxed font-medium text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-8 border-t border-slate-800/50 flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={12} className="text-blue-500" /> {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">04. {t.projects.title}</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">SELECTED WORKS</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects[lang].map((p, idx) => (
              <div key={idx} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={idx === 0 
                      ? "https://images.unsplash.com/photo-1518433278981-d162217f7c2e?q=80&w=1200" 
                      : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
                    } 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-10">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2 block">{p.year}</span>
                    <h4 className="text-2xl font-black text-white tracking-tight">{p.title}</h4>
                  </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-10 flex-1">
                    {p.description.map((d, i) => (
                      <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-600/50 rounded-full mt-2 flex-shrink-0"></div>
                        {d}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
                    <button className="flex items-center gap-3 text-blue-400 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors group/btn">
                      Explore Technical Details <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="flex gap-4 text-slate-500">
                      <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
                      <ExternalLink size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">{t.education.title}</h2>
          </div>
          
          <div className="space-y-8">
            {education[lang].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 bg-slate-900 p-10 rounded-[3rem] border border-slate-800 group hover:border-blue-500/40 transition-all">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-4 gap-4">
                    <h4 className="text-2xl font-black text-white tracking-tight">{item.degree}</h4>
                    <span className="text-[10px] font-black text-slate-500 bg-slate-950 px-4 py-2 rounded-xl uppercase tracking-widest">{item.period}</span>
                  </div>
                  <p className="text-lg font-bold text-blue-500 mb-6 uppercase tracking-widest">{item.school}</p>
                  {item.details && (
                    <div className="flex flex-wrap gap-2">
                      {item.details.map(d => <SkillBadge key={d} text={d} />)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">LET'S BUILD <br/> THE FUTURE.</h2>
                  <p className="text-xl text-blue-100/70 font-medium leading-relaxed max-w-md">{t.contact.subtitle}</p>
                </div>
                
                <div className="space-y-8">
                  <a href="mailto:harsha.vardhan@fau.de" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg text-white font-bold">harsha.vardhan@fau.de</p>
                    </div>
                  </a>
                  
                  <a href="tel:+4917657799028" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">Mobile</p>
                      <p className="text-lg text-white font-bold">+49 176 577 99028</p>
                    </div>
                  </a>
                </div>

                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/hanumanthu1" target="_blank" className="p-4 bg-white/10 rounded-2xl text-white hover:bg-white/20 transition-all"><Linkedin size={28} /></a>
                  <a href="#" className="p-4 bg-white/10 rounded-2xl text-white hover:bg-white/20 transition-all"><Github size={28} /></a>
                </div>
              </div>

              <div className="bg-slate-950/40 backdrop-blur-3xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-200 uppercase tracking-widest">{t.contact.name}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-200 uppercase tracking-widest">{t.contact.email}</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-200 uppercase tracking-widest">{t.contact.message}</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-white text-indigo-900 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-50 transition-all active:scale-95">
                    {t.contact.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">H</div>
              <span className="text-lg font-black tracking-tight text-white uppercase">HARSHA <span className="text-blue-500">V.</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Engineering autonomous multi-agent ecosystems for the next generation of industrial intelligence.
            </p>
          </div>
          
          <div className="flex gap-12">
            {['about', 'experience', 'projects'].map(item => (
              <a key={item} href={`#${item}`} className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">{t.nav[item as keyof typeof t.nav]}</a>
            ))}
          </div>

          <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} HANUMANTHU HARSHA VARDHAN
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
