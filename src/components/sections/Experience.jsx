// src/components/sections/Experience.jsx

import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'SDE Intern',
    company: 'Clearfeed.ai',
    date: 'May 2025 - July 2025',
    location: 'Remote',
    description:
      'Shipped Slack Connect integration and revamped pricing page, lifting user engagement by 15%. Overhauled CI/CD to cut build times and boost deployment frequency by 80%; fixed critical customer issues to improve stability.',
  },
  {
    id: 2,
    title: 'Part-Time Backend Developer',
    company: 'Loopedin.ai',
    date: 'July 2024 - April 2025',
    location: 'Remote',
    description:
      'Improved agentic AI workflow platform for complex multi-step tasks. Built and maintained API integrations with Gmail and JIRA to automate pipelines, reducing manual data entry by 90%.',
  },
  {
    id: 3,
    title: 'B.Tech, Computer Science Engineering',
    company: 'Vellore Institute of Technology (VIT), Vellore',
    date: '2022 - 2026',
    location: 'Vellore, India',
    description:
      'Coursework in data structures, algorithms, and distributed systems; inner core tech team at GDSC VIT.',
  },
  {
    id: 4,
    title: 'Top Coder @ VIT University',
    company: 'VIT, Competitive Programming',
    date: '2025',
    location: 'Vellore, India',
    description:
      'Ranked in the top 2% among 12,000+ students across all VIT campuses.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-20 text-lilac">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h2>
      <div className="relative wrap overflow-hidden p-4 h-full">
        {/* Vertical Timeline Line */}
        <div className="absolute border-2 border-lilac h-full left-1/2 transform -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className="order-1 w-5/12" />
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