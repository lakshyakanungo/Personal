import React from "react";

import { Section } from "./index";
import { Briefcase } from "lucide-react";
import { portfolioData } from "../constants";

export const Experience = () => (
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
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-md font-semibold text-gray-700 mb-1">
                {job.company}
              </p>
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
