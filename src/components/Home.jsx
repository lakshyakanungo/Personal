import React from "react";
import { portfolioData } from "../constants";

export const Home =  () => {
  return (
    <section
      id="home"
      className="section-marker min-h-screen flex items-center justify-center text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Hi, I'm <span className="text-green-600">{portfolioData.name}</span>.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          A {portfolioData.title} based in {portfolioData.location}. I build
          things for the web.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
