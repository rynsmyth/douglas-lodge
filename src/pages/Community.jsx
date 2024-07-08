import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Make sure you're ready for any potential breaking changes in future updates
import { Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from 'react-responsive-carousel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Community = () => {
    return (
          <Box sx={{ flexGrow: 1, overflowX: 'hidden' }}> {/* Prevents horizontal scrolling */}
          {/* Hero Section */}
          <Typography variant="h3" style={{ textAlign: 'center' }}>
              Community Square
            </Typography>

      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img src="./douglasSiteImages/castleRockFirelogo.png" alt="Lodge Image 1"  style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
        </div>
        <div>
          <img src="./douglasSiteImages/DSCLibraryCornerstone.jpg" alt="Lodge Image 2"  style={{ width: '500px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
        </div>
        <div>
          <img src="./douglasSiteImages/parkerPDLogo.png" alt="Lodge Image 3"  style={{ width: '300px', height: '400px', objectFit: 'cover', margin: '0 auto' }} />
        </div>
      </Carousel>
    
          {/* Grid for additional content */}
          <Grid container spacing={2} sx={{ width: '100vw', margin: '0', '& > .MuiGrid2-root': { paddingLeft: '0', paddingRight: '0' } }}>
            <Grid xs={6} md={8} item>
            <Item>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Item>
            </Grid>
            <Grid xs={6} md={4} item>
            <Item>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Item>
            </Grid>
            <Grid xs={6} md={4} item>
            <Item>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Item>
            </Grid>
            <Grid xs={6} md={8} item>
            <Item>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Item>
            </Grid>
          </Grid>
        </Box>
    );
  };
  
  export default Community;
  