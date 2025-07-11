import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Code, Heart, Coffee, Camera, Music } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = {
    frameworks: ['Ruby on Rails', 'Stimulus', 'Express.js'],
    libraries: ['React.js', 'Node.js', 'React Query', 'jQuery', 'RSpec'],
    databases: ['MySQL', 'PostgreSQL', 'Elasticsearch'],
    languages: ['JavaScript', 'Ruby', 'C++', 'SCSS'],
    aiTools: ['LangChain', 'LangGraph', 'OpenAI API']
  };

  const experiences = [
    {
      company: 'Apple (via Bigbinary)',
      position: 'Software Engineer',
      duration: 'March 2024 - Present',
      location: 'Remote',
      achievements: [
        'Implemented key features and resolved bugs for apps critical to the functioning of the global marketing team, supporting ~8,000 Apple employees, including senior leadership.',
        'Integrated a real-time messaging tool to allow discussions in the projects. Also added support for custom pins for the messages.',
        'Improved querying with Elasticsearch for showing faster and more relevant results for the directory user search.',
        'Automated external user addition to appropriate Apple Directory groups which reduced the support requests by ~50%.',
        'Integrated Disclosure into the new Planning projects workflow to streamline confidentiality management.',
        'Co-led the rails version upgrade for the Planning application from Rails 6 to 7.'
      ]
    },
    {
      company: 'Bigbinary',
      position: 'Software Engineer',
      duration: 'July 2023 - Present',
      location: 'Remote',
      achievements: [
        'Introduced read receipts for activity and mention notifications, ensuring critical information acknowledgment.',
        'Developed a task dependency service allowing users to link tasks and auto-populate due dates based on effort estimates.',
        'Standardized code across products. Extracted out multiple reusable components and methods.'
      ]
    },
    {
      company: 'Ecowrap',
      position: 'Frontend Developer Intern',
      duration: 'June 2022 - July 2022',
      location: 'Jaipur, India',
      achievements: [
        'Revamped the UI of user dashboard leading to easier user experience for ~1000 clients.',
        'Developed HR section of CRM allowing quicker new hire process and simpler existing employees\' details management.'
      ]
    }
  ];

  const projects = [
    {
      name: 'Scribble',
      description: 'A comprehensive article management system with versioning and security features.',
      features: [
        'Create, edit, publish and manage articles',
        'Articles are versioned and can be restored to a previous one',
        'Enable password protection. Also add redirections from old to new urls'
      ],
      tech: ['Ruby on Rails', 'JavaScript', 'PostgreSQL'],
      links: []
    },
    {
      name: 'MovieDekho',
      description: 'A React web app to search for movies and series with detailed information like IMDB.',
      features: [
        'Search for any movie or series and get details about it like IMDB',
        'Fully responsive design for all devices',
        'Theme changer for better user experience'
      ],
      tech: ['React.js', 'Node.js'],
      links: [
        { name: 'GitHub', url: 'https://github.com/Lakshyakanungo/react-movie-app' },
        { name: 'Live Demo', url: 'https://moviedekhlo.netlify.app/' }
      ]
    }
  ];

  const lifeStuff = [
    { icon: Coffee, title: 'Coffee Enthusiast', description: 'Always brewing the perfect cup' },
    { icon: Code, title: 'Open Source Contributor', description: 'Contributing to the community' },
    { icon: Camera, title: 'Photography', description: 'Capturing moments and memories' },
    { icon: Music, title: 'Music Lover', description: 'Coding soundtrack curator' }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">LK</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'experience', 'about', 'projects', 'blogs', 'life-stuff', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 px-3 py-2 rounded-md ${
                    activeSection === section
                      ? 'text-green-600 font-semibold bg-green-50'
                      : 'text-gray-600 hover:text-green-500 hover:bg-green-50/50'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Lakshya Kanungo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Software Engineer crafting digital experiences
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/lakshyakanungo" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/lakshyakanungo/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="mailto:lakshyaislearning@gmail.com"
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Mail className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">8000+</div>
              <div className="text-gray-600">Users Impacted</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-gray-600">Support Requests Reduced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.position}</h3>
                    <p className="text-xl text-green-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{exp.duration}</p>
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Background</h3>
              <p className="text-gray-700 mb-6">
                I'm a passionate Software Engineer with a strong foundation in full-stack development.
                Currently working at Apple (via Bigbinary), I've had the privilege of building applications
                that serve thousands of users, including senior leadership teams.
              </p>
              <p className="text-gray-700 mb-6">
                I graduated from NIT Jaipur with a B.Tech in Chemical Engineering in 2023, but found my
                true passion in software development. I love solving complex problems and creating efficient,
                scalable solutions.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Jaipur, India</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">
                      {category.replace(/([A-Z])/g, ' $1')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3 mt-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">{link.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Blog</h2>
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-12 shadow-lg">
              <Code className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Coming Soon!</h3>
              <p className="text-gray-700 mb-6">
                I'm working on sharing my thoughts and experiences in software development.
                Stay tuned for insights on Ruby on Rails, React, and the latest in web technologies.
              </p>
              <p className="text-gray-600">
                Topics I'll be covering: Full-stack development, Performance optimization,
                Team collaboration, and lessons learned from working with large-scale applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life Stuff Section */}
      <section id="life-stuff" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Life Stuff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeStuff.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <item.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Beyond Code</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                or enjoying a good cup of coffee while reading about the latest trends in software development.
                I believe in continuous learning and staying curious about the world around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Connect</h3>
              <p className="text-gray-700 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a
                conversation about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-green-500" />
                  <a href="mailto:lakshyaislearning@gmail.com" className="text-gray-700 hover:text-green-600">
                    lakshyaislearning@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-green-500" />
                  <a href="tel:+918946955670" className="text-gray-700 hover:text-green-600">
                    +91 8946955670
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <a href="https://www.linkedin.com/in/lakshyakanungo/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-700 hover:text-blue-600">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-5 h-5 text-gray-500" />
                  <a href="https://github.com/lakshyakanungo" target="_blank" rel="noopener noreferrer"
                     className="text-gray-700 hover:text-gray-600">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Current Status</h3>
              <div className="space-y-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-800">Available for new opportunities</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Open to full-time positions and exciting projects
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Currently working on</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Scaling applications at Apple and exploring new technologies
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-800">Passionate about</span>
                  </div>
                  <p className="text-purple-700 text-sm">
                    Full-stack development, performance optimization, and team collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Lakshya Kanungo. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
