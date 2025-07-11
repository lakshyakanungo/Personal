import React from "react";

export const Section = ({ id, title, icon, children }) => (
  <section id={id} className="section-marker py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
          {React.cloneElement(icon, {
            className: "w-8 h-8 mr-3 text-gray-600",
          })}
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);
