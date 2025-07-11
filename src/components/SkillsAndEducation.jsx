import React from "react";

import { Section } from "./index";
import { portfolioData } from "../constants";
import { GraduationCap, Lightbulb } from "lucide-react";

export const SkillsAndEducation = () => (
  <Section
    id="skills-education"
    title="Skills & Education"
    icon={<GraduationCap />}
  >
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-green-600" />
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {portfolioData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
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
        <p className="text-lg font-semibold text-gray-900">
          {portfolioData.education.institution}
        </p>
        <p className="text-md text-gray-600">
          {portfolioData.education.degree}
        </p>
        <p className="text-sm text-gray-500">
          {portfolioData.education.period}
        </p>
      </div>
    </div>
  </Section>
);
