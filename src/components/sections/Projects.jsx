// src/components/sections/Projects.jsx
import React from 'react';
import projectsData from '../../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.repoLink || project.liveLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="subtle-card p-5 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4 border border-silver">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm muted mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.slice(0,4).map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full border border-silver text-xs">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;