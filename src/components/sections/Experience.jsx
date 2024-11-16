// src/components/sections/Experience.jsx

import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Backend Consultant',
    company: 'Stealth Startup',
    date: 'June 2024 - Present',
    location: 'Remote',
    description:
      'Working on backend development projects using Python and LangChain, contributing to scalable systems and APIs.',
  },
  {
    id: 2,
    title: 'Computer Science and Engineering Student',
    company: 'Vellore Institute of Technology, Vellore',
    date: '2020 - Present',
    location: 'Vellore, India',
    description:
      'Pursuing a degree in Computer Science and Engineering, focusing on machine learning and backend development.',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-20 text-lilac">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h2>
      <div className="relative wrap overflow-hidden p-4 h-full">
        {/* Vertical Timeline Line */}
        <div className="absolute border-2 border-lilac h-full left-1/2 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-lilac shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-black">{index + 1}</span>
            </div>
            <div
              className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-xl">{exp.title}</h3>
              <span className="text-sm font-semibold">
                {exp.company} | {exp.location}
              </span>
              <span className="block text-sm mb-2">{exp.date}</span>
              <p className="text-sm leading-snug tracking-wide">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;