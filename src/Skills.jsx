import React from "react";
import { Typography, Box, Chip, Stack } from "@mui/material";

const skills = [
  "Python, Django, Flask, Sanic",
  "DevOps: Docker, Compose, Github CI/CD",
  "Node.js",
  "Cloud: AWS, GCP, DigitalOcean",
  "Machine Learning: Pytorch, Tensorflow, Langchain, LLamaIndex",
  "Data Structures and Algorithms",
  "C/C++, Java",
  "Unix/Linux",
];

const Skills = () => (
  <Box sx={{ margin: "20px auto" }}>
    <Typography variant="h5" component="h1" gutterBottom>
      Skills
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {skills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          variant="outlined"
          color="primary"
          sx={{ marginBottom: "8px" }}
        />
      ))}
    </Stack>
  </Box>
);

export default Skills;
