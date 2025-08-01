import React, { useState, useEffect } from 'react';

import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Server,
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  GitBranch,
  Monitor,
  Terminal,
  Settings,
  Award,
  Calendar,
  Building
} from 'lucide-react';
// import ContactForm from './ContactForm';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  
  const titleText = "DevOps Engineer";
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // ✅ Prevent reload
    setStatus("Sending...");
    console.log("Submitting form:", formData);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Message sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong.");
    }
  };
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < titleText.length) {
        setTypedText(titleText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'AWS Cloud', icon: <Cloud className="w-6 h-6" />, level: 90 },
    { name: 'Linux', icon: <Cloud className="w-6 h-6" />, level: 95 },
    { name: 'Git & Github', icon: <Cloud className="w-6 h-6" />, level: 90 },
    { name: 'Docker', icon: <Database className="w-6 h-6" />, level: 88 },
    { name: 'Kubernetes', icon: <Server className="w-6 h-6" />, level: 85 },
    { name: 'Jenkins', icon: <GitBranch className="w-6 h-6" />, level: 92 },
    { name: 'Terraform', icon: <Code className="w-6 h-6" />, level: 87 },
    { name: 'Ansible', icon: <Settings className="w-6 h-6" />, level: 85 },
    { name: 'Python', icon: <Terminal className="w-6 h-6" />, level: 88 },
    { name: 'Prometheus', icon: <Monitor className="w-6 h-6" />, level: 82 },
    { name: 'Grafana', icon: <Cloud className="w-6 h-6" />, level: 80 },

  ];

  const projects = [
    {
      title: "Insure Me (Insurance Domain)",
      description: "Designed and deployed a microservices-based insurance application with automated CI/CD pipeline using Git, Jenkins, Docker, Ansible, and AWS. Integrated Prometheus and Grafana for real-time monitoring.",
      technologies: ["Jenkins", "Docker", "AWS", "Ansible", "Prometheus", "Grafana"],
      domain: "Insurance",
      link: "#"
    },
    {
      title: "Finance Me (Banking Domain)",
      description: "Developed a secure microservices architecture for banking sector with automated CI/CD workflows. Configured comprehensive monitoring dashboards for real-time performance analytics.",
      technologies: ["Maven", "Jenkins", "Docker", "Terraform", "Ansible", "Prometheus"],
      domain: "Banking & Finance",
      link: "#"
    },
    {
      title: "Medi Cure (Healthcare Domain)",
      description: "Built a centralized patient-doctor management platform with automated infrastructure provisioning using Terraform, Kubernetes, and Ansible for seamless deployments.",
      technologies: ["Terraform", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
      domain: "Healthcare",
      link: "#"
    }
  ];

  const experience = [
    {
      company: "Maitri AI",
      position: "DevOps Engineer",
      period: "May 2025 – Present",
      description: "Gained hands-on experience in cloud infrastructure, CI/CD automation, and deployment strategies. Worked on automating application deployments using Jenkins, Docker, and Kubernetes.",
      type: "Professional"
    },
    {
      company: "High Catch Private Limited (Star Agile)",
      position: "Certified DevOps Engineer",
      period: "Sept 2024 – March 2025",
      description: "Gained hands-on experience in cloud infrastructure, CI/CD automation, and deployment strategies. Worked on automating application deployments using Jenkins, Docker, and Kubernetes.",
      type: "Training"
    },
    {
      company: "Textronics Design System",
      position: "Junior Software Developer",
      period: "Feb 2024 – July 2024",
      description: "Enhanced company websites and developed functional web features using JavaScript. Implemented debugging techniques, form validation, and data filtration for optimized performance.",
      type: "Internship"
    }
  ];

  const certifications = [
    {
  title: "DevOps Engineer",
  issuer: "STAR AGILE",
  icon: <Award className="w-6 h-6" />,
  link: "https://staragile.com/devops-certification"
},

    {
      title: "DevOps Fundamentals",
      issuer: "IBM",
      icon: <Server className="w-6 h-6" />,
       link: "https://staragile.com/devops-certification"
    },
    {
      title: "Docker Essentials",
      issuer: "IBM",
      icon: <Database className="w-6 h-6" />,
       link: "https://www.linkedin.com/in/vigneshwarpadayachi/"
    },
    {
      title: "Scalable Web Applications on Kubernetes",
      issuer: "IBM",
      icon: <Cloud className="w-6 h-6" />,
       link: "https://staragile.com/devops-certification"
    },
    {
      title: "Cloud Computing Basics",
      issuer: "NPTEL",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "SIES College of Management Studies, University of Mumbai",
      location: "Navi Mumbai",
      period: "July 2024",
      cgpa: "7.91"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Yashwantrao Chavan Maharashtra Open University",
      location: "Nashik",
      period: "June 2022",
      cgpa: "7.97"
    }
  ];

  return (
    <div className="bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-cyan-400">
              Vigneshwar.Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8">
          {/* Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-400 to-green-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder Avatar - Replace with your image */}
                  <img 
                    src="" 
                    alt="Profile pic"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Vigneshwar Padayachi
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">
              {typedText}<span className="animate-pulse">|</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
              Aspiring DevOps Engineer with hands-on expertise in cloud infrastructure, CI/CD automation, and container orchestration
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>padayachivigneshwar@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Cloud className="w-5 h-5" />
              <span>AWS Cloud</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <GitBranch className="w-5 h-5" />
              <span>CI/CD</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-400">
              <Database className="w-5 h-5" />
              <span>Containers</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Explore My Journey
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Passionate About DevOps Excellence</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As an aspiring DevOps Engineer, I bring hands-on expertise in cloud infrastructure, CI/CD automation, 
                and container orchestration. I'm passionate about optimizing deployments, enhancing system reliability, 
                and streamlining workflows to bridge the gap between development and operations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey includes practical experience with AWS cloud services, Jenkins automation, Docker containerization, 
                and Kubernetes orchestration. I've worked on real-world projects across insurance, banking, and healthcare domains, 
                implementing robust DevOps practices and monitoring solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-cyan-400 text-2xl font-bold">3+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-green-400 text-2xl font-bold">4+</div>
                  <div className="text-gray-300 text-sm">Projects Ongoing</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-orange-400 text-2xl font-bold">5+</div>
                  <div className="text-gray-300 text-sm">Certifications</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-purple-400 text-2xl font-bold">100%</div>
                  <div className="text-gray-300 text-sm">Dedication</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700 p-6 rounded-lg">
                <Cloud className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-300">Expertise in AWS cloud services, infrastructure provisioning, and cloud-native solutions.</p>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <GitBranch className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">CI/CD Automation</h4>
                <p className="text-gray-300">Building robust pipelines with Jenkins, Maven, and GitHub Actions for seamless deployments.</p>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <Monitor className="w-8 h-8 text-orange-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Monitoring & Analytics</h4>
                <p className="text-gray-300">Implementing comprehensive monitoring with Prometheus and Grafana for system observability.</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-green-400">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400">{edu.degree}</h4>
                      <p className="text-white text-sm">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{edu.period}</p>
                      <p className="text-green-400 font-semibold">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-green-400 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">{exp.position}</h3>
                    <p className="text-lg text-white flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.company}
                    </p>
                    <span className="inline-block bg-cyan-600 text-white px-2 py-1 rounded text-xs mt-2">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-green-400 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">
                      {project.domain}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 group-hover:text-green-400 transition-colors mr-3">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Certified</span>
                  <a href={cert} target='_blank'><ExternalLink className="w-4 h-4 text-gray-400 hover:text-cyan-400 transition-colors" /></a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative DevOps projects, 
                or just talking about the latest in cloud technologies and automation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">padayachivigneshwar@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">+91 9326358483</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Mumbai, India</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/InvincibleVicky" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/vigneshwarpadayachi" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name" value={formData.name} onChange={handleChange} placeholder="Name" required
                  
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email" value={formData.email} onChange={handleChange} placeholder="Email" required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                   name="message" value={formData.message} onChange={handleChange} placeholder="Message" required
                 
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Vigneshwar Padayachi. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;