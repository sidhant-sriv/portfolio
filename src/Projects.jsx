import React from 'react';
import { Typography, Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: "Document RAG using LangChain and CUDA",
    description: "Local RAG system for enhanced information retrieval & generation (20s inference). Integrated Mistral 7b & Palm 2 LLMs for efficient document processing. GPU-accelerated for significant performance gains.",
    link: "https://github.com/sidhant-sriv/lerbut",
    image: "https://i.imgur.com/vJDBVny.jpeg"

  },
  {
    title: "Reelgen",
    description: "AI powered reel generator. Backend API built using Node.js and utilizes ffmpeg. Uses LLM API to generate content for video based on user prompts. Generates video content (in ~30s) using stable diffusion models hosted on AWS Sagemaker. Deployed on AWS EC2. (Design by Esha Santosh)",
    link: "https://github.com/sidhant-sriv/reelgen",
    image: "https://framerusercontent.com/images/JlJspIC5h4WaEwg8DsSDfPfX5yQ.png",

  },
  {
    title: "GDSC VIT Recruitments Portal Backend",
    description: "Built on Django REST framework with Postgresql. Redis cache database and NGINX reverse proxy for improved latency and throughput. Hosted serving to 4000+ users.",
    link: "https://github.com/GDGVIT",
    image: "https://i.imgur.com/iJwQxGR.png"
  },
  {
    title: "Research Consultancy for CMC Vellore",
    description: "Applied machine learning algorithms to analyze patient data for cervical cancer prediction, achieving an accuracy of 98% with a realistic F1 score, significantly improving diagnostic capabilities and potential patient outcomes.",
    link: "https://github.com/sidhant-sriv/Medical-ML",
    image: "https://riseapps.co/wp-content/uploads/2021/08/Machine-Learning-in-Healthcare-Industry.png.webp"
  },
  {
    title: "Zitch",
    description: "Zitch (inspired by the game Zitch dog from HIMYM) is an app that you can use to log the location of a stray dog. Once enough people have logged the locations of dogs it will start giving alerts about whether there could be a dog in your area.",
    link: "https://github.com/sidhant-sriv/zitch",
    image: "https://raw.githubusercontent.com/sidhant-sriv/zitch/zitch-app/assets/onBoarding.png"
  },
  {
    title: "Geloy Art",
    description: "To recreate the art style of @geloyconcepcion on instagram using Mask RCNN.",
    link: "https://www.kaggle.com/code/sidhantssrivastava/geloy-artstyle",
    image: "https://www.kaggleusercontent.com/kf/183952064/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..AIUPWudGiWE6Yum7yMeAOg.wcU9dd73BlanqdsZzpdBMLtLG8KRyhAx030yiTOGxnmiFtenXNCmT2e98FBPpPMPkTDcz20AM2Jv58zYomt5U2zLdex42Aws-gPocBDE0MBDt3QrM9ZgPgbFraeAOuCNsLiRvbBTfBHlmN4M1lamfqPtcT1tPvYSbhCE4duRsUMbPkUgAXlPeABuVV8lTwRH4_NJvhkAjVOeKJJPfA_CwrHcG9veBqgyVsz1v4-6PTh1nbTrpopTiMlJt2HVG7fyevjvlrcmNfYTkv1fnx-oyYeMAwntc39d9c0LkOLTaeWDCxX4ZWWIaagUm-45sgenfMwE6QNkjEMVl8KWSDxtp5V3qBINaEVjNLcp9gh0oQ80vA6e4QrcEzJViUnuJQrCRMCL-4Zc4jrZ9ajQelDIKI2E-AxSQK_CFpCVjY7TRxENwq0mLuc9LXFVEtAK05PCCJKvEP8-XyXjWE3xVsITZwLFnbRqdsN4QbDFIW67X8VdoSztldM26D8OrjIZDjDvW_iQ5tFnMDsS5diZiLSJ5LbUwr8SAzwKrMPGsNvxgiWnszouFAg6Q22hsWAtd0dzMpuK_capgDuCxbf3CIfLkE5YI4hmLUbRSBLp0ocFrMvvjB-PrR4XypHqjrEbC3JYS2hVcDovFOTbtq8Cbr6SBw.v159jn9gE8VJno1VGxawzg/__results___files/__results___15_0.png"
  },
  {
    title: "Ultrachat",
    description: "A discord bot to summarise, query and save your messages with RAG (Retrieval Augmented Generation) and llamaindex.",
    link: "https://github.com/sidhant-sriv/ultrachat",
    image: "https://i.imgur.com/Ilj2LY9.jpeg"
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
    <Box sx={{ margin: '40px auto', }}>
      <Typography variant="h4" component="h2" gutterBottom >
        My Projects
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box sx={{ p: 6, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, margin: '0 10px' }}>
                <img src={project.image} alt={project.title} style={{ width: '600px', maxHeight: '800px', borderRadius: 2, margin: '0 auto' }} />
                <Typography variant="h4" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                {project.link && (
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Tooltip title="View Project" arrow>
                      <IconButton 
                        color="primary" 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                )}
              </Box>
            </motion.div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;
