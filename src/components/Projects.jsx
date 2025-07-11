import React from "react";

import { Section } from "./index";
import { portfolioData } from "../constants";
import { Code, Github, Link as LinkIcon } from "lucide-react";

export const Projects = () => (
  <Section id="projects" title="Projects" icon={<Code />}>
    <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
      {portfolioData.projects.map((project, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {project.name}
          </h3>
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
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.links.hosted && (
                <a
                  href={project.links.hosted}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
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
