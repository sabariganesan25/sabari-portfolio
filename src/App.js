import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Database, Server, Globe, Award, Calendar, MapPin, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'internships', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['C++', 'Python', 'Java', '.NET', 'C#', 'Visual Basic'],
    web: ['HTML', 'CSS', 'JavaScript', 'FastAPI'],
    frameworks: ['ReactJS', 'Tailwind CSS'],
    technical: ['Machine Learning', 'Data Science', 'OOPS', 'Networking'],
    tools: ['VS Code', 'Colab', 'Jupyter Notebook', 'GitHub'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL']
  };

  const projects = [
    {
      title: "Hostel Management System",
      description: "Developed a web-based hostel management system for room allocation, fee management, and attendance tracking, featuring authentication and real-time updates.",
      tech: ["ReactJS", "FastAPI", "PostgreSQL"],
      category: "College Project"
    },
    {
      title: "Security Analysis & Implementation",
      description: "Developed a 3-level security system incorporating image-based authentication, facial recognition, and OTP verification for UI and MySQL database management.",
      tech: ["Java Swing", "MySQL", "Image-based Authentication", "OTP"],
      category: "Security System"
    },
    {
      title: "Rogue Wi-Fi Access Point Detection",
      description: "Designed a dual-module system for network security, detecting rogue access points and performing real-time packet classification to identify anomalies and threats.",
      tech: ["Stack ESP32", "Python", "Scapy", "Streamlit", "Machine Learning"],
      category: "Network Security"
    }
  ];

  const internships = [
    {
      title: "Next-Generation Data Networking Intern",
      company: "BSNL",
      year: "2022",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Hostel Management System Development Intern",
      company: "AURCC College",
      year: "2024",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: "Bit-AL-M Hackathon Finalist",
      description: "Participated in the first national-level hackathon with my team, advancing to the finals, 2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "HACK HUSTLE Competition Winner",
      description: "Winner of the 4th edition of Saveetha Engineering College hackathon, focusing on Machine learning and Cybersecurity, 2024",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              SABARI GANESAN K
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'internships', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              {['home', 'about', 'skills', 'projects', 'internships', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-teal-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 mb-8 shadow-2xl shadow-blue-500/25">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  SG
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            SABARI GANESAN K
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
            Aspiring Artificial Intelligence & Data Scientist
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:sabariganesan257@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 font-medium">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://github.com/sabari/" className="flex items-center gap-2 px-8 py-4 border border-slate-600 rounded-full hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 font-medium">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate B.Tech AI & DS student at Anna University Regional Campus, Chennai, 
                with a strong foundation in artificial intelligence, data science, and software development. 
                Currently maintaining a CGPA of 8.0, I'm dedicated to creating innovative solutions that 
                bridge technology and real-world problems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Chennai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">+91-9944683122</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">sabariganesan257@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Current Education</h3>
                <p className="text-white font-medium">B.Tech AI & DS</p>
                <p className="text-slate-300">Anna University Regional Campus</p>
                <p className="text-slate-400">CGPA: 8.0 | Currently in Progress</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 p-6 rounded-2xl border border-teal-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Previous Education</h3>
                <p className="text-white font-medium">Diploma in CSE</p>
                <p className="text-slate-300">Alahappa Government Polytechnic College</p>
                <p className="text-slate-400">Percentage: 90 | 2020-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              return (
                <div key={category} className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="h-32 bg-gradient-to-r from-blue-600/80 to-teal-600/80 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                    <ExternalLink className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-blue-300 rounded text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                  {internship.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{internship.title}</h3>
                  <p className="text-blue-400 font-medium">{internship.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400">{internship.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 p-6 rounded-2xl border border-blue-500/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">Diploma in .NET</h4>
                <p className="text-blue-400">BHARAT SEVAK SAMAJ</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">Diploma in Python</h4>
                <p className="text-blue-400">BHARAT SEVAK SAMAJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology and AI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:sabariganesan257@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full hover:scale-105 transition-all duration-300 text-white font-medium shadow-lg shadow-blue-500/25"
            >
              <Mail className="w-6 h-6" />
              sabariganesan257@gmail.com
            </a>
            
            <a
              href="tel:+919944683122"
              className="flex items-center gap-3 px-8 py-4 border border-blue-500/30 rounded-full hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-teal-600/20 transition-all duration-300 text-white font-medium backdrop-blur-sm"
            >
              <Phone className="w-6 h-6" />
              +91-9944683122
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sabari/"
              className="p-4 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 border border-blue-500/30 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a
              href="https://github.com/sabari/"
              className="p-4 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 border border-blue-500/30 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Sabari Ganesan K. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;