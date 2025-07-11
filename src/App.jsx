import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, User, Code, Smile, Mail, Phone, Linkedin, Github, GraduationCap, Lightbulb, Theater, HeartHandshake, Link as LinkIcon, Mountain, BookUser } from 'lucide-react';

// --- Data from Resume ---
const portfolioData = {
  name: "Lakshya Kanungo",
  title: "Software Engineer",
  location: "Jaipur, India",
  email: "lakshyaislearning@gmail.com",
  phone: "+918946955670",
  linkedin: "https://www.linkedin.com/in/lakshyakanungo/",
  github: "https://github.com/lakshyakanungo",
  about: "A passionate Software Engineer with experience in building robust and scalable web applications. Skilled in Ruby on Rails, React.js, and a variety of other modern technologies. I enjoy solving complex problems and continuously learning new things. Currently contributing to critical applications at Apple (via Bigbinary).",
  experience: [
    {
      company: "Apple (via Bigbinary)",
      role: "Software Engineer",
      period: "March 2024 - Present",
      location: "Remote",
      description: [
        "Implemented key features and resolved bugs for apps critical to the functioning of the global marketing team, supporting ~8,000 Apple employees, including senior leadership.",
        "Integrated a real-time messaging tool to allow discussions in the projects. Also added support for custom pins for the messages.",
        "Improved querying with Elasticsearch for showing faster and more relevant results for the directory user search.",
        "Automated external user addition to appropriate Apple Directory groups which reduced the support requests by ~50%.",
        "Integrated Disclosure into the new Planning projects workflow to streamline confidentiality management.",
        "Co-led the rails version upgrade for the Planning application from Rails 6 to 7."
      ]
    },
    {
      company: "Bigbinary",
      role: "Software Engineer",
      period: "July 2023 - Present",
      location: "Remote",
      description: [
        "Introduced read receipts for activity and mention notifications, ensuring critical information acknowledgment.",
        "Developed a task dependency service allowing users to link tasks and auto-populate due dates based on effort estimates.",
        "Standardized code across products. Extracted out multiple reusable components and methods."
      ]
    },
    {
      company: "Ecowrap",
      role: "Frontend Developer Intern",
      period: "June 2022 - July 2022",
      location: "Jaipur, India",
      description: [
        "Revamped the UI of user dashboard leading to easier user experience for ~1000 clients.",
        "Developed HR section of CRM allowing quicker new hire process and simpler existing employees' details management."
      ]
    }
  ],
  projects: [
    {
      name: "Scribble",
      description: "A full-featured content management system.",
      features: [
        "Create, edit, publish and manage articles.",
        "Articles are versioned and can be restored to a previous one.",
        "Enable password protection.",
        "Add redirections from old to new URLs."
      ],
      techStack: ["Ruby on Rails", "React.js", "PostgreSQL"],
      links: {}
    },
    {
      name: "MovieDekho",
      description: "A React web app to search for any movie or series and get details about it, similar to IMDb.",
      features: [
        "Fully responsive design for all devices.",
        "Dynamic theme changer (light/dark mode).",
        "Fetches data from an external API."
      ],
      techStack: ["React.js", "Node.js"],
      links: {
        github: "https://github.com/Lakshyakanungo/react-movie-app",
        hosted: "https://moviedekhlo.netlify.app/"
      }
    }
  ],
  skills: ["Ruby on Rails", "React.js", "Stimulus", "Express.js", "Node.js", "React Query", "jQuery", "RSpec", "MySQL", "PostgreSQL", "Elasticsearch", "JavaScript", "Ruby", "C++", "SCSS", "LangChain", "LangGraph", "OpenAI API"],
  education: {
    institution: "NIT Jaipur",
    degree: "Bachelor of Technology, Chemical Engineering",
    period: "July 2019 - June 2023"
  },
  lifeStuff: [
      {
        title: "Drama",
        icon: Theater,
      },
      {
        title: "NGO Work",
        icon: HeartHandshake,
      },
      {
        title: "Teaching",
        icon: BookUser,
      },
      {
        title: "Nature Walks",
        icon: Mountain,
      }
    ]
};

// --- Components ---

