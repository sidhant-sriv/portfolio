// src/components/sections/Projects.jsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  useMediaQuery,
  useTheme,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import projectsData from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import ProjectModalContent from '../ui/ProjectModalContent';

const Projects = () => {
  const theme = useTheme();

  // Media queries for responsiveness
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // Set radius based on screen size
  const [radius, setRadius] = useState(300); // Increased radius for more distance

  useEffect(() => {
    if (isXs) {
      setRadius(100);
    } else if (isSm) {
      setRadius(200);
    } else if (isMdUp) {
      setRadius(230); // Increased radius
    }
  }, [isXs, isSm, isMdUp]);

  const totalItems = projectsData.length;

  // State for modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: isXs ? 'auto' : '700px',
        margin: '0 auto',
        padding: isXs ? '20px 0' : '0',
        // Removed overflow: 'hidden' to prevent clipping the modal
      }}
    >
      <h1 className="text-3xl font-bold mb-10 text-center color-lilac">
        Projects Showcase
      </h1>
      {/* For extra-small screens, use a linear layout */}
      {isXs ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {projectsData.map((project) => (
            <Box key={project.id} sx={{ marginBottom: '20px' }}>
              <ProjectCard
                project={project}
                onClick={() => handleOpenModal(project)}
              />
            </Box>
          ))}
        </Box>
      ) : (
        /* Radial layout for larger screens */
        projectsData.map((project, index) => {
          const angle = (360 / totalItems) * index - 90; // Start from top
          const radians = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <Box
              key={project.id}
              sx={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleOpenModal(project)}
              />
            </Box>
          );
        })
      )}

      {/* Modal for displaying full project details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', md: '60%' },
              bgcolor: 'black',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid'
            }}
          >
            {selectedProject && (
              <ProjectModalContent project={selectedProject} />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Projects;