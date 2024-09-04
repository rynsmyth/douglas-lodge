import React from 'react';
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Container } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  wordWrap: 'break-word',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden', position: 'relative', zIndex: 1 }}>
      <HeroSection />
      <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', mt: '150vh', pt: 4 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mt: 4 }}>
          Discover the history and values of Freemasonry.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="body1">
                Masonry is the world's oldest and largest fraternity for men. Although the details of Masonry's beginnings are lost, it is certain that in 1717 four lodges met in a London coffeehouse and formed the first Grand Lodge or association of lodges.
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">
                Masonry entered this country early in our history. Benjamin Franklin, an active Mason, printed the first Masonic book published in the United States. George Washington and other American leaders were active Masons.
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">
                As Masons moved across the continent, they brought Masonry with them. The first recorded Masonic meeting in Colorado was held in the middle of the nineteenth century; the first Rocky Mountain News contained a notice of a Masonic meeting. The Colorado Grand Lodge was formed in 1861. Freemasons have been supporting families and family values since our inception. We have organizations open only to men, only to women, for couples, for boys and for girls. We are the Masonic family.
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
            <div>
              <img src="./douglasSiteImages/squareAndCompassBlue.jpg" alt="Douglas Lodge" style={{ width: '100%', height: 'auto', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./lodgebuildingcirca2022.jpg" alt="Douglas Lodge" style={{ width: '100%', height: 'auto', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./westDoor.jpg" alt="West Door" style={{ width: '100%', height: 'auto', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./douglasSiteImages/uncleSam.jpg" alt="Uncle Sam" style={{ width: '100%', height: 'auto', objectFit: 'cover', margin: '0 auto' }} />
            </div>
          </Carousel>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
