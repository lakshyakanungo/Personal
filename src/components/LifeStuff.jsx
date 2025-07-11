import React from "react";

import { Section } from "./index";
import { portfolioData } from "../constants";
import { Smile } from "lucide-react";

export const LifeStuff = () => (
  <Section id="life-stuff" title="Life Beyond Code" icon={<Smile />}>
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {portfolioData.lifeStuff.map((activity, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
        >
          <activity.icon className="w-12 h-12 mb-4 text-green-600" />
          <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
        </div>
      ))}
    </div>
  </Section>
);
