import React from "react";

import { Section } from "./index";
import { portfolioData } from "../constants";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Contact = () => (
  <Section id="contact" title="Get In Touch" icon={<Mail />}>
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to discussing new projects, creative ideas or
        opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-4">
        <a
          href={`mailto:${portfolioData.email}`}
          className="flex items-center justify-center text-lg text-gray-800 hover:text-green-600 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" /> {portfolioData.email}
        </a>
        <p className="flex items-center justify-center text-lg text-gray-800">
          <Phone className="w-5 h-5 mr-2" /> {portfolioData.phone}
        </p>
        <div className="flex justify-center space-x-6 pt-4">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-colors group"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-colors group"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </Section>
);
