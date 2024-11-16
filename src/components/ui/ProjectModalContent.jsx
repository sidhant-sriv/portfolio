// src/components/ui/ProjectModalContent.jsx
import React from 'react';

const ProjectModalContent = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="bg-black w-full h-70 object-cover rounded"
      />
      <h2 className="text-black text-2xl font-bold mt-4">{project.title}</h2>
      <p className="text-lilac mt-2">{project.description}</p>
      <div className="flex flex-wrap space-x-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-lilac px-2 py-1 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex space-x-6">
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="text-gray-500 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            className="text-gray-500 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModalContent;