import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Document RAG using LangChain and CUDA",
    description: "Local RAG system for enhanced information retrieval & generation (20s inference). Integrated Mistral 7b & Palm 2 LLMs for efficient document processing. GPU-accelerated for significant performance gains."
  },
  {
    title: "Reelgen",
    description: "AI powered reel generator. Backend API built using Node.js and utilizes ffmpeg. Uses LLM API to generate content for video based on user prompts. Generates video content (in ~30s) using stable diffusion models hosted on AWS Sagemaker. Deployed on AWS EC2."
  },
  {
    title: "GDSC VIT Recruitments Portal Backend",
    description: "Built on Django REST framework with Postgresql. Redis cache database and NGINX reverse proxy for improved latency and throughput. Hosted serving to 4000+ users."
  },
  {
    title: "Research Consultancy for CMC Vellore",
    description: "Applied machine learning algorithms to analyze patient data for cervical cancer prediction, achieving an accuracy of 98% with a realistic F1 score, significantly improving diagnostic capabilities and potential patient outcomes."
  }
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <Box sx={{  margin: '10px auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </Box>
            </motion.div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;