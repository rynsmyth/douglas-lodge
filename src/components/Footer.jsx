import React, { useState } from "react";
import { Box, Container, Typography, IconButton, Button } from '@mui/material';
import { Facebook as FacebookIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import { ContactModal } from "./ContactModal";


export const Footer = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleContactModalOpen = () => {
    setContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setContactModalOpen(false);
  };
  return (
    <Box component="footer" sx={{ bgcolor: 'transparent', py: 3 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <IconButton
            component="a"
            href="https://www.facebook.com/DouglasMasonicLodge153"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/douglaslodge153"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
        <Button variant="contained" onClick={handleContactModalOpen}>
              Learn More
            </Button>
            <br/>
            <br/>
        <Typography variant="body1" color="text.secondary" align="center">
          © Douglas Lodge 2024 | Castle Rock, CO 80104
        </Typography>
      </Container>
      <ContactModal open={contactModalOpen} handleClose={handleContactModalClose} />
    </Box>
  );
}

export default Footer;
