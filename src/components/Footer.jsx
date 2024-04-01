import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          © Douglas Lodge 2024
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
