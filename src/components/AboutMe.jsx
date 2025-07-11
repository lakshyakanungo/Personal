import React from "react";

import { Section } from "./index";
import { portfolioData } from "../constants";
import { User } from "lucide-react";

export const AboutMe = () => (
  <Section id="about-me" title="About Me" icon={<User />}>
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-gray-700 leading-relaxed bg-white/50 p-8 rounded-lg shadow-sm">
        {portfolioData.about}
      </p>
    </div>
  </Section>
);
