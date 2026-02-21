import React from 'react'

const About = () => {
  const experience = [
    {
      role: "Python Backend Developer Intern",
      company: "Brandstrek Coders Private Limited, HiLite Business Park, Calicut",
      duration: "Dec '25 — Present",
      desc: "Working on Xchools, a production level School ERP. Built scalable REST APIs using Django & DRF, implemented background tasks with Celery/Redis, and containerized applications using Docker.",
    },
    {
      role: "Python Backend Developer Intern",
      company: "Cricanalyst Private Limited, KINFRA Advanced Technology Park, Ramanattukara",
      duration: "Sep '25 — Nov '25",
      desc: "Designed FastAPI architecture for cricket analytics systems. Optimized MySQL database integrations and processed large scale sports datasets.",
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Gen Corpus Data Hub, Calicut",
      duration: "Oct '25 — Jan '26",
      desc: "Developed a Smart City Service Feedback Portal. Focused on frontend/backend performance and usability using the MERN stack.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Summary & Education */}
          <div className="space-y-12">
            <div className="border-l-4 border-black pl-8 py-2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase">
                Professional <br /> Summary
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Experienced Python Backend Developer currently working at <span className="text-black font-black">Brandstrek Coders</span> on production level School ERP systems with AI Assistant integration.
                Skilled in Django, FastAPI, Celery, and Docker for scalable backend architectures. 
                <span className="block mt-4 text-gray-500 italic">
                  Proficient in leveraging cutting edge AI driven development environments and LLMs, including <strong>Antigravity</strong>, <strong>Lovable</strong>, <strong>Cursor</strong>, <strong>ChatGPT</strong>, and <strong>Gemini</strong>, alongside <strong>VS Code</strong>, to accelerate software delivery and maintain high-quality code standards.
                </span>
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-8 rounded-[40px] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest flex items-center">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs mr-3">🎓</span>
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-black text-gray-900">MSc. in Computer Science</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-tight">Farook College • 2013 — 2015</p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900">Full Stack Development</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-tight">Corpus Data Hub • 2024 — 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Experience */}
          <div className="space-y-10">
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest flex items-center ml-2">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs mr-3">💼</span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="group p-8 bg-white border border-black/5 rounded-[32px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{exp.role}</h4>
                      <p className="text-sm font-bold text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-full text-gray-500 uppercase tracking-widest">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About