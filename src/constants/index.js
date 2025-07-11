import {
  Theater,
  HeartHandshake,
  Mountain,
  BookUser,
} from "lucide-react";

export const portfolioData = {
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
