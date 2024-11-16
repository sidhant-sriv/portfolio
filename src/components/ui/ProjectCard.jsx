// src/components/ui/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';

const ProjectCard = ({ project, onClick }) => {
  const theme = useTheme();

  // Adjust card size based on screen size
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const cardSize = isXs ? '80vw' : isSm ? '150px' : '180px';

  return (
    <div
      style={{ width: cardSize, height: cardSize }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <motion.div
        className="bg-black rounded-full shadow-lg p-2 flex flex-col items-center transform transition-transform duration-300 hover:scale-100"
        style={{ width: '100%', height: '100%' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-full transform transition-transform duration-100 hover:scale-110"
        />
        <div className="mt-2 text-center">
          <h3 className="text-md font-bold text-white">{project.title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;