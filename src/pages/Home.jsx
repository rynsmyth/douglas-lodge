import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Make sure you're ready for any potential breaking changes in future updates
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  height: '90vh', // or any other value you prefer
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: "url(src/assets/Resized_Resized_Douglas_Lodge_No._153_AF&AM_BLUE.jpeg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: 'white',
  width: '100vw', // Ensures the section spans the full viewport width
  margin: '0 auto', // Centers the section if it's not already
  overflowX: 'hidden', // Prevents horizontal scrolling caused by full viewport width
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden' }}> {/* Prevents horizontal scrolling */}
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Welcome to Douglas Lodge #153 Homepage
        </Typography>
        <Typography variant="h5">
          Discover the history and values of Freemasonry.
        </Typography>
      </HeroSection>

      {/* Grid for additional content */}
      <Grid container spacing={2} sx={{ width: '100vw', margin: '0', '& > .MuiGrid2-root': { paddingLeft: '0', paddingRight: '0' } }}>
        <Grid xs={6} md={8} item>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4} item>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4} item>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8} item>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
