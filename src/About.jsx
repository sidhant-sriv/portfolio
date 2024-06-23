import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "https://i.imgur.com/OTtk4VY.png",
    "https://i.imgur.com/gsal53S.jpeg",
    "https://i.imgur.com/wrWLiEb.png"
  ];

  return (
    <Box sx={{ margin: "20px auto", color: "white" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              About Me
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              Hi, I'm Sidhant S Srivastava, a Backend Developer & Machine Learning
              Enthusiast based in India. I currently work as a Backend Consultant.
              I am studying Computer Science and Engineering at the Vellore
              Institute of Technology, Vellore.
              <br />
              <br />I like playing the guitar, reading books, and watching movies
              in my free time. I am also a big fan of the Marvel Cinematic
              Universe.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Slider {...settings}>
              {images.map((src, index) => (
                <Box
                  component="img"
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  key={index}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px"
                  }}
                />
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" gutterBottom>
              My Playlist
            </Typography>
            <iframe
              src="https://open.spotify.com/embed/playlist/36qriYnFjbfXanl19gbI0z?theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              style={{ borderRadius: "8px" }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
