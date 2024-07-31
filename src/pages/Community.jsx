import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, List, ListItem, ListItemText, Link } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Community = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
      <Typography variant="h3" align="center" gutterBottom>
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

      <Box sx={{ padding: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Community
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Since our “operative” stone mason days in the Middle Ages, to the present day “speculative” fraternity, Freemasons have been builders within their community.  The Brothers of Douglas Lodge No. 153 have been ardent supporters of the Town of Castle Rock and Douglas County for over 100 years. Our brethren, through their obligations of service, business acumen, and charitable hearts have strived to build a better community alongside our fellow citizens. From the humble beginnings of our town, we played a role in bringing electricity and sewer services to Castle Rock. During the hard times of the Great Depression, our brothers granted loans to help the local rancher and small businesses, and our shop owners provided critical services to those in need. We were instrumental in erecting the Star on Castle Rock, establishing the public library, and even bringing critical water rights to the town.

We ask for nothing in return. We are overjoyed to work alongside our fellow townsfolk for the betterment of the community. Whether marching out in front or quietly extending a helping hand of charity, we strive to do good works in Hope, by Faith, and through Charity to become better men and Masons. Thank you for visiting our website and please drop us a note if you have ideas on how we can work together to build something beautiful.        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: "2rem" }}>
          <Grid xs={12} md={6} item>
            <Item>
              <Typography variant="h5" gutterBottom>
                Community Events
              </Typography>
              <Typography variant="body2">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Event 1</Link>}
                    secondary="Date: XX/XX/XXXX"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Event 2</Link>}
                    secondary="Date: XX/XX/XXXX"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Event 3</Link>}
                    secondary="Date: XX/XX/XXXX"
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={12} md={6} item>
            <Item>
              <Typography variant="h5" gutterBottom>
                Local Partnerships
              </Typography>
              <Typography variant="body2">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Partner 1</Link>}
                    secondary="Description of partnership"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Partner 2</Link>}
                    secondary="Description of partnership"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="#" color="inherit">Partner 3</Link>}
                    secondary="Description of partnership"
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Community;
