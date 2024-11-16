// src/components/ui/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded shadow"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap space-x-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={project.liveLink}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.repoLink}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
