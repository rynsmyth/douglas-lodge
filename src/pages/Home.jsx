import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Button, Modal, TextField, Container } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

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
        backgroundImage: "url(/douglas-lodge/Resized_Resized_Douglas_Lodge_No._153_AF&AM_BLUE.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};


const ContactModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email handling logic here
    console.log(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle, width: 400 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden', position: 'relative', zIndex: 1 }}>
      <HeroSection />
      <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', mt: '100vh', pt: 4 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mt: 4 }}>
          Discover the history and values of Freemasonry.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="body1">
                Masonry is the world’s oldest and largest fraternity for men. Although the details of Masonry’s beginnings are lost, it is certain that in 1717 four lodges met in a London coffeehouse and formed the first Grand Lodge or association of lodges.
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
              <img src="./douglasSiteImages/squareAndCompassBlue.jpg" alt="Douglas Lodge" style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./lodgebuildingcirca2022.jpg" alt="Douglas Lodge" style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./westDoor.jpg" alt="West Door" style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
            <div>
              <img src="./douglasSiteImages/uncleSam.jpg" alt="Uncle Sam" style={{ width: '300px', height: '400px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
