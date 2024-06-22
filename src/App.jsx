import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
});

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          py: 4,
        }}
      >
        <Header />
        <MotionBox
          sx={{ flexGrow: 1, mt: 2 }}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionBox
            component={motion.div}
            variants={itemVariants}
            sx={{ mb: 4 }} // Add more margin bottom
          >
            <Projects />
          </MotionBox>
          <hr /> {/* Line between Projects and Experience */}
          <MotionBox
            component={motion.div}
            variants={itemVariants}
            sx={{ mb: 4 }} // Add more margin bottom
          >
            <Experience />
          </MotionBox>
          <hr /> {/* Line between Experience and Skills */}
          <MotionBox
            component={motion.div}
            variants={itemVariants}
            sx={{ mb: 4 }} // Add more margin bottom
          >
            <Skills />
          </MotionBox>
          <hr /> {/* Line between Skills and About */}
          <MotionBox
            component={motion.div}
            variants={itemVariants}
            sx={{ mb: 4 }} // Add more margin bottom
          >
            <About />
          </MotionBox>
        </MotionBox>
        <hr /> {/* Line between About and Contact */}
        <MotionBox
          component={motion.div}
          variants={itemVariants}
          sx={{ mt: 4 }} // Add more margin top
        >
          <Contact />
        </MotionBox>
      </Box>
    </Container>
  </ThemeProvider>
);

export default App;
