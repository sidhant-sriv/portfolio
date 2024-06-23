import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Container, 
  Grid 
} from '@mui/material';

const skills = [
  "Python",
  "Django",
  "Flask",
  "Sanic",
  "Docker", "Compose", "Github CI/CD",
  "Node.js",
  "AWS", "GCP", "DigitalOcean",
  "Pytorch", "Tensorflow", "Langchain", "LLamaIndex",
  "Data Structures and Algorithms",
  "C/C++",
  "Java",
  "Unix/Linux",
];

const Skills = () => {
  return (
    <Container sx={{ margin: "20px auto" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Skills
      </Typography>
      <Box sx={{ margin: "20px auto" }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            sx={{ m: 0.5 }}
            color="secondary"
            variant="outlined"
          />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;