import React from 'react';
import { Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundImage: "url(./Resized_Resized_Douglas_Lodge_No._153_AF&AM_BLUE.jpeg)",
        backgroundPosition: "center",
        backgroundSize: {
          xs: 'cover', // small screens
          sm: 'cover', // tablets
          md: 'cover', // desktops
        },
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default HeroSection;
