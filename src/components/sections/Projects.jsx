// src/components/sections/Projects.jsx
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import projectsData from "../../data/projectsData";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <Box sx={{ margin: "20px 0", padding: "0 20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <h1 className="text-3xl font-bold mb-12 text-center">Projects Showcase</h1>
          <Grid container spacing={3}>
            {projectsData.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
