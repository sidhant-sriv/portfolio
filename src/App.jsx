import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
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

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  out: { 
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeIn" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      damping: 10,
    },
  },
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const contactVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              py: 4,
            }}
          >
            <MotionBox
              component={motion.div}
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <Header />
            </MotionBox>
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
                sx={{ mb: 4 }}
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 1.0 }}
              >
                <About />
              </MotionBox>
              <motion.hr
                variants={{
                  hidden: { width: "0%" },
                  visible: { width: "100%" }
                }}
                transition={{ duration: 0.5 }}
              />
              <MotionBox
                component={motion.div}
                variants={itemVariants}
                sx={{ mb: 4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Experience />
              </MotionBox>
              <motion.hr
                variants={{
                  hidden: { width: "0%" },
                  visible: { width: "100%" }
                }}
                transition={{ duration: 0.5 }}
              />
              <MotionBox
                component={motion.div}
                variants={itemVariants}
                sx={{ mb: 4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Skills />
              </MotionBox>
              <motion.hr
                variants={{
                  hidden: { width: "0%" },
                  visible: { width: "100%" }
                }}
                transition={{ duration: 0.5 }}
              />
              <MotionBox
                component={motion.div}
                variants={itemVariants}
                sx={{ mb: 4 }}
                whileHover={{ scale: 1.00 }}
                whileTap={{ scale: 1.00 }}
              >
                <Projects />
              </MotionBox>
            </MotionBox>
            <MotionBox
              component={motion.div}
              variants={contactVariants}
              initial="hidden"
              animate="visible"
              sx={{ mt: 4 }}
            >
              <Contact />
            </MotionBox>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  </ThemeProvider>
);

export default App;