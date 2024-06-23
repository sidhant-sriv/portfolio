import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      // position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.black
          : theme.palette.black,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <IconButton
          aria-label="email"
          color="primary"
          component={Link}
          href="mailto:sidhant.sriv@gmail.com"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          aria-label="phone"
          color="primary"
          component={Link}
          href="tel:+916366017002"
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          aria-label="github"
          color="primary"
          component={Link}
          href="https://github.com/sidhant-sriv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          color="primary"
          component={Link}
          href="https://www.linkedin.com/in/sidhant-srivastava-41803620b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="www.sidsodsud.tech">
          Sidhant S Srivastava
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  </Box>
);

export default Footer;
