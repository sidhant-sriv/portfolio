import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="subtle-card p-8 md:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">About</h2>
            <p className="text-lg leading-relaxed muted">
              I’m a backend developer and AI/ML practitioner focused on building reliable systems, agentic workflows, and fast developer tools. I study Computer Science at VIT Vellore (2022–2026) and enjoy competitive programming.
            </p>
          </div>
          <div className="subtle-card p-8">
            <h3 className="text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><span className="mt-1 mr-2 h-2 w-2 rounded-full bg-graphite"></span> Top Coder @ VIT (Top 2% of 12k+)</li>
              <li className="flex items-start"><span className="mt-1 mr-2 h-2 w-2 rounded-full bg-graphite"></span> SDE Intern @ Clearfeed.ai (2025)</li>
              <li className="flex items-start"><span className="mt-1 mr-2 h-2 w-2 rounded-full bg-graphite"></span> Backend Dev @ Loopedin.ai (2024–2025)</li>
              <li className="flex items-start"><span className="mt-1 mr-2 h-2 w-2 rounded-full bg-graphite"></span> Inner Core Tech @ GDSC VIT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;