const Header = ({ activeSection }) => {
  const navItems = ["Home", "Experience", "About Me", "Skills & Education", "Projects", "Life Stuff", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavItemId = (item) => item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gray-800">
              {portfolioData.name}
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${getNavItemId(item)}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === getNavItemId(item)
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${getNavItemId(item)}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === getNavItemId(item) ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Section = ({ id, title, icon, children }) => (
    <section id={id} className="section-marker py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                    {React.cloneElement(icon, { className: "w-8 h-8 mr-3 text-gray-600" })}
                    {title}
                </h2>
            </div>
            {children}
        </div>
    </section>
);


const Home = () => {
    return (
        <section id="home" className="section-marker min-h-screen flex items-center justify-center text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                    Hi, I'm <span className="text-green-600">{portfolioData.name}</span>.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                    A {portfolioData.title} based in {portfolioData.location}. I build things for the web.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105">
                        LinkedIn
                    </a>
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const Experience = () => (
    <Section id="experience" title="Work Experience" icon={<Briefcase />}>
        <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-green-200">
                {portfolioData.experience.map((job, index) => (
                    <div key={index} className="mb-12 ml-10">
                        <span className="absolute -left-[0.85rem] flex items-center justify-center w-8 h-8 bg-green-200 rounded-full ring-8 ring-white">
                            <Briefcase className="w-5 h-5 text-green-800" />
                        </span>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full mt-2 sm:mt-0">{job.period}</span>
                            </div>
                            <p className="text-md font-semibold text-gray-700 mb-1">{job.company}</p>
                            <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {job.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const AboutMe = () => (
    <Section id="about-me" title="About Me" icon={<User />}>
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed bg-white/50 p-8 rounded-lg shadow-sm">
                {portfolioData.about}
            </p>
        </div>
    </Section>
);

const SkillsAndEducation = () => (
    <Section id="skills-education" title="Skills & Education" icon={<GraduationCap />}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2 text-green-600" />
                    Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2 text-green-600" />
                    Education
                </h3>
                <p className="text-lg font-semibold text-gray-900">{portfolioData.education.institution}</p>
                <p className="text-md text-gray-600">{portfolioData.education.degree}</p>
                <p className="text-sm text-gray-500">{portfolioData.education.period}</p>
            </div>
        </div>
    </Section>
);

const Projects = () => (
    <Section id="projects" title="Projects" icon={<Code />}>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
            {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                             <span className="font-semibold text-gray-700">Tech:</span>
                            {project.techStack.map(tech => (
                                <span key={tech} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {project.links.hosted && (
                                <a href={project.links.hosted} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                                    <LinkIcon className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const LifeStuff = () => (
    <Section id="life-stuff" title="Life Beyond Code" icon={<Smile />}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {portfolioData.lifeStuff.map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <activity.icon className="w-12 h-12 mb-4 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">
                        {activity.title}
                    </h3>
                </div>
            ))}
        </div>
    </Section>
);

const Contact = () => (
    <Section id="contact" title="Get In Touch" icon={<Mail />}>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team. Feel free to reach out.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-4">
                <a href={`mailto:${portfolioData.email}`} className="flex items-center justify-center text-lg text-gray-800 hover:text-green-600 transition-colors">
                    <Mail className="w-5 h-5 mr-2" /> {portfolioData.email}
                </a>
                <p className="flex items-center justify-center text-lg text-gray-800">
                    <Phone className="w-5 h-5 mr-2" /> {portfolioData.phone}
                </p>
                <div className="flex justify-center space-x-6 pt-4">
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors group">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors group">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </Section>
);


// --- Main App Component ---
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef(null);

  // This effect handles the subtle background pattern and smooth scrolling
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      body {
        background-color: #f9fafb;
        background-image: radial-gradient(#d1fae5 1px, transparent 1px);
        background-size: 15px 15px;
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll spying
    observer.current = new IntersectionObserver((entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
        if (visibleSection) {
            setActiveSection(visibleSection.id);
        }
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = document.querySelectorAll('.section-marker');
    sections.forEach((section) => {
        if (observer.current) {
            observer.current.observe(section);
        }
    });

    return () => {
      document.head.removeChild(style);
      sections.forEach((section) => {
        if (observer.current) {
            observer.current.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="antialiased text-gray-800 font-sans">
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <Experience />
        <AboutMe />
        <SkillsAndEducation />
        <Projects />
        <LifeStuff />
        <Contact />
      </main>
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
