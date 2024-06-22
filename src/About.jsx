import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => (
  <Box sx={{ margin: "20px auto" }}>
    <Typography variant="h5" component="h1" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" color="text.secondary">
      B.Tech in Computer Science Engineering from Vellore Institute of
      Technology. Experienced in backend development and machine learning.
    </Typography>
  </Box>
);

export default About;
